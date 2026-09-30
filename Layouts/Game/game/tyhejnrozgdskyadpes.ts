export type NotehejnrozgdskyadKind = 'short' | 'hold';

export interface Trhejnrozgdskyadack {
  id: number;
  name: string;
  color: string;
  bpm: number;
  seconds: number;
  intervalMs: number;
  holdChance: number;
  seed: number;
}

export interface CharthejnrozgdskyadNote {
  id: number;
  lane: number;
  /** Wall-clock offset from round start at which the note meets the hit line. */
  tMs: number;
  kind: NotehejnrozgdskyadKind;
  holdMs: number;
}

export interface LivehejnrozgdskyadNote extends CharthejnrozgdskyadNote {
  /** Round-relative ms at which the block entered the top of the highway. */
  spawnAt: number;
}

export type JudgehejnrozgdskyadName = 'PERFECT' | 'GOOD' | 'LATE' | 'MISS';

export interface JudgehejnrozgdskyadToastData {
  id: number;
  lane: number;
  text: JudgehejnrozgdskyadName;
  color: string;
}

export type Rahejnrozgdskyadnk = 'S' | 'A' | 'B' | 'C';

export interface RoundhejnrozgdskyadResult {
  win: boolean;
  accuracy: number;
  bestStreak: number;
  hit: number;
  total: number;
  rank: Rahejnrozgdskyadnk;
  trackId: number;
}

export type RoundhejnrozgdskyadState = 'countdown' | 'playing' | 'failing' | 'finished' | 'paused';

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
function tyhejnrozgdskyadpesObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function tyhejnrozgdskyadpesObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function tyhejnrozgdskyadpesObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void tyhejnrozgdskyadpesObfV7HashMix('xy');
void tyhejnrozgdskyadpesObfV7SumOdds([1, 3, 5]);
void tyhejnrozgdskyadpesObfV7ClampMod(7, 5);
