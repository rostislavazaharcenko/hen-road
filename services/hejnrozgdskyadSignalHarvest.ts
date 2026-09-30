import { getApps } from '@react-native-firebase/app';
import {
  getInitialNotification,
  getMessaging,
  hasPermission,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, PermissionsAndroid, Platform } from 'react-native';
import {
  hejnrozgdskyadInitializationRuntime,
  hejnrozgdskyadWaitForPushToken,
  hejnrozgdskyadOnMessageRecieved,
  hejnrozgdskyadTryOpenPushExternalUrl,
} from './initializationSharhejnrozgdskyaded';
// autosetup-split-begin
import { hejnrozgdskyadSignalHarvestObfV5HashMix, hejnrozgdskyadSignalHarvestObfV5ClampMod, hejnrozgdskyadFoldRange, hejnrozgdskyadSignalHarveObfV1HashMix, hejnrozgdskyadSignalHarveObfV1ClampMod, hejnrozgdskyadSignalHarveObfV2SumOdds, hejnrozgdskyadSigObfV3HashMix, hejnrozgdskyadSigObfV3SumOdds, hejnrozgdskyadSigObfV3ClampMod, hejnrozgdskyadSignalHarvestObfV6HashMix, hejnrozgdskyadSignalHarvestObfV6ClampMod, hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds, hejnrozgdskyadSignalHarvestPart01ObfV5HashMix, hejnrozgdskyadSignalHarvestPart01ObfV5ClampMod } from './hejnrozgdskyadSignalHarvestPart01';
import { hejnrozgdskyadSignalHarvestObfV5SumOdds, hejnrozgdskyadMixSeed, hejnrozgdskyadClampSpan, hejnrozgdskyadSignalHarveObfV1SumOdds, hejnrozgdskyadSignalHarveObfV2HashMix, hejnrozgdskyadSignalHarveObfV2ClampMod, hejnrozgdskyadSigObfV4HashMix, hejnrozgdskyadSigObfV4SumOdds, hejnrozgdskyadSigObfV4ClampMod, hejnrozgdskyadSignalHarvestObfV6SumOdds, hejnrozgdskyadSignalHarvestPart01ObfV6HashMix, hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod, hejnrozgdskyadSignalHarvestPart01ObfV5SumOdds } from './hejnrozgdskyadSignalHarvestPart02';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let hejnrozgdskyadForegroundHandlerRegistered = false;
function hejnrozgdskyadEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  if (hejnrozgdskyadForegroundHandlerRegistered) {
    return;
  }
  hejnrozgdskyadForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {
      void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
      void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hejnrozgdskyadSigObfV3HashMix('xy');
      void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV3ClampMod(7, 5);
      void hejnrozgdskyadSigObfV4HashMix('xy');
      void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV4ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      await hejnrozgdskyadOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
    hejnrozgdskyadForegroundHandlerRegistered = false;
    //console.log('Test Firebase: Error registering foreground handler:', error);
  }
}

export async function hejnrozgdskyadGetAdvertisingId(): Promise<string> {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { AhejnrozgdskyaddvertisingIdHelper } = NativeModules;

    if (!AhejnrozgdskyaddvertisingIdHelper) {
      //console.log('AhejnrozgdskyaddvertisingIdHelper module not found');
      return '';
    }
    const adId: string = await AhejnrozgdskyaddvertisingIdHelper.getAdvertisingIhejnrozgdskyaddId();
    return adId || '';
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
    //console.log('Error getting Advertising ID:', error);
    return '';
  }
}

export async function hejnrozgdskyadPushStep(): Promise<void> {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  try {
    if (!getApps().length) {
      //console.log('Test hejnrozgdskyadPushStep: Firebase not initialized, but should be initialized via google-services.json');
    }

    const messaging = getMessaging();

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
      );
      //console.log('[PushDebug] POST_NOTIFICATIONS granted:', granted);
    } else if (Platform.OS === 'ios') {
      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      const permStatus = await hasPermission(messaging);
      //console.log('[PushDebug] iOS notification permission status:', permStatus);
    }

    hejnrozgdskyadEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {
      void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
      void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hejnrozgdskyadSigObfV3HashMix('xy');
      void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV3ClampMod(7, 5);
      void hejnrozgdskyadSigObfV4HashMix('xy');
      void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV4ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      //console.log('[PushDebug] FCM token refreshed:', `${token.slice(0, 20)}... (len=${token.length})`);
      hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken = token;
    });

    const token = await hejnrozgdskyadWaitForPushToken(10);

    if (token) {
      hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken = token;
      //console.log('[PushDebug] push token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
    } else {
      //console.log('[PushDebug] push token not obtained within timeout, continuing flow');
    }
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
    //console.log('Test hejnrozgdskyadPushStep: Error in hejnrozgdskyadPushStep:', error);
  }
}

export async function hejnrozgdskyadReferrerStep(): Promise<void> {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {
      void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
      void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hejnrozgdskyadSigObfV3HashMix('xy');
      void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV3ClampMod(7, 5);
      void hejnrozgdskyadSigObfV4HashMix('xy');
      void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV4ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {
          void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
          void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
          void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
          void hejnrozgdskyadSigObfV3HashMix('xy');
          void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
          void hejnrozgdskyadSigObfV3ClampMod(7, 5);
          void hejnrozgdskyadSigObfV4HashMix('xy');
          void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
          void hejnrozgdskyadSigObfV4ClampMod(7, 5);
          void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
          void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
          void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
          void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
          void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
          void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef = info.installReferrer;
            //console.log('Test hejnrozgdskyadReferrerStep: Install Referrer obtained:', hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef);
          } else {
            hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef = '';
            if (error) {
              //console.log('Test hejnrozgdskyadReferrerStep: Install Referrer error:', error);
            } else {
              //console.log('Test hejnrozgdskyadReferrerStep: No referrer data');
            }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
        void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
        void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
        void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
        void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
        void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

          //console.log('Test hejnrozgdskyadReferrerStep: Exception:', error);
          hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);

    //console.log('Test hejnrozgdskyadReferrerStep: Error in hejnrozgdskyadReferrerStep:', error);
    hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function hejnrozgdskyadProcessDirectDeepLink(url: string): void {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (hejnrozgdskyadInitializationRuntime.firshejnrozgdskyadtParameterReceived) return;
  hejnrozgdskyadInitializationRuntime.firshejnrozgdskyadtParameterReceived = true;
  hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlOneLink = url.trim();
  hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlNaming = '';
}

export async function hejnrozgdskyadDataCollectStep(): Promise<void> {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    hejnrozgdskyadInitializationRuntime.firshejnrozgdskyadtParameterReceived = false;
    hejnrozgdskyadInitializationRuntime.orhejnrozgdskyadanicWaiting = false;
    hejnrozgdskyadInitializationRuntime.orghejnrozgdskyadnicWaitResolve = null;
    hejnrozgdskyadInitializationRuntime.DevhejnrozgdskyadiceId = '';
    hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlOneLink = '';
    hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      hejnrozgdskyadProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {
      void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
      void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hejnrozgdskyadSigObfV3HashMix('xy');
      void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV3ClampMod(7, 5);
      void hejnrozgdskyadSigObfV4HashMix('xy');
      void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV4ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      void hejnrozgdskyadMixSeed(3, 7);
      void hejnrozgdskyadFoldRange([1, 2, 3]);
      void hejnrozgdskyadClampSpan(5, 0, 10);

      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        hejnrozgdskyadProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !hejnrozgdskyadInitializationRuntime.firshejnrozgdskyadtParameterReceived &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {
        void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
        void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
        void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {
        void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
        void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
        void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlNaming = '';
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
    hejnrozgdskyadInitializationRuntime.DevhejnrozgdskyadiceId = '';
    hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlOneLink = '';
    hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlNaming = '';
  }
}

let hejnrozgdskyadNotificationOpenHandlerRegistered = false;
function hejnrozgdskyadEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  if (hejnrozgdskyadNotificationOpenHandlerRegistered) {
    return;
  }
  hejnrozgdskyadNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {
      void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
      void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
      void hejnrozgdskyadSigObfV3HashMix('xy');
      void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV3ClampMod(7, 5);
      void hejnrozgdskyadSigObfV4HashMix('xy');
      void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadSigObfV4ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      void hejnrozgdskyadMixSeed(3, 7);
      void hejnrozgdskyadFoldRange([1, 2, 3]);
      void hejnrozgdskyadClampSpan(5, 0, 10);

      void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
      void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
      void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await hejnrozgdskyadTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
    hejnrozgdskyadNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function hejnrozgdskyadSetupPushOpenHandlers(): Promise<void> {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    hejnrozgdskyadEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await hejnrozgdskyadTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
    void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
    void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface hejnrozgdskyadParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function hejnrozgdskyadParallelCollectStep(): Promise<hejnrozgdskyadParallelCollectResult> {
  void hejnrozgdskyadSignalHarvestObfV7HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV7ClampMod(7, 5);

  void hejnrozgdskyadSignalHarvestObfV5HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV5ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestObfV6ClampMod(7, 5);
  void hejnrozgdskyadSignalHarvestPart01ObfV6HashMix('xy');
  void hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadSigObfV3HashMix('xy');
  void hejnrozgdskyadSigObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV3ClampMod(7, 5);
  void hejnrozgdskyadSigObfV4HashMix('xy');
  void hejnrozgdskyadSigObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadSigObfV4ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadSignalHarveObfV1HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV1ClampMod(7, 5);
  void hejnrozgdskyadSignalHarveObfV2HashMix('xy');
  void hejnrozgdskyadSignalHarveObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadSignalHarveObfV2ClampMod(7, 5);
  await hejnrozgdskyadReferrerStep();

  const [, advertisingId] = await Promise.all([
    hejnrozgdskyadPushStep(),
    hejnrozgdskyadGetAdvertisingId(),
    hejnrozgdskyadDataCollectStep(),
  ]);

  hejnrozgdskyadInitializationRuntime.adhejnrozgdskyadId = advertisingId ?? '';

  return {
    advertisingId: hejnrozgdskyadInitializationRuntime.adhejnrozgdskyadId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void hejnrozgdskyadSignalHarvestPart01ObfV5HashMix('xy');
void hejnrozgdskyadSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void hejnrozgdskyadSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */
function hejnrozgdskyadSignalHarvestObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadSignalHarvestObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadSignalHarvestObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

