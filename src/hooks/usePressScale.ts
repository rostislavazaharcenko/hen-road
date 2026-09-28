import {useCallback, useRef} from 'react';
import {Animated} from 'react-native';

/**
 * Press feedback: the Pressable stays the parent and drives a scale spring on
 * an Animated.View CHILD. Transform-only, so useNativeDriver is safe.
 */
export function usePressScale(pressed = 0.96) {
  const scale = useRef(new Animated.Value(1)).current;

  const onPressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: pressed,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [pressed, scale]);

  const onPressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      tension: 300,
      friction: 12,
      useNativeDriver: true,
    }).start();
  }, [scale]);

  return {scale, onPressIn, onPressOut};
}
