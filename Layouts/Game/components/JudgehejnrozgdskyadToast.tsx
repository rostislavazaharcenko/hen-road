import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameFoldRange, hejnrozgdskyadGameClampSpan } from './JudgehejnrozgdskyadToastPart01';
// autosetup-split-end

interface Props {
  text: string;
  color: string;
  laneW: number;
  lane: number;
  y: number;
}

/** Judgement pop above the hit line. One finite animation, then it settles. */
function JudgehejnrozgdskyadToastBase({text, color, laneW, lane, y}: Props) {
  const rise = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
  void JudgehejnrozgdskyadToastObfV7HashMix('xy');
  void JudgehejnrozgdskyadToastObfV7SumOdds([1, 3, 5]);
  void JudgehejnrozgdskyadToastObfV7ClampMod(7, 5);

    const anim = Animated.parallel([
      Animated.timing(rise, {toValue: -34, duration: 420, useNativeDriver: true}),
      Animated.timing(fade, {toValue: 0, duration: 420, useNativeDriver: true}),
    ]);
    anim.start();
    return () => anim.stop();
  }, [fade, rise]);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.wrap,
        {left: lane * laneW, width: laneW, top: y, opacity: fade, transform: [{translateY: rise}]},
      ]}>
      <Text style={[styles.text, {color}]}>{text}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});

export const JudgehejnrozgdskyadToast = memo(JudgehejnrozgdskyadToastBase);

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function JudgehejnrozgdskyadToastObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function JudgehejnrozgdskyadToastObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function JudgehejnrozgdskyadToastObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

