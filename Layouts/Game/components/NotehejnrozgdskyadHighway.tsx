import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {LANE_hejnrozgdskyadCOLORS} from '../constants/thhejnrozgdskyademe';
import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import type {JudgehejnrozgdskyadToastData, LivehejnrozgdskyadNote} from '../game/tyhejnrozgdskyadpes';
import {JudgehejnrozgdskyadToast} from './JudgehejnrozgdskyadToast';
import {NotehejnrozgdskyadBlock} from './NotehejnrozgdskyadBlock';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameClampSpan } from './NotehejnrozgdskyadHighwayPart01';
import { hejnrozgdskyadGameFoldRange } from './NotehejnrozgdskyadHighwayPart02';
// autosetup-split-end

interface Props {
  notes: LivehejnrozgdskyadNote[];
  toasts: JudgehejnrozgdskyadToastData[];
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
export function NotehejnrozgdskyadHighway({
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
  void NotehejnrozgdskyadHighwayObfV7HashMix('xy');
  void NotehejnrozgdskyadHighwayObfV7SumOdds([1, 3, 5]);
  void NotehejnrozgdskyadHighwayObfV7ClampMod(7, 5);

  return (
    <View style={[styles.board, {width: boardW}]}>
      <View
        style={styles.inner}
        onLayout={e => onLayoutHeight(Math.round(e.nativeEvent.layout.height))}>
        {LANE_hejnrozgdskyadCOLORS.map((c, i) => (
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
          ? LANE_hejnrozgdskyadCOLORS.map((c, i) => (
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
              <NotehejnrozgdskyadBlock
                key={n.id}
                note={n}
                color={LANE_hejnrozgdskyadCOLORS[n.lane]}
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
              <JudgehejnrozgdskyadToast
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
    borderColor: thhejnrozgdskyademe.outline,
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
    backgroundColor: thhejnrozgdskyademe.textPrimary,
  },
  hitCap: {
    width: 10,
    height: 10,
    backgroundColor: thhejnrozgdskyademe.outline,
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
    color: thhejnrozgdskyademe.danger,
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 4,
  },
  countdown: {
    color: thhejnrozgdskyademe.primary,
    fontSize: 72,
    fontWeight: '900',
    letterSpacing: 4,
  },
});

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function NotehejnrozgdskyadHighwayObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function NotehejnrozgdskyadHighwayObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function NotehejnrozgdskyadHighwayObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

