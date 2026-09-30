import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {bghejnrozgdskyadLoader, spritehejnrozgdskyadHeroHen} from '../assets';
import {ParticlehejnrozgdskyadField} from '../components/ParticlehejnrozgdskyadField';
import {LOADER_DUhejnrozgdskyadRATION_MS} from '../constants/conhejnrozgdskyadfig';
import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {LoaderhejnrozgdskyadHenCrest, LoaderHenhejnrozgdskyadShardField} from './LoaderhejnrozgdskyadSparkHen';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');

const BAR_MAX = 240;
const EQ_COLORS = ['#31BCD0', '#86CA4A', '#FFC63F', '#EF5245', '#31BCD0'];
const EQ_HEIGHTS = [24, 48, 78, 40, 30];
const LOAD_LABELS = ['LOADING...', 'BEATING...', 'CHARGING...'];

interface Props {
  onDone?: () => void;
  onDhejnrozgdskyadone?: () => void;
  doneOnFihejnrozgdskyadrstCycle?: boolean;
}

/**
 * Brand card splash. Progress bar loops until the host unmounts; wall-clock
 * onDone still arms the menu. Hero hold-charge + background shard rain are
 * idle play only — loading never waits on them.
 */
export function LoaderhejnrozgdskyadScreen({onDone, onDhejnrozgdskyadone, doneOnFihejnrozgdskyadrstCycle}: Props) {
  void LoaderhejnrozgdskyadScreenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadScreenObfV7ClampMod(7, 5);

  const doneCb = onDhejnrozgdskyadone ?? onDone;
  void doneOnFihejnrozgdskyadrstCycle;

  const pop = useRef(new Animated.Value(0.82)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const bars = useRef(EQ_COLORS.map(() => new Animated.Value(0.35))).current;
  const [loadLabel, setLoadLabel] = useState(LOAD_LABELS[0]);
  const labelIdx = useRef(0);

  useEffect(() => {
  void LoaderhejnrozgdskyadScreenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadScreenObfV7ClampMod(7, 5);

    const anims = [
      Animated.spring(pop, {toValue: 1, tension: 90, friction: 8, useNativeDriver: true}),
      ...bars.map((b, i) =>
        Animated.timing(b, {
          toValue: 1,
          duration: 520,
          delay: i * 90,
          useNativeDriver: true,
        }),
      ),
    ];
    const group = Animated.parallel(anims);
    group.start();

    let stopped = false;
    const fillOnce = () => {
  void LoaderhejnrozgdskyadScreenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadScreenObfV7ClampMod(7, 5);

      if (stopped) return;
      progress.setValue(0);
      const ms = 1300 + Math.floor(Math.random() * 900);
      Animated.timing(progress, {
        toValue: 1,
        duration: ms,
        useNativeDriver: false,
      }).start(({finished}) => {
        if (!finished || stopped) return;
        labelIdx.current = (labelIdx.current + 1) % LOAD_LABELS.length;
        setLoadLabel(LOAD_LABELS[labelIdx.current]);
        fillOnce();
      });
    };
    fillOnce();

    const t = setTimeout(() => doneCb?.(), LOADER_DUhejnrozgdskyadRATION_MS);
    return () => {
      stopped = true;
      clearTimeout(t);
      group.stop();
      progress.stopAnimation();
    };
  }, [bars, doneCb, pop, progress]);

  const fillPct = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['4%', '100%'],
  });

  return (
    <ImageBackground source={bghejnrozgdskyadLoader} style={styles.root} resizeMode="cover">
      <LinearGradient
        colors={['rgba(5,7,12,0.94)', 'rgba(13,16,22,0.90)', 'rgba(21,25,34,0.93)']}
        style={StyleSheet.absoluteFill}
      />
      <ParticlehejnrozgdskyadField count={1400} seed={0x5eed} w={SCREEN_W} h={SCREEN_H} />

      {/* Shard rain above dust; box-none so crest still receives holds */}
      <LoaderHenhejnrozgdskyadShardField ignoreBottom={140} />

      <View style={styles.center} pointerEvents="box-none">
        <View style={styles.brandWrap} pointerEvents="box-none">
          <View pointerEvents="none" style={styles.brandShadow} />
          <Animated.View style={{transform: [{scale: pop}]}}>
            <LoaderhejnrozgdskyadHenCrest style={styles.crestHit}>
              <View style={styles.brandCard}>
                <Image source={spritehejnrozgdskyadHeroHen} style={styles.hero} resizeMode="contain" />
              </View>
            </LoaderhejnrozgdskyadHenCrest>
          </Animated.View>
        </View>

        <View style={styles.eqRow} pointerEvents="none">
          {EQ_COLORS.map((c, i) => (
            <Animated.View
              key={i}
              style={[
                styles.eqBar,
                {
                  height: EQ_HEIGHTS[i],
                  backgroundColor: c,
                  transform: [{scaleY: bars[i]}],
                },
              ]}
            />
          ))}
        </View>

        <Text style={styles.brand} pointerEvents="none">
          HEN ROAD
        </Text>
        <View style={styles.brandRule} pointerEvents="none" />
        <Text style={styles.tagline} pointerEvents="none">
          THREE PADS. ONE BEAT.
        </Text>
      </View>

      <View style={styles.footer} pointerEvents="none">
        <View style={styles.barTrack}>
          <View style={styles.notchStart} />
          <View style={styles.notchEnd} />
          <Animated.View style={[styles.barFill, {width: fillPct}]} />
        </View>
        <Text style={styles.loading}>{loadLabel}</Text>
        <Text style={styles.hint}>HOLD THE HEN</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhejnrozgdskyademe.bgDeepest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    zIndex: 3,
    elevation: 3,
  },
  brandWrap: {
    width: 226,
    height: 226,
    zIndex: 4,
    elevation: 4,
  },
  crestHit: {
    width: 226,
    height: 226,
  },
  brandShadow: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 220,
    height: 220,
    backgroundColor: thhejnrozgdskyademe.primary,
  },
  brandCard: {
    width: 220,
    height: 220,
    backgroundColor: thhejnrozgdskyademe.bg,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hero: {
    width: 150,
    height: 150,
  },
  eqRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    height: 84,
    marginTop: 26,
  },
  eqBar: {
    width: 14,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
  },
  brand: {
    marginTop: 22,
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: 5,
  },
  brandRule: {
    marginTop: 6,
    width: 210,
    height: 4,
    backgroundColor: thhejnrozgdskyademe.outline,
  },
  tagline: {
    marginTop: 12,
    color: thhejnrozgdskyademe.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    opacity: 0.9,
  },
  footer: {
    position: 'absolute',
    bottom: 76,
    alignItems: 'center',
    zIndex: 5,
  },
  barTrack: {
    width: BAR_MAX,
    height: 10,
    backgroundColor: thhejnrozgdskyademe.bgDeep,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    overflow: 'hidden',
  },
  notchStart: {
    position: 'absolute',
    left: -1,
    top: -5,
    width: 3,
    height: 14,
    backgroundColor: thhejnrozgdskyademe.primary,
    zIndex: 2,
  },
  notchEnd: {
    position: 'absolute',
    right: -1,
    top: -5,
    width: 3,
    height: 14,
    backgroundColor: thhejnrozgdskyademe.info,
    zIndex: 2,
  },
  barFill: {
    height: '100%',
    backgroundColor: thhejnrozgdskyademe.primary,
  },
  loading: {
    marginTop: 12,
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    opacity: 0.55,
  },
  hint: {
    marginTop: 8,
    color: thhejnrozgdskyademe.info,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
    opacity: 0.7,
  },
});

/* autosetup-game-stamp:v1 */
function hejnrozgdskyadGameMixSeed(x: number, y: number): number {
  return ((x % (y || 1)) + y) % (y || 1);
}
function hejnrozgdskyadGameFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}
function hejnrozgdskyadGameClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

export default LoaderhejnrozgdskyadScreen;

/* obfuscation-batch:v7 */
function LoaderhejnrozgdskyadScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function LoaderhejnrozgdskyadScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function LoaderhejnrozgdskyadScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

