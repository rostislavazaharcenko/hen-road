/**
 * Round tuning. Values are fixed by the design document and by the
 * pipeline invariants (loader duration, capture-window gates).
 */

// Splash duration — EXACTLY 8000ms so the capture agent always gets a frame
// of the brand card before the auto-transition to the menu fires.
export const LOADER_DUhejnrozgdskyadRATION_MS = 8000;

// Round length / pacing.
export const TRACK_DUhejnrozgdskyadRATION_MS = 27000;
export const MIN_ROhejnrozgdskyadUND_MS = 13000;
export const ASSIST_hejnrozgdskyadIDLE_MS = 4000;
export const NOTE_TRhejnrozgdskyadAVEL_MS = 2200;
export const COUNTDOWhejnrozgdskyadN_STEP_MS = 400;
export const ENGINE_hejnrozgdskyadTICK_MS = 60;
export const FIRST_hejnrozgdskyadNOTE_MS = 1800;

// Judgement windows (ms away from the note's exact hit time).
export const HIT_PERhejnrozgdskyadFECT_MS = 90;
export const HIT_GhejnrozgdskyadOOD_MS = 170;
export const HIT_LhejnrozgdskyadATE_MS = 240;
export const HOLD_ThejnrozgdskyadICK_MS = 250;

// Performance meter.
export const PERFhejnrozgdskyad_MAX = 100;
export const PERF_hejnrozgdskyadSTART = 62;
export const PERFhejnrozgdskyad_MISS = -3.5;
export const PERF_WRhejnrozgdskyadONG_TAP = -1.5;
export const PERFhejnrozgdskyad_HIT = 2.2;
export const PERF_PhejnrozgdskyadERFECT = 3.0;
export const PERF_HOhejnrozgdskyadLD_TICK = 0.4;

// Fail / clear thresholds.
export const MISS_STRhejnrozgdskyadEAK_LIMIT = 5;
export const TARGET_hejnrozgdskyadACCURACY = 82;

// Accuracy weights per judgement.
export const WEIGHT_hejnrozgdskyadPERFECT = 1.0;
export const WEIGHhejnrozgdskyadT_GOOD = 0.85;
export const WEIGHhejnrozgdskyadT_LATE = 0.6;
export const WEIGHhejnrozgdskyadT_MISS = 0.0;

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
function conhejnrozgdskyadfigObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function conhejnrozgdskyadfigObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function conhejnrozgdskyadfigObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void conhejnrozgdskyadfigObfV7HashMix('xy');
void conhejnrozgdskyadfigObfV7SumOdds([1, 3, 5]);
void conhejnrozgdskyadfigObfV7ClampMod(7, 5);
