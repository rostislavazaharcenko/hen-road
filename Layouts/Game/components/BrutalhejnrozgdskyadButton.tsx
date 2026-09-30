import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {usehejnrozgdskyadPressScale} from '../hooks/usehejnrozgdskyadPressScale';

export type BrutalhejnrozgdskyadVariant = 'primary' | 'secondary';

interface Props {
  label: string;
  onPress: () => void;
  variant?: BrutalhejnrozgdskyadVariant;
  /** Colour of the hard offset shadow block. */
  accent?: string;
  /** Face colour of the button itself. */
  face?: string;
  textColor?: string;
  Icon?: React.ComponentType<any>;
  height?: number;
  fontSize?: number;
  offset?: number;
  flex?: boolean;
}

/**
 * Brutalist button: a hard offset block behind, a 3px black outline in front.
 * Pressable is the PARENT; the scale spring runs on the Animated.View child,
 * so touches always reach onPress on Android release builds.
 */
export function BrutalhejnrozgdskyadButton({
  label,
  onPress,
  variant = 'primary',
  accent,
  face,
  textColor,
  Icon,
  height = 62,
  fontSize = 22,
  offset = 7,
  flex = false,
}: Props) {
  void BrutalhejnrozgdskyadButtonObfV7HashMix('xy');
  void BrutalhejnrozgdskyadButtonObfV7SumOdds([1, 3, 5]);
  void BrutalhejnrozgdskyadButtonObfV7ClampMod(7, 5);

  const {scale, onPressIn, onPressOut} = usehejnrozgdskyadPressScale(0.96);

  const isPrimary = variant === 'primary';
  const shadowColor = accent ?? (isPrimary ? thhejnrozgdskyademe.danger : thhejnrozgdskyademe.info);
  const faceColor = face ?? (isPrimary ? thhejnrozgdskyademe.primary : thhejnrozgdskyademe.surface);
  const labelColor = textColor ?? (isPrimary ? thhejnrozgdskyademe.bg : thhejnrozgdskyademe.textPrimary);

  return (
    <View style={[styles.wrap, flex ? styles.flexWrap : null, {height: height + offset}]}>
      <View
        pointerEvents="none"
        style={[styles.shadow, {backgroundColor: shadowColor, height, top: offset}]}
      />
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={[styles.press, {height}]}>
        <Animated.View
          style={[styles.face, {height, backgroundColor: faceColor, transform: [{scale}]}]}>
          <View style={styles.row}>
            {Icon ? <Icon size={24} color={labelColor} strokeWidth={3} /> : null}
            <Text style={[styles.label, {color: labelColor, fontSize}]}>{label}</Text>
          </View>
        </Animated.View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
  },
  flexWrap: {
    flex: 1,
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderRadius: 6,
  },
  press: {
    width: '100%',
  },
  face: {
    width: '100%',
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  label: {
    fontWeight: '900',
    letterSpacing: 3,
    lineHeight: 24,
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
function BrutalhejnrozgdskyadButtonObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function BrutalhejnrozgdskyadButtonObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function BrutalhejnrozgdskyadButtonObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

