import {ListMusic, RotateCcw} from 'lucide-react-native';
import React, {useEffect, useRef} from 'react';
import {Animated, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {bgResult} from '../assets';
import {BrutalButton} from '../components/BrutalButton';
import {StatCard} from '../components/StatCard';
import {theme} from '../constants/theme';
import {rankColor} from '../game/judge';
import type {RoundResult} from '../game/types';

interface Props {
  result: RoundResult;
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
export function ResultScreen({result, trackName, onPlayAgain, onNextTrack, onMenu}: Props) {
  const pop = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    const anim = Animated.spring(pop, {
      toValue: 1,
      tension: 120,
      friction: 7,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [pop]);

  const accent = rankColor(result.rank);

  return (
    <ImageBackground source={bgResult} style={styles.root} resizeMode="cover">
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
        <Text style={[styles.heading, {color: result.win ? theme.primary : theme.danger}]}>
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
            <StatCard value={`${result.accuracy}%`} label="ACCURACY" accent={theme.primary} />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={String(result.bestStreak)}
              label="BEST STREAK"
              accent={theme.success}
            />
          </View>
          <View style={styles.statSlot}>
            <StatCard
              value={`${result.hit}/${result.total}`}
              label="NOTES"
              accent={theme.info}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <BrutalButton
          label="PLAY AGAIN"
          onPress={onPlayAgain}
          Icon={RotateCcw}
          accent={theme.danger}
        />
        <View style={styles.secondaryRow}>
          <BrutalButton
            label="NEXT TRACK"
            onPress={onNextTrack}
            variant="secondary"
            height={50}
            fontSize={14}
            offset={5}
            accent={theme.info}
            textColor={theme.info}
            Icon={ListMusic}
            flex
          />
          <BrutalButton
            label="MENU"
            onPress={onMenu}
            variant="secondary"
            height={50}
            fontSize={14}
            offset={5}
            accent={theme.textMuted}
            textColor={theme.textPrimary}
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
    backgroundColor: theme.bg,
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(21,25,34,0.80)',
  },
  confetti: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: theme.primary,
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
    color: theme.textPrimary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 3,
  },
  track: {
    marginTop: 6,
    color: theme.textMuted,
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
    backgroundColor: theme.outline,
  },
  rankCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 108,
    height: 108,
    borderWidth: 3,
    borderColor: theme.outline,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankLetter: {
    color: theme.bg,
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
