/* autosetup-split:v1 */

export function hejnrozgdskyadGatePipelineObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function hejnrozgdskyadGatObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

export function hejnrozgdskyadGatePipelinObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadGatePipelinePart01ObfV5HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

export function hejnrozgdskyadGatePipelinePart01ObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hejnrozgdskyadMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function hejnrozgdskyadGatObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadGatePipelinObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function hejnrozgdskyadGatePipelineObfV6SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

export function hejnrozgdskyadGatePipelineObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadGatePipelinObfV1ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadGatObfV3HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

export function hejnrozgdskyadGatePipelinePart01ObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadGatePipelinePart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadGatePipelinePart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadGatePipelinePart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void hejnrozgdskyadGatePipelinePart01ObfV7HashMix('xy');
void hejnrozgdskyadGatePipelinePart01ObfV7SumOdds([1, 3, 5]);
void hejnrozgdskyadGatePipelinePart01ObfV7ClampMod(7, 5);
