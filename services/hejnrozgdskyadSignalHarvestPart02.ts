/* autosetup-split:v1 */

export function hejnrozgdskyadSignalHarvestObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function hejnrozgdskyadMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function hejnrozgdskyadClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function hejnrozgdskyadSignalHarveObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function hejnrozgdskyadSignalHarveObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function hejnrozgdskyadSignalHarveObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadSigObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function hejnrozgdskyadSigObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function hejnrozgdskyadSigObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadSignalHarvestObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function hejnrozgdskyadSignalHarvestPart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hejnrozgdskyadSignalHarvestPart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadSignalHarvestPart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadSignalHarvestPart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadSignalHarvestPart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadSignalHarvestPart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void hejnrozgdskyadSignalHarvestPart02ObfV7HashMix('xy');
void hejnrozgdskyadSignalHarvestPart02ObfV7SumOdds([1, 3, 5]);
void hejnrozgdskyadSignalHarvestPart02ObfV7ClampMod(7, 5);
