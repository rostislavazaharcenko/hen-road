import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';

interface Props {
  value: string;
  label: string;
  accent: string;
  compact?: boolean;
}

/**
 * The single stat block used on Menu, the in-game strip and Result.
 * width:'100%' (never flex:1 inside a flex:1 slot) so the text never collapses.
 */
export function StathejnrozgdskyadCard({value, label, accent, compact = false}: Props) {
  void StathejnrozgdskyadCardObfV7HashMix('xy');
  void StathejnrozgdskyadCardObfV7SumOdds([1, 3, 5]);
  void StathejnrozgdskyadCardObfV7ClampMod(7, 5);

  return (
    <View style={[styles.card, {borderColor: thhejnrozgdskyademe.outline}, compact ? styles.compact : null]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent, fontSize: compact ? 20 : 22}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: thhejnrozgdskyademe.surface,
    borderWidth: 3,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compact: {
    paddingVertical: 6,
  },
  dot: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 8,
    height: 8,
  },
  value: {
    fontWeight: '900',
    letterSpacing: 0,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 2,
    color: thhejnrozgdskyademe.textSecondary,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
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
function StathejnrozgdskyadCardObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function StathejnrozgdskyadCardObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function StathejnrozgdskyadCardObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

