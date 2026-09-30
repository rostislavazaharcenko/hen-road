/* autosetup-split:v1 */

export function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function hejnrozgdskyadwehejnrozgdskyadbViewServObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbViewServObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadwehejnrozgdskyadbViewServObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function hejnrozgdskyadwehejnrozgdskyadbObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadwehejnrozgdskyadbObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function wehejnrozgdskyadbViewServiceObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function wehejnrozgdskyadbViewServiceObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function wehejnrozgdskyadbViewServiceObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

/* obfuscation-batch:v7 */
function wehejnrozgdskyadbViewServicePart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function wehejnrozgdskyadbViewServicePart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function wehejnrozgdskyadbViewServicePart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void wehejnrozgdskyadbViewServicePart02ObfV7HashMix('xy');
void wehejnrozgdskyadbViewServicePart02ObfV7SumOdds([1, 3, 5]);
void wehejnrozgdskyadbViewServicePart02ObfV7ClampMod(7, 5);
