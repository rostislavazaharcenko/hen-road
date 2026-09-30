/* autosetup-split:v1 */

export function swefgdetguhjhoioesMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function swefgdetguhjhoioesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbViewServObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbViewServObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbViewServObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadwehejnrozgdskyadbObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wehejnrozgdskyadbViewServiceObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function wehejnrozgdskyadbViewServiceObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function wehejnrozgdskyadbViewServiceObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function wehejnrozgdskyadbViewServicePart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function wehejnrozgdskyadbViewServicePart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function wehejnrozgdskyadbViewServicePart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void wehejnrozgdskyadbViewServicePart01ObfV7HashMix('xy');
void wehejnrozgdskyadbViewServicePart01ObfV7SumOdds([1, 3, 5]);
void wehejnrozgdskyadbViewServicePart01ObfV7ClampMod(7, 5);
