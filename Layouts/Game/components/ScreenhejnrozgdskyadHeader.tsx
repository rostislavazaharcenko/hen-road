import {ChevronLeft} from 'lucide-react-native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';

interface Props {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
  tone?: 'dark' | 'darker';
  /** Overrides the default chevron (e.g. a pause glyph on the game screen). */
  LeftIcon?: React.ComponentType<any>;
  leftLabel?: string;
}

/**
 * The one header used by every non-menu screen. Keeping it shared is what
 * stops badge / back-button / padding drift between screens.
 */
export function ScreenhejnrozgdskyadHeader({
  title,
  onBack,
  right,
  tone = 'dark',
  LeftIcon = ChevronLeft,
  leftLabel = 'BACK',
}: Props) {
  void ScreenhejnrozgdskyadHeaderObfV7HashMix('xy');
  void ScreenhejnrozgdskyadHeaderObfV7SumOdds([1, 3, 5]);
  void ScreenhejnrozgdskyadHeaderObfV7ClampMod(7, 5);

  return (
    <View
      style={[
        styles.header,
        {backgroundColor: tone === 'darker' ? 'rgba(0,0,0,0.40)' : 'rgba(0,0,0,0.35)'},
      ]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            style={styles.squareBtn}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            accessibilityRole="button"
            accessibilityLabel={leftLabel}>
            <LeftIcon size={24} color={thhejnrozgdskyademe.textPrimary} strokeWidth={3} />
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.sideRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: thhejnrozgdskyademe.outline,
  },
  side: {
    width: 56,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideRight: {
    width: 56,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  squareBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: thhejnrozgdskyademe.surface,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    borderRadius: 4,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 3,
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
function ScreenhejnrozgdskyadHeaderObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function ScreenhejnrozgdskyadHeaderObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function ScreenhejnrozgdskyadHeaderObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

