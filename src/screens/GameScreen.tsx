import {Pause} from 'lucide-react-native';
import React, {useCallback, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text, View} from 'react-native';

import {bgGame} from '../assets';
import {NoteHighway} from '../components/NoteHighway';
import {PadRow} from '../components/PadRow';
import {PauseOverlay} from '../components/PauseOverlay';
import {PerformanceBar} from '../components/PerformanceBar';
import {ScreenHeader} from '../components/ScreenHeader';
import {StatCard} from '../components/StatCard';
import {MISS_STREAK_LIMIT} from '../constants/config';
import {theme} from '../constants/theme';
import type {RoundResult, Track} from '../game/types';
import {useRhythmEngine} from '../hooks/useRhythmEngine';

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
  track: Track;
  onFinish: (r: RoundResult) => void;
  onQuit: () => void;
}

/** Split panel: header, meter, highway, stat strip, pads. */
export function GameScreen({track, onFinish, onQuit}: Props) {
  const [laneH, setLaneH] = useState(0);
  const {view, padDown, padUp, pause, resume, quit} = useRhythmEngine(track, onFinish);

  const handleQuit = useCallback(() => {
    quit();
    onQuit();
  }, [onQuit, quit]);

  const hitY = Math.round(laneH * 0.84);
  const playing = view.state === 'playing';
  const failing = view.state === 'failing';

  return (
    <ImageBackground source={bgGame} style={styles.root} resizeMode="cover">
      <View pointerEvents="none" style={styles.scrim} />

      <ScreenHeader title={track.name} onBack={pause} LeftIcon={Pause} leftLabel="PAUSE" tone="darker"
        right={
          <Text style={styles.combo} numberOfLines={1}>
            x{view.combo}
          </Text>
        }
      />

      <PerformanceBar value={view.perf} danger={failing} />

      <View pointerEvents="none" style={styles.assistRow}>
        <View style={[styles.assistChip, view.assist ? null : styles.assistHidden]}>
          <Text style={styles.assistText}>AUTO GROOVE</Text>
        </View>
      </View>

      <View style={styles.arena}>
        <NoteHighway
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
          <StatCard value={`${view.accuracy}%`} label="ACCURACY" accent={theme.primary} compact />
        </View>
        <View style={styles.statSlot}>
          <StatCard value={String(view.streak)} label="STREAK" accent={theme.success} compact />
        </View>
        <View style={styles.statSlot}>
          <StatCard
            value={`${view.missStreak}/${MISS_STREAK_LIMIT}`}
            label="MISS"
            accent={theme.danger}
            compact
          />
        </View>
      </View>

      <PadRow enabled={playing} onPadDown={padDown} onPadUp={padUp} />

      <View style={styles.footerHint}>
        <Text style={styles.hint}>TAP THE LIT PAD ON THE BEAT</Text>
      </View>

      <PauseOverlay visible={view.state === 'paused'} onResume={resume} onQuit={handleQuit} />
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
    backgroundColor: 'rgba(21,25,34,0.72)',
  },
  combo: {
    color: theme.primary,
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
    backgroundColor: theme.info,
    borderWidth: 3,
    borderColor: theme.outline,
  },
  assistHidden: {
    opacity: 0,
  },
  assistText: {
    color: theme.bg,
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
    color: theme.textMuted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 2,
  },
});
