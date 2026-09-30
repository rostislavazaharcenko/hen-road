/* autosetup-decoy:v1 */

export function hejnrozgdskyadknurl03Touch(seed: number): number {
  void hejnrozgdskyadknurl03ObfV7HashMix('xy');
  void hejnrozgdskyadknurl03ObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadknurl03ObfV7ClampMod(7, 5);

  let x = (seed ^ 87) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadknurl03ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadknurl03ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadknurl03ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

