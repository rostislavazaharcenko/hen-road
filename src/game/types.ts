export type NoteKind = 'short' | 'hold';

export interface Track {
  id: number;
  name: string;
  color: string;
  bpm: number;
  seconds: number;
  intervalMs: number;
  holdChance: number;
  seed: number;
}

export interface ChartNote {
  id: number;
  lane: number;
  /** Wall-clock offset from round start at which the note meets the hit line. */
  tMs: number;
  kind: NoteKind;
  holdMs: number;
}

export interface LiveNote extends ChartNote {
  /** Round-relative ms at which the block entered the top of the highway. */
  spawnAt: number;
}

export type JudgeName = 'PERFECT' | 'GOOD' | 'LATE' | 'MISS';

export interface JudgeToastData {
  id: number;
  lane: number;
  text: JudgeName;
  color: string;
}

export type Rank = 'S' | 'A' | 'B' | 'C';

export interface RoundResult {
  win: boolean;
  accuracy: number;
  bestStreak: number;
  hit: number;
  total: number;
  rank: Rank;
  trackId: number;
}

export type RoundState = 'countdown' | 'playing' | 'failing' | 'finished' | 'paused';
