import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useRef} from 'react';
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';

import {BrutalButton} from '../components/BrutalButton';
import {ScreenHeader} from '../components/ScreenHeader';
import {TARGET_ACCURACY} from '../constants/config';
import {theme} from '../constants/theme';

interface Props {
  onBack: () => void;
  onDone: () => void;
}

interface DemoProps {
  color: string;
  tall: boolean;
  delay: number;
}

function LaneDemo({color, tall, delay}: DemoProps) {
  const drop = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const anim = Animated.timing(drop, {
      toValue: 92,
      duration: 1400,
      delay,
      easing: Easing.linear,
      useNativeDriver: true,
    });
    anim.start();
    return () => anim.stop();
  }, [delay, drop]);

  return (
    <View style={styles.demo}>
      <View style={styles.demoLane} />
      <Animated.View
        pointerEvents="none"
        style={[
          styles.demoNote,
          {height: tall ? 96 : 44, backgroundColor: color, transform: [{translateY: drop}]},
        ]}
      />
      <View style={styles.demoHit} />
    </View>
  );
}

/** Two block cards: one short note, one hold note. */
export function TutorialScreen({onBack, onDone}: Props) {
  return (
    <View style={styles.root}>
      <LinearGradient colors={['#0F1219', theme.bg]} style={StyleSheet.absoluteFill} />

      <ScreenHeader title="HOW IT WORKS" onBack={onBack} />

      <View style={styles.body}>
        <View style={[styles.card, {borderColor: theme.outline}]}>
          <View style={styles.cardHead}>
            <View style={[styles.cardDot, {backgroundColor: theme.info}]} />
            <Text style={[styles.cardTitle, {color: theme.info}]}>SHORT NOTE</Text>
          </View>
          <LaneDemo color={theme.info} tall={false} delay={200} />
          <Text style={styles.cardText}>TAP THE PAD THE MOMENT THE BLOCK HITS THE LINE.</Text>
        </View>

        <View style={[styles.card, {borderColor: theme.outline}]}>
          <View style={styles.cardHead}>
            <View style={[styles.cardDot, {backgroundColor: theme.success}]} />
            <Text style={[styles.cardTitle, {color: theme.success}]}>LONG NOTE</Text>
          </View>
          <LaneDemo color={theme.success} tall delay={600} />
          <Text style={styles.cardText}>HOLD THE PAD UNTIL THE TAIL LEAVES THE LINE.</Text>
        </View>

        <Text style={styles.info}>
          ACCURACY {TARGET_ACCURACY}% OR HIGHER CLEARS THE SET.
        </Text>
      </View>

      <View style={styles.footer}>
        <BrutalButton
          label="GOT IT"
          onPress={onDone}
          height={56}
          fontSize={18}
          offset={6}
          face={theme.success}
          accent={theme.info}
          textColor={theme.bg}
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
  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  card: {
    backgroundColor: theme.surface,
    borderWidth: 3,
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  cardDot: {
    width: 10,
    height: 10,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '900',
    letterSpacing: 2,
  },
  demo: {
    height: 120,
    backgroundColor: theme.bgDeep,
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'flex-start',
  },
  demoLane: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.02)',
  },
  demoNote: {
    position: 'absolute',
    top: -10,
    left: '50%',
    marginLeft: -22,
    width: 44,
    borderWidth: 3,
    borderColor: theme.outline,
    borderRadius: 4,
  },
  demoHit: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 96,
    height: 5,
    backgroundColor: theme.textPrimary,
  },
  cardText: {
    marginTop: 12,
    color: theme.textSecondary,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.2,
  },
  info: {
    marginTop: 4,
    color: theme.primary,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 1.5,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
});
