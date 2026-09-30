import {ListMusic, RotateCcw} from 'lucide-react-native';
import React, {useEffect, useRef} from 'react';
import {Animated, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {bghejnrozgdskyadResult} from '../assets';
import {BrutalhejnrozgdskyadButton} from '../components/BrutalhejnrozgdskyadButton';
import {StathejnrozgdskyadCard} from '../components/StathejnrozgdskyadCard';
import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {rankhejnrozgdskyadColor} from '../game/juhejnrozgdskyaddge';
import type {RoundhejnrozgdskyadResult} from '../game/tyhejnrozgdskyadpes';

interface Props {
  result: RoundhejnrozgdskyadResult;
  trackName: string;
  onPlayAgain: () => void;
  onNextTrack: () => void;
  onMenu: () => void;
}

const CONFETTI: Array<{top: number; left: `${number}%`; rot: string}> = [
  {top: 132, left: '9%', rot: '18deg'},
  {top: 176, left: '83%', rot: '-24deg'},
  {top: 244, left: '17%', rot: '36deg'},
  {top: 208, left: '72%', rot: '8deg'},
  {top: 290, left: '88%', rot: '-12deg'},
];

/** Round summary: rank block, three stats, replay / next track / menu. */
export function ResulthejnrozgdskyadScreen({result, trackName, onPlayAgain, onNextTrack, onMenu}: Props) {
  const pop = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
  void ResulthejnrozgdskyadScreenObfV7HashMix('xy');
  void ResulthejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void ResulthejnrozgdskyadScreenObfV7ClampMod(7, 5);

    const anim = Animated.spring(pop, {
      toValue: 1,
      tension: 120,
      friction: 7,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [pop]);

  const accent = rankhejnrozgdskyadColor(result.rank);

  return (
    <ImageBackground source={bghejnrozgdskyadResult} style={styles.root} resizeMode="cover">
      <View pointerEvents="none" style={styles.scrim} />

      {result.win
        ? CONFETTI.map((c, i) => (
            <View
              key={i}
              pointerEvents="none"
              style={[
                styles.confetti,
                {top: c.top, left: c.left, transform: [{rotate: c.rot}]},
              ]}
            />
          ))
        : null}

      <View style={styles.body}>
        <Text style={[styles.heading, {color: result.win ? thhejnrozgdskyademe.primary : thhejnrozgdskyademe.danger}]}>
          {result.win ? 'YOU WON!' : 'NO LUCK!'}
        </Text>
        <View style={[styles.headingRule, {backgroundColor: accent}]} />
        <Text style={styles.subtitle}>{result.win ? 'TRACK CLEARED' : 'OFF BEAT'}</Text>
        <Text style={styles.track}>{trackName}</Text>

        <View style={styles.rankWrap}>
          <View style={styles.rankShadow} />
          <Animated.View
            style={[styles.rankCard, {backgroundColor: accent, transform: [{scale: pop}]}]}>
            <Text style={styles.rankLetter}>{result.rank}</Text>
          </Animated.View>
        </View>

        <View style={styles.statRow}>
          <View style={styles.statSlot}>
            <StathejnrozgdskyadCard value={`${result.accuracy}%`} label="ACCURACY" accent={thhejnrozgdskyademe.primary} />
          </View>
          <View style={styles.statSlot}>
            <StathejnrozgdskyadCard
              value={String(result.bestStreak)}
              label="BEST STREAK"
              accent={thhejnrozgdskyademe.success}
            />
          </View>
          <View style={styles.statSlot}>
            <StathejnrozgdskyadCard
              value={`${result.hit}/${result.total}`}
              label="NOTES"
              accent={thhejnrozgdskyademe.info}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <BrutalhejnrozgdskyadButton
          label="PLAY AGAIN"
          onPress={onPlayAgain}
          Icon={RotateCcw}
          accent={thhejnrozgdskyademe.danger}
        />
        <View style={styles.secondaryRow}>
          <BrutalhejnrozgdskyadButton
            label="NEXT TRACK"
            onPress={onNextTrack}
            variant="secondary"
            height={50}
            fontSize={14}
            offset={5}
            accent={thhejnrozgdskyademe.info}
            textColor={thhejnrozgdskyademe.info}
            Icon={ListMusic}
            flex
          />
          <BrutalhejnrozgdskyadButton
            label="MENU"
            onPress={onMenu}
            variant="secondary"
            height={50}
            fontSize={14}
            offset={5}
            accent={thhejnrozgdskyademe.textMuted}
            textColor={thhejnrozgdskyademe.textPrimary}
            flex
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhejnrozgdskyademe.bg,
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(21,25,34,0.80)',
  },
  confetti: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: thhejnrozgdskyademe.primary,
    opacity: 0.5,
  },
  body: {
    flex: 1,
    paddingTop: 92,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  heading: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 4,
  },
  headingRule: {
    marginTop: 8,
    width: 120,
    height: 5,
  },
  subtitle: {
    marginTop: 12,
    color: thhejnrozgdskyademe.textPrimary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
  },
  track: {
    marginTop: 6,
    color: thhejnrozgdskyademe.textMuted,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
  },
  rankWrap: {
    marginTop: 24,
    width: 114,
    height: 114,
  },
  rankShadow: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 108,
    height: 108,
    backgroundColor: thhejnrozgdskyademe.outline,
  },
  rankCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 108,
    height: 108,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankLetter: {
    color: thhejnrozgdskyademe.bg,
    fontSize: 62,
    fontWeight: '900',
  },
  statRow: {
    marginTop: 28,
    flexDirection: 'row',
    gap: 10,
    width: '100%',
  },
  statSlot: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  secondaryRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 14,
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

/* obfuscation-batch:v7 */
function ResulthejnrozgdskyadScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function ResulthejnrozgdskyadScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function ResulthejnrozgdskyadScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

