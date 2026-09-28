import {ChevronLeft} from 'lucide-react-native';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {theme} from '../constants/theme';

interface Props {
  title: string;
  onBack?: () => void;
  right?: React.ReactNode;
  tone?: 'dark' | 'darker';
  /** Overrides the default chevron (e.g. a pause glyph on the game screen). */
  LeftIcon?: React.ComponentType<any>;
  leftLabel?: string;
}

/**
 * The one header used by every non-menu screen. Keeping it shared is what
 * stops badge / back-button / padding drift between screens.
 */
export function ScreenHeader({
  title,
  onBack,
  right,
  tone = 'dark',
  LeftIcon = ChevronLeft,
  leftLabel = 'BACK',
}: Props) {
  return (
    <View
      style={[
        styles.header,
        {backgroundColor: tone === 'darker' ? 'rgba(0,0,0,0.40)' : 'rgba(0,0,0,0.35)'},
      ]}>
      <View style={styles.side}>
        {onBack ? (
          <Pressable
            onPress={onBack}
            style={styles.squareBtn}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            accessibilityRole="button"
            accessibilityLabel={leftLabel}>
            <LeftIcon size={24} color={theme.textPrimary} strokeWidth={3} />
          </Pressable>
        ) : null}
      </View>

      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      <View style={styles.sideRight}>{right}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 116,
    paddingTop: 44,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: theme.outline,
  },
  side: {
    width: 56,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  sideRight: {
    width: 56,
    height: 48,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  squareBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.surface,
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 4,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: theme.textPrimary,
    fontSize: 16,
    fontWeight: '900',
    letterSpacing: 3,
  },
});
