import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {LANE_COLORS} from '../constants/theme';
import {theme} from '../constants/theme';
import type {JudgeToastData, LiveNote} from '../game/types';
import {JudgeToast} from './JudgeToast';
import {NoteBlock} from './NoteBlock';

interface Props {
  notes: LiveNote[];
  toasts: JudgeToastData[];
  boardW: number;
  laneW: number;
  noteW: number;
  noteH: number;
  onLayoutHeight: (h: number) => void;
  laneH: number;
  hitY: number;
  failing: boolean;
  countdown: number;
  showCountdown: boolean;
}

/**
 * The three-lane note highway: lane tint, hit line, pad glow, falling blocks
 * and the judgement pops. Pure presentation — scoring lives in the engine.
 */
export function NoteHighway({
  notes,
  toasts,
  boardW,
  laneW,
  noteW,
  noteH,
  onLayoutHeight,
  laneH,
  hitY,
  failing,
  countdown,
  showCountdown,
}: Props) {
  return (
    <View style={[styles.board, {width: boardW}]}>
      <View
        style={styles.inner}
        onLayout={e => onLayoutHeight(Math.round(e.nativeEvent.layout.height))}>
        {LANE_COLORS.map((c, i) => (
          <View key={`lane-${i}`} style={[styles.lane, {left: i * laneW, width: laneW}]}>
            <LinearGradient
              colors={[`${c}2B`, 'rgba(13,16,22,0)']}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              style={StyleSheet.absoluteFill}
            />
            {i > 0 ? <View style={styles.divider} /> : null}
          </View>
        ))}

        {laneH > 0 ? (
          <View pointerEvents="none" style={[styles.hitRow, {top: hitY}]}>
            <View style={styles.hitCap} />
            <View style={styles.hitLine} />
            <View style={styles.hitCap} />
          </View>
        ) : null}

        {laneH > 0
          ? LANE_COLORS.map((c, i) => (
              <View
                key={`glow-${i}`}
                pointerEvents="none"
                style={[
                  styles.padGlow,
                  {left: i * laneW + 10, width: laneW - 20, top: hitY + 8, backgroundColor: c},
                ]}
              />
            ))
          : null}

        {laneH > 0
          ? notes.map(n => (
              <NoteBlock
                key={n.id}
                note={n}
                color={LANE_COLORS[n.lane]}
                laneW={laneW}
                noteW={noteW}
                noteH={noteH}
                hitY={hitY}
                laneH={laneH}
              />
            ))
          : null}

        {laneH > 0
          ? toasts.map(t => (
              <JudgeToast
                key={t.id}
                text={t.text}
                color={t.color}
                lane={t.lane}
                laneW={laneW}
                y={hitY - 44}
              />
            ))
          : null}

        {failing ? (
          <View pointerEvents="none" style={styles.overlayCenter}>
            <Text style={styles.offBeat}>OFF BEAT</Text>
          </View>
        ) : null}

        {showCountdown ? (
          <View pointerEvents="none" style={styles.overlayCenter}>
            <Text style={styles.countdown}>{countdown > 0 ? String(countdown) : 'GO'}</Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 6,
    backgroundColor: 'rgba(13,16,22,0.85)',
    padding: 6,
  },
  inner: {
    flex: 1,
    overflow: 'hidden',
  },
  lane: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  divider: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 2,
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  hitRow: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hitLine: {
    flex: 1,
    height: 5,
    backgroundColor: theme.textPrimary,
  },
  hitCap: {
    width: 10,
    height: 10,
    backgroundColor: theme.outline,
  },
  padGlow: {
    position: 'absolute',
    height: 26,
    opacity: 0.18,
    borderRadius: 4,
  },
  overlayCenter: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  offBeat: {
    color: theme.danger,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 4,
  },
  countdown: {
    color: theme.primary,
    fontSize: 72,
    fontWeight: '900',
    letterSpacing: 4,
  },
});
