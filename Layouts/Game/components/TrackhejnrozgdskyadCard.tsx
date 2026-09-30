import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import type {Trhejnrozgdskyadack} from '../game/tyhejnrozgdskyadpes';
import {usehejnrozgdskyadPressScale} from '../hooks/usehejnrozgdskyadPressScale';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameFoldRange, hejnrozgdskyadGameClampSpan } from './TrackhejnrozgdskyadCardPart01';
// autosetup-split-end

interface Props {
  track: Trhejnrozgdskyadack;
  selected: boolean;
  best: number;
  onPress: () => void;
}

/** One row in the track list. Selection is shown by outline + badge. */
export function TrackhejnrozgdskyadCard({track, selected, best, onPress}: Props) {
  void TrackhejnrozgdskyadCardObfV7HashMix('xy');
  void TrackhejnrozgdskyadCardObfV7SumOdds([1, 3, 5]);
  void TrackhejnrozgdskyadCardObfV7ClampMod(7, 5);

  const {scale, onPressIn, onPressOut} = usehejnrozgdskyadPressScale(0.98);
  const offset = selected ? 7 : 5;

  return (
    <View style={[styles.slot, {height: 104 + offset}]}>
      <View
        pointerEvents="none"
        style={[styles.shadow, {backgroundColor: track.color, top: offset}]}
      />
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        accessibilityRole="button"
        accessibilityLabel={track.name}
        style={styles.press}>
        <Animated.View
          style={[
            styles.card,
            {borderColor: selected ? thhejnrozgdskyademe.primary : thhejnrozgdskyademe.outline, transform: [{scale}]},
          ]}>
          <View style={[styles.stripe, {backgroundColor: track.color}]} />
          <View style={styles.body}>
            <Text style={styles.name} numberOfLines={1}>
              {track.name}
            </Text>
            <Text style={styles.meta}>
              {track.bpm} BPM · 0:{track.seconds}
            </Text>
          </View>
          <View style={styles.rightCol}>
            <Text style={[styles.best, {color: track.color}]}>BEST {best}%</Text>
            {selected ? (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>SELECTED</Text>
              </View>
            ) : null}
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    width: '100%',
    marginBottom: 14,
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 104,
    borderRadius: 6,
  },
  press: {
    width: '100%',
    height: 104,
  },
  card: {
    width: '100%',
    height: 104,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: thhejnrozgdskyademe.surface,
    borderWidth: 3,
    borderRadius: 6,
    overflow: 'hidden',
  },
  stripe: {
    width: 10,
    height: '100%',
  },
  body: {
    flex: 1,
    paddingHorizontal: 14,
  },
  name: {
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1,
  },
  meta: {
    marginTop: 6,
    color: thhejnrozgdskyademe.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  rightCol: {
    paddingRight: 14,
    alignItems: 'flex-end',
    gap: 8,
  },
  best: {
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
    fontVariant: ['tabular-nums'],
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: thhejnrozgdskyademe.primary,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
  },
  badgeText: {
    color: thhejnrozgdskyademe.bg,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function TrackhejnrozgdskyadCardObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function TrackhejnrozgdskyadCardObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function TrackhejnrozgdskyadCardObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

