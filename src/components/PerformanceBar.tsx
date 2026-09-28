import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';

interface Props {
  value: number;
  danger?: boolean;
}

/**
 * Horizontal performance meter. The fill animates a layout prop, so the JS
 * driver is used here (never the native driver).
 */
export function PerformanceBar({value, danger = false}: Props) {
  const fill = useRef(new Animated.Value(Math.max(0, Math.min(100, value)))).current;

  useEffect(() => {
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
        <Text style={[styles.pct, danger ? {color: theme.danger} : null]}>
          {Math.round(value)}%
        </Text>
      </View>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, {width: pct}]}>
          <LinearGradient
            colors={
              danger
                ? [theme.danger, theme.danger]
                : [theme.danger, theme.primary, theme.success]
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
    color: theme.textMuted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 2,
  },
  pct: {
    color: theme.primary,
    fontSize: 11,
    fontWeight: '900',
    fontVariant: ['tabular-nums'],
  },
  track: {
    height: 14,
    backgroundColor: theme.bgDeep,
    borderWidth: 3,
    borderColor: theme.outline,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
  },
  grad: {
    flex: 1,
  },
});
