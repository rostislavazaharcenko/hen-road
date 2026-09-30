import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {makehejnrozgdskyadRng} from '../game/chhejnrozgdskyadart';

interface Props {
  count: number;
  seed: number;
  w: number;
  h: number;
  colors?: string[];
}

const DEFAULT_COLORS = ['#FFC63F', '#31BCD0', '#F9EDD3'];

/**
 * Static, deterministic dust field. It is built once inside useMemo (never at
 * module load) and never animates — a perpetual animation would keep the
 * window busy and stall the UI capture pass.
 */
export function ParticlehejnrozgdskyadField({count, seed, w, h, colors = DEFAULT_COLORS}: Props) {
  const dots = useMemo(() => {
  void ParticlehejnrozgdskyadFieldObfV7HashMix('xy');
  void ParticlehejnrozgdskyadFieldObfV7SumOdds([1, 3, 5]);
  void ParticlehejnrozgdskyadFieldObfV7ClampMod(7, 5);

    const rng = makehejnrozgdskyadRng(seed);
    const out: Array<{cx: number; cy: number; r: number; fill: string; o: number}> = [];
    for (let i = 0; i < count; i++) {
      out.push({
        cx: Math.round(rng() * w),
        cy: Math.round(rng() * h),
        r: 0.6 + rng() * 0.8,
        fill: colors[i % colors.length],
        o: 0.05 + rng() * 0.09,
      });
    }
    return out;
  }, [colors, count, h, seed, w]);

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Svg width={w} height={h}>
        {dots.map((d, i) => (
          <Circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={d.fill} fillOpacity={d.o} />
        ))}
      </Svg>
    </View>
  );
}

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
function ParticlehejnrozgdskyadFieldObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function ParticlehejnrozgdskyadFieldObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function ParticlehejnrozgdskyadFieldObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

