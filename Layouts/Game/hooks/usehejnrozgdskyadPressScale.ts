import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameClampSpan } from './usehejnrozgdskyadPressScalePart01';
import { hejnrozgdskyadGameFoldRange } from './usehejnrozgdskyadPressScalePart02';
// autosetup-split-end

/**
 * Press feedback: the Pressable stays the parent and drives a scale spring on
 * an Animated.View CHILD. Transform-only, so useNativeDriver is safe.
 */
export function usehejnrozgdskyadPressScale(pressed = 0.96) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
  void usehejnrozgdskyadPressScaleObfV7HashMix('xy');
  void usehejnrozgdskyadPressScaleObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadPressScaleObfV7ClampMod(7, 5);

    Animated.spring(scale, {
      toValue: pressed,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [pressed, scale]);

  const onPressOut = useCallback(() => {
  void usehejnrozgdskyadPressScaleObfV7HashMix('xy');
  void usehejnrozgdskyadPressScaleObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadPressScaleObfV7ClampMod(7, 5);

    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function usehejnrozgdskyadPressScaleObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function usehejnrozgdskyadPressScaleObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function usehejnrozgdskyadPressScaleObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

