import {
  HIT_GOOD_MS,
  HIT_LATE_MS,
  HIT_PERFECT_MS,
  PERF_HIT,
  PERF_MISS,
  PERF_PERFECT,
  TARGET_ACCURACY,
  WEIGHT_GOOD,
  WEIGHT_LATE,
  WEIGHT_MISS,
  WEIGHT_PERFECT,
} from '../constants/config';
import {theme} from '../constants/theme';
import type {JudgeName, Rank} from './types';

/** Maps a timing error (ms) onto a judgement, or null when out of window. */
export function judgeTiming(deltaMs: number): JudgeName | null {
  const d = Math.abs(deltaMs);
  if (d <= HIT_PERFECT_MS) {
    return 'PERFECT';
  }
  if (d <= HIT_GOOD_MS) {
    return 'GOOD';
  }
  if (d <= HIT_LATE_MS) {
    return 'LATE';
  }
  return null;
}

export function judgeWeight(name: JudgeName): number {
  switch (name) {
    case 'PERFECT':
      return WEIGHT_PERFECT;
    case 'GOOD':
      return WEIGHT_GOOD;
    case 'LATE':
      return WEIGHT_LATE;
    default:
      return WEIGHT_MISS;
  }
}

export function judgePerf(name: JudgeName): number {
  switch (name) {
    case 'PERFECT':
      return PERF_PERFECT;
    case 'GOOD':
      return PERF_HIT;
    case 'LATE':
      return 1.2;
    default:
      return PERF_MISS;
  }
}

export function judgeColor(name: JudgeName): string {
  switch (name) {
    case 'PERFECT':
      return theme.primary;
    case 'GOOD':
      return theme.success;
    case 'LATE':
      return theme.info;
    default:
      return theme.danger;
  }
}

export function rankFor(accuracy: number): Rank {
  if (accuracy >= 95) {
    return 'S';
  }
  if (accuracy >= 88) {
    return 'A';
  }
  if (accuracy >= TARGET_ACCURACY) {
    return 'B';
  }
  return 'C';
}

export function rankColor(rank: Rank): string {
  switch (rank) {
    case 'S':
      return theme.primary;
    case 'A':
      return theme.success;
    case 'B':
      return theme.info;
    default:
      return theme.danger;
  }
}
