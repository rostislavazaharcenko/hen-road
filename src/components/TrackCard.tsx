import React from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';
import type {Track} from '../game/types';
import {usePressScale} from '../hooks/usePressScale';

interface Props {
  track: Track;
  selected: boolean;
  best: number;
  onPress: () => void;
}

/** One row in the track list. Selection is shown by outline + badge. */
export function TrackCard({track, selected, best, onPress}: Props) {
  const {scale, onPressIn, onPressOut} = usePressScale(0.98);
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
            {borderColor: selected ? theme.primary : theme.outline, transform: [{scale}]},
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
    backgroundColor: theme.surface,
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
    color: theme.textPrimary,
    fontSize: 20,
    fontWeight: '900',
    letterSpacing: 1,
  },
  meta: {
    marginTop: 6,
    color: theme.textSecondary,
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
    backgroundColor: theme.primary,
    borderWidth: 3,
    borderColor: theme.outline,
  },
  badgeText: {
    color: theme.bg,
    fontSize: 9,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
});
