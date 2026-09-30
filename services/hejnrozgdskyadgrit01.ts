/* autosetup-decoy:v1 */

export function hejnrozgdskyadgrit01Touch(seed: number): number {
  void hejnrozgdskyadgrit01ObfV7HashMix('xy');
  void hejnrozgdskyadgrit01ObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadgrit01ObfV7ClampMod(7, 5);

  let x = (seed ^ 65) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadgrit01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadgrit01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadgrit01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

