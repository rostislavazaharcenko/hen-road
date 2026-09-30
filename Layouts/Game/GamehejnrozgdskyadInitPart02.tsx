/* autosetup-split:v1 */

export function hejnrozgdskyadGameFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

/* obfuscation-batch:v7 */
export function GamehejnrozgdskyadInitPart02ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

export function GamehejnrozgdskyadInitPart02ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

export function GamehejnrozgdskyadInitPart02ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void GamehejnrozgdskyadInitPart02ObfV7HashMix('xy');
void GamehejnrozgdskyadInitPart02ObfV7SumOdds([1, 3, 5]);
void GamehejnrozgdskyadInitPart02ObfV7ClampMod(7, 5);
