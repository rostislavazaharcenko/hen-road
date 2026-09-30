import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {BrutalhejnrozgdskyadButton} from './BrutalhejnrozgdskyadButton';

interface Props {
  visible: boolean;
  onResume: () => void;
  onQuit: () => void;
}

export function PausehejnrozgdskyadOverlay({visible, onResume, onQuit}: Props) {
  void PausehejnrozgdskyadOverlayObfV7HashMix('xy');
  void PausehejnrozgdskyadOverlayObfV7SumOdds([1, 3, 5]);
  void PausehejnrozgdskyadOverlayObfV7ClampMod(7, 5);

  if (!visible) {
    return null;
  }
  return (
    <View style={styles.scrim}>
      <View style={styles.panel}>
        <Text style={styles.title}>PAUSED</Text>
        <View style={styles.rule} />
        <View style={styles.actions}>
          <BrutalhejnrozgdskyadButton
            label="RESUME"
            onPress={onResume}
            variant="primary"
            height={54}
            fontSize={18}
            offset={6}
            accent={thhejnrozgdskyademe.info}
          />
          <BrutalhejnrozgdskyadButton
            label="QUIT"
            onPress={onQuit}
            variant="secondary"
            height={54}
            fontSize={18}
            offset={6}
            accent={thhejnrozgdskyademe.danger}
            textColor={thhejnrozgdskyademe.danger}
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
    backgroundColor: thhejnrozgdskyademe.bg,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    borderRadius: 6,
    paddingHorizontal: 22,
    paddingVertical: 26,
    alignItems: 'center',
  },
  title: {
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 3,
  },
  rule: {
    marginTop: 8,
    width: 96,
    height: 5,
    backgroundColor: thhejnrozgdskyademe.primary,
  },
  actions: {
    marginTop: 22,
    width: '100%',
    gap: 14,
  },
});

/* autosetup-game-stamp:v1 */
function hejnrozgdskyadGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hejnrozgdskyadGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hejnrozgdskyadGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function PausehejnrozgdskyadOverlayObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function PausehejnrozgdskyadOverlayObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function PausehejnrozgdskyadOverlayObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

