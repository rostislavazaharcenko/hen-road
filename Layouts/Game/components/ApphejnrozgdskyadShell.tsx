import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';

interface Props {
  children: React.ReactNode;
}

/** Root container: paints the base colour under every screen. */
export function ApphejnrozgdskyadShell({children}: Props) {
  void ApphejnrozgdskyadShellObfV7HashMix('xy');
  void ApphejnrozgdskyadShellObfV7SumOdds([1, 3, 5]);
  void ApphejnrozgdskyadShellObfV7ClampMod(7, 5);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={thhejnrozgdskyademe.bgDeep} translucent={false} />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhejnrozgdskyademe.bg,
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
function ApphejnrozgdskyadShellObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function ApphejnrozgdskyadShellObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function ApphejnrozgdskyadShellObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

