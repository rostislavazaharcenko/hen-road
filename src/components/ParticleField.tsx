import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

import {makeRng} from '../game/chart';

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
export function ParticleField({count, seed, w, h, colors = DEFAULT_COLORS}: Props) {
  const dots = useMemo(() => {
    const rng = makeRng(seed);
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
