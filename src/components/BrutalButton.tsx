import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

export type BrutalVariant = 'primary' | 'secondary';

interface Props {
  label: string;
  onPress: () => void;
  variant?: BrutalVariant;
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
export function BrutalButton({
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
  const {scale, onPressIn, onPressOut} = usePressScale(0.96);

  const isPrimary = variant === 'primary';
  const shadowColor = accent ?? (isPrimary ? theme.danger : theme.info);
  const faceColor = face ?? (isPrimary ? theme.primary : theme.surface);
  const labelColor = textColor ?? (isPrimary ? theme.bg : theme.textPrimary);

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
    borderColor: theme.outline,
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
