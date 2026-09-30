/* autosetup-split:v1 */

export function hejnrozgdskyadGameMixSeed(x: number, y: number): number {
return ((x % (y || 1)) + y) % (y || 1);
}

export function hejnrozgdskyadGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

export function hejnrozgdskyadGameClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

/* obfuscation-batch:v7 */
function JudgehejnrozgdskyadToastPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function JudgehejnrozgdskyadToastPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function JudgehejnrozgdskyadToastPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void JudgehejnrozgdskyadToastPart01ObfV7HashMix('xy');
void JudgehejnrozgdskyadToastPart01ObfV7SumOdds([1, 3, 5]);
void JudgehejnrozgdskyadToastPart01ObfV7ClampMod(7, 5);
