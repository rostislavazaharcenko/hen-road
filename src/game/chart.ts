import {FIRST_NOTE_MS} from '../constants/config';
import type {ChartNote, Track} from './types';

/** Deterministic xorshift32 — the same track always plays the same chart. */
export function makeRng(seed: number): () => number {
  let s = seed >>> 0 || 0x5eed;
  return () => {
    s ^= s << 13;
    s >>>= 0;
    s ^= s >>> 17;
    s ^= s << 5;
    s >>>= 0;
    return s / 0xffffffff;
  };
}

/**
 * Builds the note schedule for a track. Pure + deterministic, cheap enough to
 * run inside a component (a 30s track is ~35 notes).
 */
export function buildChart(track: Track): ChartNote[] {
  const rng = makeRng(track.seed);
  const notes: ChartNote[] = [];
  const endMs = track.seconds * 1000 - 2000;
  let t = FIRST_NOTE_MS;
  let id = 1;
  let lastLane = -1;

  while (t < endMs) {
    let lane = Math.floor(rng() * 3) % 3;
    if (lane === lastLane && rng() > 0.45) {
      lane = (lane + 1) % 3;
    }
    lastLane = lane;

    const isHold = rng() < track.holdChance;
    const holdMs = isHold ? 600 + Math.floor(rng() * 500) : 0;

    notes.push({
      id: id++,
      lane,
      tMs: Math.round(t),
      kind: isHold ? 'hold' : 'short',
      holdMs,
    });

    const jitter = (rng() - 0.5) * 120;
    t += track.intervalMs + jitter + (isHold ? holdMs * 0.5 : 0);
  }

  return notes;
}

export const TRACKS: Track[] = [
  {
    id: 0,
    name: 'COOP GROOVE',
    color: '#31BCD0',
    bpm: 88,
    seconds: 26,
    intervalMs: 820,
    holdChance: 0.18,
    seed: 0x5eed01,
  },
  {
    id: 1,
    name: 'FEATHER FUNK',
    color: '#86CA4A',
    bpm: 104,
    seconds: 26,
    intervalMs: 700,
    holdChance: 0.24,
    seed: 0x5eed02,
  },
  {
    id: 2,
    name: 'ROOSTER RUSH',
    color: '#EF5245',
    bpm: 126,
    seconds: 26,
    intervalMs: 580,
    holdChance: 0.3,
    seed: 0x5eed03,
  },
];
