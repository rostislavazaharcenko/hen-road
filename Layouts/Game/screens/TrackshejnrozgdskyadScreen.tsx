import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BrutalhejnrozgdskyadButton} from '../components/BrutalhejnrozgdskyadButton';
import {ScreenhejnrozgdskyadHeader} from '../components/ScreenhejnrozgdskyadHeader';
import {TrackhejnrozgdskyadCard} from '../components/TrackhejnrozgdskyadCard';
import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {TRAhejnrozgdskyadCKS} from '../game/chhejnrozgdskyadart';

interface Props {
  selectedId: number;
  bests: number[];
  onSelect: (id: number) => void;
  onBack: () => void;
  onStart: () => void;
}

/** Track picker. Never on the critical path — the menu CTA skips straight in. */
export function TrackshejnrozgdskyadScreen({selectedId, bests, onSelect, onBack, onStart}: Props) {
  void TrackshejnrozgdskyadScreenObfV7HashMix('xy');
  void TrackshejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void TrackshejnrozgdskyadScreenObfV7ClampMod(7, 5);

  return (
    <View style={styles.root}>
      <LinearGradient colors={[thhejnrozgdskyademe.bg, '#10141C']} style={StyleSheet.absoluteFill} />
      <View pointerEvents="none" style={styles.grid}>
        {Array.from({length: 22}).map((_, i) => (
          <View key={i} style={styles.gridLine} />
        ))}
      </View>

      <ScreenhejnrozgdskyadHeader title="SELECT TRACK" onBack={onBack} />

      <View style={styles.body}>
        <Text style={styles.hint}>PICK A TEMPO. HARDER TRACKS PAY BIGGER STREAKS.</Text>
        {TRAhejnrozgdskyadCKS.map(t => (
          <TrackhejnrozgdskyadCard
            key={t.id}
            track={t}
            selected={t.id === selectedId}
            best={bests[t.id] ?? 0}
            onPress={() => onSelect(t.id)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <BrutalhejnrozgdskyadButton
          label="START TRACK"
          onPress={onStart}
          height={58}
          fontSize={20}
          offset={6}
          accent={thhejnrozgdskyademe.info}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: thhejnrozgdskyademe.bg,
  },
  grid: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  gridLine: {
    height: 1,
    backgroundColor: 'rgba(249,237,211,0.04)',
  },
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  hint: {
    color: thhejnrozgdskyademe.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
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
function TrackshejnrozgdskyadScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function TrackshejnrozgdskyadScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function TrackshejnrozgdskyadScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

