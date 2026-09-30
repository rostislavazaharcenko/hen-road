/* autosetup-split:v1 */

export function hejnrozgdskyadGatePipelinObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function hejnrozgdskyadClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

export function hejnrozgdskyadGatObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function hejnrozgdskyadGatePipelineObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hejnrozgdskyadGatePipelineObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function hejnrozgdskyadGatePipelinObfV2HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

export function hejnrozgdskyadGatePipelinObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function hejnrozgdskyadGatePipelinePart01ObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function hejnrozgdskyadGatePipelinePart01ObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function hejnrozgdskyadGatObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function hejnrozgdskyadGatObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function hejnrozgdskyadGatePipelineObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadGatePipelinePart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadGatePipelinePart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadGatePipelinePart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void hejnrozgdskyadGatePipelinePart02ObfV7HashMix('xy');
void hejnrozgdskyadGatePipelinePart02ObfV7SumOdds([1, 3, 5]);
void hejnrozgdskyadGatePipelinePart02ObfV7ClampMod(7, 5);
