import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';

interface Props {
  value: number;
  danger?: boolean;
}

/**
 * Horizontal performance meter. The fill animates a layout prop, so the JS
 * driver is used here (never the native driver).
 */
export function PerformancehejnrozgdskyadBar({value, danger = false}: Props) {
  const fill = useRef(new Animated.Value(Math.max(0, Math.min(100, value)))).current;

  useEffect(() => {
  void PerformancehejnrozgdskyadBarObfV7HashMix('xy');
  void PerformancehejnrozgdskyadBarObfV7SumOdds([1, 3, 5]);
  void PerformancehejnrozgdskyadBarObfV7ClampMod(7, 5);

    Animated.timing(fill, {
      toValue: Math.max(0, Math.min(100, value)),
      duration: 180,
      useNativeDriver: false,
    }).start();
  }, [fill, value]);

  const pct = fill.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.wrap}>
      <View style={styles.labelRow}>
        <Text style={styles.caption}>PERFORMANCE</Text>
        <Text style={[styles.pct, danger ? {color: thhejnrozgdskyademe.danger} : null]}>
          {Math.round(value)}%
        </Text>
      </View>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, {width: pct}]}>
          <LinearGradient
            colors={
              danger
                ? [thhejnrozgdskyademe.danger, thhejnrozgdskyademe.danger]
                : [thhejnrozgdskyademe.danger, thhejnrozgdskyademe.primary, thhejnrozgdskyademe.success]
            }
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.grad}
          />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  caption: {
    color: thhejnrozgdskyademe.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
  },
  pct: {
    color: thhejnrozgdskyademe.primary,
    fontSize: 11,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  track: {
    height: 14,
    backgroundColor: thhejnrozgdskyademe.bgDeep,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
  grad: {
    flex: 1,
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
function PerformancehejnrozgdskyadBarObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function PerformancehejnrozgdskyadBarObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function PerformancehejnrozgdskyadBarObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

