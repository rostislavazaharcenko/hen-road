import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

import {NOTE_TRAVEL_MS} from '../constants/config';
import {theme} from '../constants/theme';
import type {LiveNote} from '../game/types';

interface Props {
  note: LiveNote;
  color: string;
  laneW: number;
  noteW: number;
  noteH: number;
  hitY: number;
  laneH: number;
}

/**
 * One falling block. Each note owns a single finite linear timing animation on
 * transform only, and disappears when the engine drops it from the live list.
 */
function NoteBlockBase({note, color, laneW, noteW, noteH, hitY, laneH}: Props) {
  const speed = hitY / NOTE_TRAVEL_MS;
  const tailPx = note.kind === 'hold' ? Math.round(note.holdMs * speed) : 0;
  const blockH = noteH + tailPx;

  const shift = useRef(new Animated.Value(-blockH)).current;

  useEffect(() => {
    const distance = laneH + blockH;
    const duration = Math.max(200, Math.round(distance / speed));
    const anim = Animated.timing(shift, {
      toValue: laneH,
      duration,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [blockH, laneH, shift, speed]);

  const left = note.lane * laneW + Math.round((laneW - noteW) / 2);

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.block,
        {left, width: noteW, height: blockH, transform: [{translateY: shift}]},
      ]}>
      {tailPx > 0 ? (
        <View style={[styles.tail, {height: tailPx, backgroundColor: color}]}>
          <View style={styles.hatch} />
          <View style={styles.hatch} />
          <View style={styles.hatch} />
        </View>
      ) : null}
      <View style={[styles.head, {height: noteH, backgroundColor: color}]}>
        <View style={styles.headBar} />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  block: {
    position: 'absolute',
    top: 0,
  },
  tail: {
    width: '100%',
    opacity: 0.55,
    borderWidth: 3,
    borderColor: theme.outline,
    borderBottomWidth: 0,
    justifyContent: 'space-evenly',
  },
  hatch: {
    height: 3,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  head: {
    width: '100%',
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headBar: {
    width: '58%',
    height: 3,
    backgroundColor: theme.outline,
  },
});

export const NoteBlock = memo(NoteBlockBase);
