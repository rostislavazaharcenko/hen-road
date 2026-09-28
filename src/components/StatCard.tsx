import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';

interface Props {
  value: string;
  label: string;
  accent: string;
  compact?: boolean;
}

/**
 * The single stat block used on Menu, the in-game strip and Result.
 * width:'100%' (never flex:1 inside a flex:1 slot) so the text never collapses.
 */
export function StatCard({value, label, accent, compact = false}: Props) {
  return (
    <View style={[styles.card, {borderColor: theme.outline}, compact ? styles.compact : null]}>
      <View style={[styles.dot, {backgroundColor: accent}]} />
      <Text style={[styles.value, {color: accent, fontSize: compact ? 20 : 22}]} numberOfLines={1}>
        {value}
      </Text>
      <Text style={styles.label} numberOfLines={1}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: theme.surface,
    borderWidth: 3,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compact: {
    paddingVertical: 6,
  },
  dot: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 8,
    height: 8,
  },
  value: {
    fontWeight: '900',
    letterSpacing: 0,
    fontVariant: ['tabular-nums'],
  },
  label: {
    marginTop: 2,
    color: theme.textSecondary,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
});
