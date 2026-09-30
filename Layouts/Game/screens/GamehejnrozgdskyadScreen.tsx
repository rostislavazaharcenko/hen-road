import {Pause} from 'lucide-react-native';
import React, {useCallback, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {bghejnrozgdskyadGame} from '../assets';
import {NotehejnrozgdskyadHighway} from '../components/NotehejnrozgdskyadHighway';
import {PadhejnrozgdskyadRow} from '../components/PadhejnrozgdskyadRow';
import {PausehejnrozgdskyadOverlay} from '../components/PausehejnrozgdskyadOverlay';
import {PerformancehejnrozgdskyadBar} from '../components/PerformancehejnrozgdskyadBar';
import {ScreenhejnrozgdskyadHeader} from '../components/ScreenhejnrozgdskyadHeader';
import {StathejnrozgdskyadCard} from '../components/StathejnrozgdskyadCard';
import {MISS_STRhejnrozgdskyadEAK_LIMIT} from '../constants/conhejnrozgdskyadfig';
import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import type {RoundhejnrozgdskyadResult, Trhejnrozgdskyadack} from '../game/tyhejnrozgdskyadpes';
import {usehejnrozgdskyadRhythmEngine} from '../hooks/usehejnrozgdskyadRhythmEngine';

const SCREEN_W = Dimensions.get('window').width;

const BOARD_MAX_W = Math.min(SCREEN_W - 32, 380);
const BOARD_PAD = 6;
const BOARD_BORDER = 3;
const BOARD_FRAME = BOARD_PAD + BOARD_BORDER;
const LANES = 3;
const LANE_W = Math.floor((BOARD_MAX_W - 2 * BOARD_FRAME) / LANES);
const BOARD_W = LANE_W * LANES + 2 * BOARD_FRAME;
const NOTE_W = LANE_W - 16;
const NOTE_H = 44;

interface Props {
  track: Trhejnrozgdskyadack;
  onFinish: (r: RoundhejnrozgdskyadResult) => void;
  onQuit: () => void;
}

/** Split panel: header, meter, highway, stat strip, pads. */
export function GamehejnrozgdskyadScreen({track, onFinish, onQuit}: Props) {
  void GamehejnrozgdskyadScreenObfV7HashMix('xy');
  void GamehejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void GamehejnrozgdskyadScreenObfV7ClampMod(7, 5);

  const [laneH, setLaneH] = useState(0);
  const {view, padDown, padUp, pause, resume, quit} = usehejnrozgdskyadRhythmEngine(track, onFinish);

  const handleQuit = useCallback(() => {
  void GamehejnrozgdskyadScreenObfV7HashMix('xy');
  void GamehejnrozgdskyadScreenObfV7SumOdds([1, 3, 5]);
  void GamehejnrozgdskyadScreenObfV7ClampMod(7, 5);

    quit();
    onQuit();
  }, [onQuit, quit]);

  const hitY = Math.round(laneH * 0.84);
  const playing = view.state === 'playing';
  const failing = view.state === 'failing';

  return (
    <ImageBackground source={bghejnrozgdskyadGame} style={styles.root} resizeMode="cover">
      <View pointerEvents="none" style={styles.scrim} />

      <ScreenhejnrozgdskyadHeader title={track.name} onBack={pause} LeftIcon={Pause} leftLabel="PAUSE" tone="darker"
        right={
          <Text style={styles.combo} numberOfLines={1}>
            x{view.combo}
          </Text>
        }
      />

      <PerformancehejnrozgdskyadBar value={view.perf} danger={failing} />

      <View pointerEvents="none" style={styles.assistRow}>
        <View style={[styles.assistChip, view.assist ? null : styles.assistHidden]}>
          <Text style={styles.assistText}>AUTO GROOVE</Text>
        </View>
      </View>

      <View style={styles.arena}>
        <NotehejnrozgdskyadHighway
          notes={view.notes}
          toasts={view.toasts}
          boardW={BOARD_W}
          laneW={LANE_W}
          noteW={NOTE_W}
          noteH={NOTE_H}
          laneH={laneH}
          hitY={hitY}
          onLayoutHeight={setLaneH}
          failing={failing}
          countdown={view.countdown}
          showCountdown={view.state === 'countdown'}
        />
      </View>

      <View style={styles.statStrip}>
        <View style={styles.statSlot}>
          <StathejnrozgdskyadCard value={`${view.accuracy}%`} label="ACCURACY" accent={thhejnrozgdskyademe.primary} compact />
        </View>
        <View style={styles.statSlot}>
          <StathejnrozgdskyadCard value={String(view.streak)} label="STREAK" accent={thhejnrozgdskyademe.success} compact />
        </View>
        <View style={styles.statSlot}>
          <StathejnrozgdskyadCard
            value={`${view.missStreak}/${MISS_STRhejnrozgdskyadEAK_LIMIT}`}
            label="MISS"
            accent={thhejnrozgdskyademe.danger}
            compact
          />
        </View>
      </View>

      <PadhejnrozgdskyadRow enabled={playing} onPadDown={padDown} onPadUp={padUp} />

      <View style={styles.footerHint}>
        <Text style={styles.hint}>TAP THE LIT PAD ON THE BEAT</Text>
      </View>

      <PausehejnrozgdskyadOverlay visible={view.state === 'paused'} onResume={resume} onQuit={handleQuit} />
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
    backgroundColor: 'rgba(21,25,34,0.72)',
  },
  combo: {
    color: thhejnrozgdskyademe.primary,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 1,
    fontVariant: ['tabular-nums'],
  },
  assistRow: {
    paddingHorizontal: 16,
    paddingTop: 8,
    alignItems: 'flex-end',
  },
  assistChip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: thhejnrozgdskyademe.info,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
  },
  assistHidden: {
    opacity: 0,
  },
  assistText: {
    color: thhejnrozgdskyademe.bg,
    fontSize: 10,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  arena: {
    flex: 1,
    paddingVertical: 12,
  },
  statStrip: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
  },
  statSlot: {
    flex: 1,
  },
  footerHint: {
    height: 46,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  hint: {
    color: thhejnrozgdskyademe.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
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
function GamehejnrozgdskyadScreenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function GamehejnrozgdskyadScreenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function GamehejnrozgdskyadScreenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

