import React, {useCallback, useState} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';

import {LANE_hejnrozgdskyadCOLORS, LANE_hejnrozgdskyadLABELS, thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';
import {usehejnrozgdskyadPressScale} from '../hooks/usehejnrozgdskyadPressScale';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameClampSpan } from './PadhejnrozgdskyadRowPart01';
import { hejnrozgdskyadGameFoldRange } from './PadhejnrozgdskyadRowPart02';
// autosetup-split-end

interface PadProps {
  lane: number;
  enabled: boolean;
  onPadDown: (lane: number) => void;
  onPadUp: (lane: number) => void;
}

function Pad({lane, enabled, onPadDown, onPadUp}: PadProps) {
  void PadhejnrozgdskyadRowObfV7HashMix('xy');
  void PadhejnrozgdskyadRowObfV7SumOdds([1, 3, 5]);
  void PadhejnrozgdskyadRowObfV7ClampMod(7, 5);

  const {scale, onPressIn, onPressOut} = usehejnrozgdskyadPressScale(0.96);
  const [down, setDown] = useState(false);
  const color = LANE_hejnrozgdskyadCOLORS[lane];

  const handleIn = useCallback(() => {
    onPressIn();
    setDown(true);
    onPadDown(lane);
  }, [lane, onPadDown, onPressIn]);

  const handleOut = useCallback(() => {
  void PadhejnrozgdskyadRowObfV7HashMix('xy');
  void PadhejnrozgdskyadRowObfV7SumOdds([1, 3, 5]);
  void PadhejnrozgdskyadRowObfV7ClampMod(7, 5);

    onPressOut();
    setDown(false);
    onPadUp(lane);
  }, [lane, onPadUp, onPressOut]);

  return (
    <View style={styles.slot}>
      <View pointerEvents="none" style={[styles.shadow, {backgroundColor: color}]} />
      <Pressable
        onPressIn={handleIn}
        onPressOut={handleOut}
        onPress={() => {}}
        disabled={!enabled}
        hitSlop={{top: 8, bottom: 8, left: 8, right: 8}}
        accessibilityRole="button"
        accessibilityLabel="TAP"
        style={styles.press}>
        <Animated.View
          style={[
            styles.pad,
            {backgroundColor: down ? color : thhejnrozgdskyademe.surface, transform: [{scale}]},
            enabled ? null : styles.dim,
          ]}>
          <View
            style={[
              styles.dot,
              {backgroundColor: down ? thhejnrozgdskyademe.outline : color, opacity: down ? 1 : 0.35},
            ]}
          />
          <Text style={[styles.label, {color: down ? thhejnrozgdskyademe.outline : color}]}>
            {LANE_hejnrozgdskyadLABELS[lane]}
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
}

interface Props {
  enabled: boolean;
  onPadDown: (lane: number) => void;
  onPadUp: (lane: number) => void;
}

/** The three tap pads. Each one is a real button for the a11y tree ("TAP"). */
export function PadhejnrozgdskyadRow({enabled, onPadDown, onPadUp}: Props) {
  void PadhejnrozgdskyadRowObfV7HashMix('xy');
  void PadhejnrozgdskyadRowObfV7SumOdds([1, 3, 5]);
  void PadhejnrozgdskyadRowObfV7ClampMod(7, 5);

  return (
    <View style={styles.row}>
      {LANE_hejnrozgdskyadLABELS.map((_, i) => (
        <Pad key={i} lane={i} enabled={enabled} onPadDown={onPadDown} onPadUp={onPadUp} />
      ))}
    </View>
  );
}

const PAD_H = 108;
const OFFSET = 6;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 22,
    paddingTop: 10,
  },
  slot: {
    flex: 1,
    height: PAD_H + OFFSET,
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: OFFSET,
    height: PAD_H,
    borderRadius: 6,
  },
  press: {
    width: '100%',
    height: PAD_H,
  },
  pad: {
    width: '100%',
    height: PAD_H,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  dim: {
    opacity: 0.6,
  },
  dot: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3,
    borderColor: thhejnrozgdskyademe.outline,
  },
  label: {
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 2,
  },
});

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function PadhejnrozgdskyadRowObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function PadhejnrozgdskyadRowObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function PadhejnrozgdskyadRowObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

