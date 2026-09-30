import {FIRST_hejnrozgdskyadNOTE_MS} from '../constants/conhejnrozgdskyadfig';
import type {CharthejnrozgdskyadNote, Trhejnrozgdskyadack} from './tyhejnrozgdskyadpes';

/** Deterministic xorshift32 — the same track always plays the same chart. */
export function makehejnrozgdskyadRng(seed: number): () => number {
  void chhejnrozgdskyadartObfV7HashMix('xy');
  void chhejnrozgdskyadartObfV7SumOdds([1, 3, 5]);
  void chhejnrozgdskyadartObfV7ClampMod(7, 5);

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
export function buildhejnrozgdskyadChart(track: Trhejnrozgdskyadack): CharthejnrozgdskyadNote[] {
  void chhejnrozgdskyadartObfV7HashMix('xy');
  void chhejnrozgdskyadartObfV7SumOdds([1, 3, 5]);
  void chhejnrozgdskyadartObfV7ClampMod(7, 5);

  const rng = makehejnrozgdskyadRng(track.seed);
  const notes: CharthejnrozgdskyadNote[] = [];
  const endMs = track.seconds * 1000 - 2000;
  let t = FIRST_hejnrozgdskyadNOTE_MS;
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

export const TRAhejnrozgdskyadCKS: Trhejnrozgdskyadack[] = [
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
function chhejnrozgdskyadartObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function chhejnrozgdskyadartObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function chhejnrozgdskyadartObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

