import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text} from 'react-native';

interface Props {
  text: string;
  color: string;
  laneW: number;
  lane: number;
  y: number;
}

/** Judgement pop above the hit line. One finite animation, then it settles. */
function JudgeToastBase({text, color, laneW, lane, y}: Props) {
  const rise = useRef(new Animated.Value(0)).current;
  const fade = useRef(new Animated.Value(1)).current;

  useEffect(() => {
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

export const JudgeToast = memo(JudgeToastBase);
