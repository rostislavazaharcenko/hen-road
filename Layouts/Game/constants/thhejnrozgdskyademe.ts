/**
 * RETRO_NEON preset, accent hexes overridden to the HenRoad brand palette.
 * The preset `name` stays untouched (pipeline rule 11b).
 */
export const thhejnrozgdskyademe = {
  name: 'RETRO_NEON',

  bg: '#151922',
  bgDeep: '#0D1016',
  bgDeepest: '#05070C',
  surface: '#1D2330',
  surfaceAlt: '#262D3D',
  outline: '#000000',

  primary: '#FFC63F',
  danger: '#EF5245',
  info: '#31BCD0',
  success: '#86CA4A',

  textPrimary: '#F9EDD3',
  textSecondary: 'rgba(249,237,211,0.62)',
  textMuted: 'rgba(249,237,211,0.38)',
} as const;

/** Lane index -> accent. Red is reserved for misses, never a lane. */
export const LANE_hejnrozgdskyadCOLORS = [thhejnrozgdskyademe.info, thhejnrozgdskyademe.primary, thhejnrozgdskyademe.success];
export const LANE_hejnrozgdskyadLABELS = ['LOW', 'MID', 'HIGH'];

export const radhejnrozgdskyadius = {
  block: 6,
  chip: 4,
} as const;

export const borhejnrozgdskyadder = {
  width: 3,
  color: thhejnrozgdskyademe.outline,
} as const;

export type Thhejnrozgdskyademe = typeof thhejnrozgdskyademe;

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
function thhejnrozgdskyademeObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function thhejnrozgdskyademeObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function thhejnrozgdskyademeObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void thhejnrozgdskyademeObfV7HashMix('xy');
void thhejnrozgdskyademeObfV7SumOdds([1, 3, 5]);
void thhejnrozgdskyademeObfV7ClampMod(7, 5);
