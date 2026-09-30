/* autosetup-split:v1 */

export function hejnrozgdskyadMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

export function hejnrozgdskyadconsthejnrozgdskyadntsVarObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadconstbchlipsoqiyroObfV4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

export function consthejnrozgdskyadntsVariableObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

export function hejnrozgdskyadconsthejnrozgdskyadntsVarObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

export function hejnrozgdskyadconsthejnrozgdskyadntsVarObfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

export function consthejnrozgdskyadntsVariableObfV5SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

export function hejnrozgdskyadconstbchlipsoqiyroObfV3SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

export function hejnrozgdskyadconstbchlipsoqiyroObfV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

export function hejnrozgdskyadconsthejnrozgdskyadntsVarObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

export function consthejnrozgdskyadntsVariableObfV6ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function consthejnrozgdskyadntsVariablePart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function consthejnrozgdskyadntsVariablePart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function consthejnrozgdskyadntsVariablePart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void consthejnrozgdskyadntsVariablePart01ObfV7HashMix('xy');
void consthejnrozgdskyadntsVariablePart01ObfV7SumOdds([1, 3, 5]);
void consthejnrozgdskyadntsVariablePart01ObfV7ClampMod(7, 5);
