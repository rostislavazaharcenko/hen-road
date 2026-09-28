import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {bgLoader, spriteHeroHen} from '../assets';
import {ParticleField} from '../components/ParticleField';
import {LOADER_DURATION_MS} from '../constants/config';
import {theme} from '../constants/theme';

const {width: SCREEN_W, height: SCREEN_H} = Dimensions.get('window');

const BAR_MAX = 240;
const EQ_COLORS = ['#31BCD0', '#86CA4A', '#FFC63F', '#EF5245', '#31BCD0'];
const EQ_HEIGHTS = [24, 48, 78, 40, 30];

interface Props {
  onDone: () => void;
}

/**
 * Brand card. Deliberately much darker than the menu, non-interactive, and it
 * hands over on a wall-clock timer (never on an animation callback).
 */
export function LoaderScreen({onDone}: Props) {
  const pop = useRef(new Animated.Value(0.82)).current;
  const progress = useRef(new Animated.Value(0)).current;
  const bars = useRef(EQ_COLORS.map(() => new Animated.Value(0.35))).current;

  useEffect(() => {
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

    const bar = Animated.timing(progress, {
      toValue: 1,
      duration: LOADER_DURATION_MS - 400,
      useNativeDriver: false,
    });
    bar.start();

    const t = setTimeout(onDone, LOADER_DURATION_MS);
    return () => {
      clearTimeout(t);
      group.stop();
      bar.stop();
    };
  }, [bars, onDone, pop, progress]);

  const fillPct = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['4%', '100%'],
  });

  return (
    <ImageBackground source={bgLoader} style={styles.root} resizeMode="cover">
      <LinearGradient
        colors={['rgba(5,7,12,0.94)', 'rgba(13,16,22,0.90)', 'rgba(21,25,34,0.93)']}
        style={StyleSheet.absoluteFill}
      />
      <ParticleField count={1400} seed={0x5eed} w={SCREEN_W} h={SCREEN_H} />

      <View style={styles.center}>
        <View style={styles.brandWrap}>
          <View pointerEvents="none" style={styles.brandShadow} />
          <Animated.View style={[styles.brandCard, {transform: [{scale: pop}]}]}>
            <Image source={spriteHeroHen} style={styles.hero} resizeMode="contain" />
          </Animated.View>
        </View>

        <View style={styles.eqRow}>
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

        <Text style={styles.brand}>HEN ROAD</Text>
        <View style={styles.brandRule} />
        <Text style={styles.tagline}>THREE PADS. ONE BEAT.</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.barTrack}>
          <Animated.View style={[styles.barFill, {width: fillPct}]} />
        </View>
        <Text style={styles.loading}>LOADING...</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.bgDeepest,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
  },
  brandWrap: {
    width: 226,
    height: 226,
  },
  brandShadow: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 220,
    height: 220,
    backgroundColor: theme.primary,
  },
  brandCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 220,
    height: 220,
    backgroundColor: theme.bg,
    borderWidth: 3,
    borderColor: theme.outline,
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
    borderColor: theme.outline,
  },
  brand: {
    marginTop: 22,
    color: theme.textPrimary,
    fontSize: 46,
    fontWeight: '900',
    letterSpacing: 5,
  },
  brandRule: {
    marginTop: 6,
    width: 210,
    height: 4,
    backgroundColor: theme.outline,
  },
  tagline: {
    marginTop: 12,
    color: theme.primary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
    opacity: 0.9,
  },
  footer: {
    position: 'absolute',
    bottom: 76,
    alignItems: 'center',
  },
  barTrack: {
    width: BAR_MAX,
    height: 10,
    backgroundColor: theme.bgDeep,
    borderWidth: 3,
    borderColor: theme.outline,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: theme.primary,
  },
  loading: {
    marginTop: 12,
    color: theme.textPrimary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 3,
    opacity: 0.55,
  },
});
