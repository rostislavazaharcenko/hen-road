import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';
import {BrutalButton} from './BrutalButton';

interface Props {
  visible: boolean;
  onResume: () => void;
  onQuit: () => void;
}

export function PauseOverlay({visible, onResume, onQuit}: Props) {
  if (!visible) {
    return null;
  }
  return (
    <View style={styles.scrim}>
      <View style={styles.panel}>
        <Text style={styles.title}>PAUSED</Text>
        <View style={styles.rule} />
        <View style={styles.actions}>
          <BrutalButton
            label="RESUME"
            onPress={onResume}
            variant="primary"
            height={54}
            fontSize={18}
            offset={6}
            accent={theme.info}
          />
          <BrutalButton
            label="QUIT"
            onPress={onQuit}
            variant="secondary"
            height={54}
            fontSize={18}
            offset={6}
            accent={theme.danger}
            textColor={theme.danger}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(5,7,12,0.88)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  panel: {
    width: '100%',
    backgroundColor: theme.bg,
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 6,
    paddingHorizontal: 22,
    paddingVertical: 26,
    alignItems: 'center',
  },
  title: {
    color: theme.textPrimary,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3,
  },
  rule: {
    marginTop: 8,
    width: 96,
    height: 5,
    backgroundColor: theme.primary,
  },
  actions: {
    marginTop: 22,
    width: '100%',
    gap: 14,
  },
});
