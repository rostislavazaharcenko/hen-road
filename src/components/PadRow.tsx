import React, {useCallback, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {LANE_COLORS, LANE_LABELS, theme} from '../constants/theme';
import {usePressScale} from '../hooks/usePressScale';

interface PadProps {
  lane: number;
  enabled: boolean;
  onPadDown: (lane: number) => void;
  onPadUp: (lane: number) => void;
}

function Pad({lane, enabled, onPadDown, onPadUp}: PadProps) {
  const {scale, onPressIn, onPressOut} = usePressScale(0.96);
  const [down, setDown] = useState(false);
  const color = LANE_COLORS[lane];

  const handleIn = useCallback(() => {
    onPressIn();
    setDown(true);
    onPadDown(lane);
  }, [lane, onPadDown, onPressIn]);

  const handleOut = useCallback(() => {
    onPressOut();
    setDown(false);
    onPadUp(lane);
  }, [lane, onPadUp, onPressOut]);

  return (
    <View style={styles.slot}>
      <View pointerEvents="none" style={[styles.shadow, {backgroundColor: color}]} />
      <Pressable
        onPressIn={handleIn}
        onPressOut={handleOut}
        onPress={() => {}}
        disabled={!enabled}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        accessibilityRole="button"
        accessibilityLabel="TAP"
        style={styles.press}>
        <Animated.View
          style={[
            styles.pad,
            {backgroundColor: down ? color : theme.surface, transform: [{scale}]},
            enabled ? null : styles.dim,
          ]}>
          <View
            style={[
              styles.dot,
              {backgroundColor: down ? theme.outline : color, opacity: down ? 1 : 0.35},
            ]}
          />
          <Text style={[styles.label, {color: down ? theme.outline : color}]}>
            {LANE_LABELS[lane]}
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

interface Props {
  enabled: boolean;
  onPadDown: (lane: number) => void;
  onPadUp: (lane: number) => void;
}

/** The three tap pads. Each one is a real button for the a11y tree ("TAP"). */
export function PadRow({enabled, onPadDown, onPadUp}: Props) {
  return (
    <View style={styles.row}>
      {LANE_LABELS.map((_, i) => (
        <Pad key={i} lane={i} enabled={enabled} onPadDown={onPadDown} onPadUp={onPadUp} />
      ))}
    </View>
  );
}

const PAD_H = 108;
const OFFSET = 6;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 22,
    paddingTop: 10,
  },
  slot: {
    flex: 1,
    height: PAD_H + OFFSET,
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: OFFSET,
    height: PAD_H,
    borderRadius: 6,
  },
  press: {
    width: '100%',
    height: PAD_H,
  },
  pad: {
    width: '100%',
    height: PAD_H,
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  dim: {
    opacity: 0.6,
  },
  dot: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: theme.outline,
  },
  label: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },
});
