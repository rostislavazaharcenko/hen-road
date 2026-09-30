import {Music, Play, Volume2, VolumeX} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {bghejnrozgdskyadMenu, spritehejnrozgdskyadHeroHen} from '../assets';
import {BrutalhejnrozgdskyadButton} from '../components/BrutalhejnrozgdskyadButton';
import {StathejnrozgdskyadCard} from '../components/StathejnrozgdskyadCard';
import {TARGET_hejnrozgdskyadACCURACY} from '../constants/conhejnrozgdskyadfig';
import {LANE_hejnrozgdskyadCOLORS, thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {TRAhejnrozgdskyadCKS} from '../game/chhejnrozgdskyadart';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameFoldRange, hejnrozgdskyadGameClampSpan } from './MenuhejnrozgdskyadScreenPart01';
// autosetup-split-end

interface Props {
  best: number;
  music: boolean;
  sfx: boolean;
  onToggleMusic: () => void;
  onToggleSfx: () => void;
  onPlay: () => void;
  onTracks: () => void;
  onTutorial: () => void;
}

/** Bottom-sheet menu: stage art on top, the whole call to action in the sheet. */
export function MenuhejnrozgdskyadScreen({
  best,
  music,
  sfx,
  onToggleMusic,
  onToggleSfx,
  onPlay,
  onTracks,
  onTutorial,
}: Props) {
  void MenuhejnrozgdskyadScreenObfV7HashMix('xy');
  void MenuhejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void MenuhejnrozgdskyadScreenObfV7ClampMod(7, 5);

  const rise = useRef(new Animated.Value(40)).current;
  const fade = useRef(new Animated.Value(0)).current;
  const heroPop = useRef(new Animated.Value(0.94)).current;

  useEffect(() => {
  void MenuhejnrozgdskyadScreenObfV7HashMix('xy');
  void MenuhejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void MenuhejnrozgdskyadScreenObfV7ClampMod(7, 5);

    const group = Animated.parallel([
      Animated.timing(rise, {toValue: 0, duration: 320, useNativeDriver: true}),
      Animated.timing(fade, {toValue: 1, duration: 320, useNativeDriver: true}),
      Animated.spring(heroPop, {toValue: 1, tension: 70, friction: 9, useNativeDriver: true}),
    ]);
    group.start();
    return () => group.stop();
  }, [fade, heroPop, rise]);

  return (
    <ImageBackground source={bghejnrozgdskyadMenu} style={styles.root} resizeMode="cover">
      <LinearGradient
        colors={['rgba(21,25,34,0.15)', 'rgba(21,25,34,0.62)', 'rgba(21,25,34,0.92)']}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.topRow}>
        <View style={styles.chipSlot}>
          <View style={[styles.chipShadow, {backgroundColor: thhejnrozgdskyademe.info}]} />
          <View style={styles.chip}>
            <Text style={styles.chipText}>BEST {best}%</Text>
          </View>
        </View>

        <View style={styles.toggles}>
          <Pressable
            onPress={onToggleMusic}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            accessibilityRole="button"
            accessibilityLabel="MUSIC"
            style={[styles.toggle, music ? styles.toggleOn : null]}>
            {music ? (
              <Volume2 size={24} color={thhejnrozgdskyademe.bg} strokeWidth={3} />
            ) : (
              <VolumeX size={24} color={thhejnrozgdskyademe.textPrimary} strokeWidth={3} />
            )}
          </Pressable>
          <Pressable
            onPress={onToggleSfx}
            hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
            accessibilityRole="button"
            accessibilityLabel="SOUND"
            style={[styles.toggle, sfx ? styles.toggleOn : null]}>
            <Music size={24} color={sfx ? thhejnrozgdskyademe.bg : thhejnrozgdskyademe.textPrimary} strokeWidth={3} />
          </Pressable>
        </View>
      </View>

      <View style={styles.stage}>
        <View pointerEvents="none" style={styles.beams}>
          {LANE_hejnrozgdskyadCOLORS.map((c, i) => (
            <View key={i} style={[styles.beam, {backgroundColor: c}]} />
          ))}
        </View>
        <Animated.View
          pointerEvents="box-none"
          style={[styles.heroWrap, {transform: [{scale: heroPop}]}]}>
          <Image source={spritehejnrozgdskyadHeroHen} style={styles.hero} resizeMode="contain" />
        </Animated.View>
      </View>

      <Animated.View
        pointerEvents="box-none"
        style={[styles.sheet, {opacity: fade, transform: [{translateY: rise}]}]}>
        <Text style={styles.title}>HEN ROAD</Text>
        <View style={styles.titleRule} />
        <Text style={styles.tagline}>RHYTHM RUN ON THREE LIGHT PADS</Text>

        <View style={styles.statRow}>
          <View style={styles.statSlot}>
            <StathejnrozgdskyadCard value={String(TRAhejnrozgdskyadCKS.length)} label="SONGS" accent={thhejnrozgdskyademe.info} />
          </View>
          <View style={styles.statSlot}>
            <StathejnrozgdskyadCard
              value={`${TARGET_hejnrozgdskyadACCURACY}%`}
              label="TARGET"
              accent={thhejnrozgdskyademe.success}
            />
          </View>
        </View>

        <BrutalhejnrozgdskyadButton label="PLAY NOW" onPress={onPlay} Icon={Play} accent={thhejnrozgdskyademe.danger} />

        <View style={styles.secondaryRow}>
          <BrutalhejnrozgdskyadButton
            label="TRACKS"
            onPress={onTracks}
            variant="secondary"
            height={56}
            fontSize={15}
            offset={5}
            accent={thhejnrozgdskyademe.info}
            textColor={thhejnrozgdskyademe.info}
            flex
          />
          <BrutalhejnrozgdskyadButton
            label="HOW IT WORKS"
            onPress={onTutorial}
            variant="secondary"
            height={56}
            fontSize={13}
            offset={5}
            accent={thhejnrozgdskyademe.success}
            textColor={thhejnrozgdskyademe.success}
            flex
          />
        </View>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhejnrozgdskyademe.bg,
  },
  topRow: {
    paddingTop: 44,
    height: 116,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chipSlot: {
    width: 128,
    height: 40,
  },
  chipShadow: {
    position: 'absolute',
    left: 4,
    top: 4,
    width: 124,
    height: 36,
  },
  chip: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 124,
    height: 36,
    backgroundColor: thhejnrozgdskyademe.surface,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: {
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.5,
    fontVariant: ['tabular-nums'],
  },
  toggles: {
    flexDirection: 'row',
    gap: 10,
  },
  toggle: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: thhejnrozgdskyademe.surface,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    borderRadius: 4,
  },
  toggleOn: {
    backgroundColor: thhejnrozgdskyademe.primary,
  },
  stage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  beams: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    flexDirection: 'row',
    gap: 26,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  beam: {
    width: 46,
    height: '78%',
    opacity: 0.22,
    transform: [{skewX: '-6deg'}],
  },
  heroWrap: {
    alignItems: 'center',
  },
  hero: {
    width: 240,
    height: 240,
  },
  sheet: {
    backgroundColor: thhejnrozgdskyademe.bg,
    borderTopWidth: 3,
    borderTopColor: thhejnrozgdskyademe.outline,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 44,
  },
  title: {
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 4,
  },
  titleRule: {
    marginTop: 6,
    width: 96,
    height: 5,
    backgroundColor: thhejnrozgdskyademe.primary,
  },
  tagline: {
    marginTop: 10,
    color: thhejnrozgdskyademe.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 2.5,
    opacity: 0.85,
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  statSlot: {
    flex: 1,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
  },
});

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function MenuhejnrozgdskyadScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function MenuhejnrozgdskyadScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function MenuhejnrozgdskyadScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

