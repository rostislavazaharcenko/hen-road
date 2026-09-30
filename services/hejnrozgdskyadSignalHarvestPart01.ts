/* autosetup-split:v1 */

export function hejnrozgdskyadSignalHarvestObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function hejnrozgdskyadSignalHarvestObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function hejnrozgdskyadSignalHarveObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function hejnrozgdskyadSignalHarveObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadSignalHarveObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function hejnrozgdskyadSigObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function hejnrozgdskyadSigObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function hejnrozgdskyadSigObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadSignalHarvestObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hejnrozgdskyadSignalHarvestObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadSignalHarvestPart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function hejnrozgdskyadSignalHarvestPart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function hejnrozgdskyadSignalHarvestPart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void hejnrozgdskyadSignalHarvestPart01ObfV7HashMix('xy');
void hejnrozgdskyadSignalHarvestPart01ObfV7SumOdds([1, 3, 5]);
void hejnrozgdskyadSignalHarvestPart01ObfV7ClampMod(7, 5);
