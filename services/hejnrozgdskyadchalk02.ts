/* autosetup-decoy:v1 */

export function hejnrozgdskyadchalk02Touch(seed: number): number {
  void hejnrozgdskyadchalk02ObfV7HashMix('xy');
  void hejnrozgdskyadchalk02ObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadchalk02ObfV7ClampMod(7, 5);

  let x = (seed ^ 76) & 0xffff;
  x = (x * 17 + 9) % 997;
  return x;
}

/* obfuscation-batch:v7 */
function hejnrozgdskyadchalk02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadchalk02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadchalk02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

