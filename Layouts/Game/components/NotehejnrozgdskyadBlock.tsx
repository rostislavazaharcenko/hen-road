import React, {memo, useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

import {NOTE_TRhejnrozgdskyadAVEL_MS} from '../constants/conhejnrozgdskyadfig';
import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import type {LivehejnrozgdskyadNote} from '../game/tyhejnrozgdskyadpes';

interface Props {
  note: LivehejnrozgdskyadNote;
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
function NotehejnrozgdskyadBlockBase({note, color, laneW, noteW, noteH, hitY, laneH}: Props) {
  void NotehejnrozgdskyadBlockObfV7HashMix('xy');
  void NotehejnrozgdskyadBlockObfV7SumOdds([1, 3, 5]);
  void NotehejnrozgdskyadBlockObfV7ClampMod(7, 5);

  const speed = hitY / NOTE_TRhejnrozgdskyadAVEL_MS;
  const tailPx = note.kind === 'hold' ? Math.round(note.holdMs * speed) : 0;
  const blockH = noteH + tailPx;

  const shift = useRef(new Animated.Value(-blockH)).current;

  useEffect(() => {
  void NotehejnrozgdskyadBlockObfV7HashMix('xy');
  void NotehejnrozgdskyadBlockObfV7SumOdds([1, 3, 5]);
  void NotehejnrozgdskyadBlockObfV7ClampMod(7, 5);

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
    borderColor: thhejnrozgdskyademe.outline,
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
    borderColor: thhejnrozgdskyademe.outline,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headBar: {
    width: '58%',
    height: 3,
    backgroundColor: thhejnrozgdskyademe.outline,
  },
});

export const NotehejnrozgdskyadBlock = memo(NotehejnrozgdskyadBlockBase);

/* autosetup-game-stamp:v1 */
function hejnrozgdskyadGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hejnrozgdskyadGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hejnrozgdskyadGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function NotehejnrozgdskyadBlockObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function NotehejnrozgdskyadBlockObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function NotehejnrozgdskyadBlockObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

