import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useApphejnrozgdskyadInitialization } from './services/inithejnrozgdskyadializationFlow';
import ApphejnrozgdskyadPlaceholder from './Layouts/Game/GamehejnrozgdskyadInit';
import LoaderhejnrozgdskyadScreen from './Layouts/Game/screens/LoaderhejnrozgdskyadScreen';
import { hejnrozgdskyadViewportGetState, hejnrozgdskyadViewportRestore } from './services/hejnrozgdskyadViewportHost';

function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ApphejnrozgdskyadContent />
    </SafeAreaProvider>
  );
}

function ApphejnrozgdskyadContent() {
  const { ishejnrozgdskyadLoading, ishejnrozgdskyadLoadPlaceholder } = useApphejnrozgdskyadInitialization();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [menuhejnrozgdskyadArmed, setMenuhejnrozgdskyadArmed] = useState(false);
  const apphejnrozgdskyadState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const showhejnrozgdskyadGame =
    !ishejnrozgdskyadLoading && ishejnrozgdskyadLoadPlaceholder;

  const handlehejnrozgdskyadFirstProgress = useCallback(() => {
    setMenuhejnrozgdskyadArmed(true);
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = apphejnrozgdskyadState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = hejnrozgdskyadViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          hejnrozgdskyadViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      apphejnrozgdskyadState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(menuhejnrozgdskyadArmed || showhejnrozgdskyadGame) && (
        <ApphejnrozgdskyadPlaceholder starthejnrozgdskyadAtMenu />
      )}
      {!showhejnrozgdskyadGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderhejnrozgdskyadScreen
            doneOnFihejnrozgdskyadrstCycle
            onDhejnrozgdskyadone={handlehejnrozgdskyadFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
