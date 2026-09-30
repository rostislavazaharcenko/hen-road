/**
 * Asset re-exports. The pipeline writes every PNG below (FLUX, or the
 * procedural gradient fallback) before the build, so each require() resolves.
 */
export const apphejnrozgdskyadIcon = require('../../../assets/icon_1024.png');
export const bghejnrozgdskyadLoader = require('../../../assets/bg_loader.png');
export const bghejnrozgdskyadMenu = require('../../../assets/bg_menu.png');
export const bghejnrozgdskyadGame = require('../../../assets/bg_game.png');
export const bghejnrozgdskyadResult = require('../../../assets/bg_result.png');
export const spritehejnrozgdskyadHeroHen = require('../../../assets/sprite_hero_hen.png');
export const spritehejnrozgdskyadNoteShort = require('../../../assets/sprite_note_short.png');
export const spritehejnrozgdskyadNoteHold = require('../../../assets/sprite_note_hold.png');
export const spritehejnrozgdskyadTrophy = require('../../../assets/sprite_trophy.png');
export const spritehejnrozgdskyadSpeaker = require('../../../assets/sprite_speaker.png');

/* obfuscation-batch:v7 */
function inhejnrozgdskyaddexObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function inhejnrozgdskyaddexObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function inhejnrozgdskyaddexObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

void inhejnrozgdskyaddexObfV7HashMix('xy');
void inhejnrozgdskyaddexObfV7SumOdds([1, 3, 5]);
void inhejnrozgdskyaddexObfV7ClampMod(7, 5);
