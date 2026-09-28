import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {BrutalButton} from '../components/BrutalButton';
import {ScreenHeader} from '../components/ScreenHeader';
import {TrackCard} from '../components/TrackCard';
import {theme} from '../constants/theme';
import {TRACKS} from '../game/chart';

interface Props {
  selectedId: number;
  bests: number[];
  onSelect: (id: number) => void;
  onBack: () => void;
  onStart: () => void;
}

/** Track picker. Never on the critical path — the menu CTA skips straight in. */
export function TracksScreen({selectedId, bests, onSelect, onBack, onStart}: Props) {
  return (
    <View style={styles.root}>
      <LinearGradient colors={[theme.bg, '#10141C']} style={StyleSheet.absoluteFill} />
      <View pointerEvents="none" style={styles.grid}>
        {Array.from({length: 22}).map((_, i) => (
          <View key={i} style={styles.gridLine} />
        ))}
      </View>

      <ScreenHeader title="SELECT TRACK" onBack={onBack} />

      <View style={styles.body}>
        <Text style={styles.hint}>PICK A TEMPO. HARDER TRACKS PAY BIGGER STREAKS.</Text>
        {TRACKS.map(t => (
          <TrackCard
            key={t.id}
            track={t}
            selected={t.id === selectedId}
            best={bests[t.id] ?? 0}
            onPress={() => onSelect(t.id)}
          />
        ))}
      </View>

      <View style={styles.footer}>
        <BrutalButton
          label="START TRACK"
          onPress={onStart}
          height={58}
          fontSize={20}
          offset={6}
          accent={theme.info}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.bg,
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
    color: theme.textSecondary,
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
