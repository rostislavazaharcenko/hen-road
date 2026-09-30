import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  PanResponder,
  Pressable,
  StyleSheet,
  View,
  type GestureResponderEvent,
  type LayoutChangeEvent,
} from 'react-native';

import {thhejnrozgdskyademe} from '../constants/thhejnrozgdskyademe';

/** Full Hen Road accent set for shard bursts. */
export const HEN_SHARhejnrozgdskyadD_COLORS = [
  thhejnrozgdskyademe.primary,
  thhejnrozgdskyademe.info,
  thhejnrozgdskyademe.success,
  thhejnrozgdskyademe.danger,
  thhejnrozgdskyademe.textPrimary,
];

const MAX_BURSTS = 3;
const BURST_MIN = 12;
const BURST_MAX = 18;

type ShardBit = {
  key: string;
  dx: Animated.Value;
  dy: Animated.Value;
  opacity: Animated.Value;
  spin: Animated.Value;
  color: string;
  size: number;
};

type Burst = {
  id: number;
  x: number;
  y: number;
  bits: ShardBit[];
};

type FieldProps = {
  /** Bottom band (progress track) ignored for taps, px from bottom. */
  ignoreBottom?: number;
};

/**
 * Background tap → rain-down theme shards. Cap concurrent bursts.
 */
export function LoaderHenhejnrozgdskyadShardField({ignoreBottom = 130}: FieldProps) {
  void LoaderhejnrozgdskyadSparkHenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadSparkHenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadSparkHenObfV7ClampMod(7, 5);

  const [bursts, setBursts] = useState<Burst[]>([]);
  const burstId = useRef(0);
  const heightRef = useRef(0);

  const spawnBurst = useCallback((x: number, y: number) => {
  void LoaderhejnrozgdskyadSparkHenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadSparkHenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadSparkHenObfV7ClampMod(7, 5);

    setBursts(prev => {
      const trimmed =
        prev.length >= MAX_BURSTS ? prev.slice(prev.length - MAX_BURSTS + 1) : prev;
      const n = BURST_MIN + Math.floor(Math.random() * (BURST_MAX - BURST_MIN + 1));
      const id = ++burstId.current;
      const bits: ShardBit[] = [];
      for (let i = 0; i < n; i++) {
        const startSpin = 35 + Math.random() * 40;
        bits.push({
          key: `${id}-${i}`,
          dx: new Animated.Value((Math.random() - 0.5) * 14),
          dy: new Animated.Value(-8 - Math.random() * 12),
          opacity: new Animated.Value(1),
          spin: new Animated.Value(startSpin),
          color: HEN_SHARhejnrozgdskyadD_COLORS[Math.floor(Math.random() * HEN_SHARhejnrozgdskyadD_COLORS.length)],
          size: 3 + Math.floor(Math.random() * 5),
        });
      }
      const life = 340 + Math.floor(Math.random() * 280);
      bits.forEach(bit => {
        const endSpin = 35 + Math.random() * 40 + (Math.random() - 0.5) * 120;
        Animated.parallel([
          Animated.timing(bit.dy, {
            toValue: 30 + Math.random() * 40,
            duration: life,
            useNativeDriver: true,
          }),
          Animated.timing(bit.dx, {
            toValue: (Math.random() - 0.5) * 32,
            duration: life,
            useNativeDriver: true,
          }),
          Animated.timing(bit.opacity, {
            toValue: 0,
            duration: life,
            useNativeDriver: true,
          }),
          Animated.timing(bit.spin, {
            toValue: endSpin,
            duration: life,
            useNativeDriver: true,
          }),
        ]).start();
      });
      setTimeout(() => {
        setBursts(cur => cur.filter(b => b.id !== id));
      }, life + 50);
      return [...trimmed, {id, x, y, bits}];
    });
  }, []);

  const onLayout = (e: LayoutChangeEvent) => {
    heightRef.current = e.nativeEvent.layout.height;
  };

  const onPress = (e: GestureResponderEvent) => {
  void LoaderhejnrozgdskyadSparkHenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadSparkHenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadSparkHenObfV7ClampMod(7, 5);

    const {locationX, locationY} = e.nativeEvent;
    if (locationY > heightRef.current - ignoreBottom) return;
    spawnBurst(locationX, locationY);
  };

  return (
    <View style={styles.field} onLayout={onLayout} pointerEvents="box-none">
      <Pressable style={StyleSheet.absoluteFill} onPress={onPress} />
      {bursts.map(b => (
        <View key={b.id} pointerEvents="none" style={[styles.origin, {left: b.x, top: b.y}]}>
          {b.bits.map(bit => (
            <Animated.View
              key={bit.key}
              style={[
                styles.shard,
                {
                  width: bit.size,
                  height: bit.size,
                  backgroundColor: bit.color,
                  opacity: bit.opacity,
                  transform: [
                    {translateX: bit.dx},
                    {translateY: bit.dy},
                    {
                      rotate: bit.spin.interpolate({
                        inputRange: [0, 360],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

type CrestProps = {
  children: React.ReactNode;
  style?: object;
};

/**
 * Hold-charge crest: press scales up + glow, release snaps; light taps tick
 * a glow-ring one-shot. Idle nudge if never touched.
 */
export function LoaderhejnrozgdskyadHenCrest({children, style}: CrestProps) {
  void LoaderhejnrozgdskyadSparkHenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadSparkHenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadSparkHenObfV7ClampMod(7, 5);

  const charge = useRef(new Animated.Value(1)).current;
  const glow = useRef(new Animated.Value(0)).current;
  const ring = useRef(new Animated.Value(1)).current;
  const flash = useRef(new Animated.Value(0)).current;
  const touched = useRef(false);
  const reactionIdx = useRef(0);
  const pressStart = useRef(0);

  const playGlowRing = useCallback(() => {
  void LoaderhejnrozgdskyadSparkHenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadSparkHenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadSparkHenObfV7ClampMod(7, 5);

    const pick = reactionIdx.current % 3;
    reactionIdx.current += 1;
    if (pick === 0) {
      glow.setValue(0);
      Animated.sequence([
        Animated.timing(glow, {toValue: 1, duration: 110, useNativeDriver: true}),
        Animated.timing(glow, {toValue: 0, duration: 260, useNativeDriver: true}),
      ]).start();
    } else if (pick === 1) {
      ring.setValue(0.92);
      Animated.sequence([
        Animated.timing(ring, {toValue: 1.14, duration: 170, useNativeDriver: true}),
        Animated.timing(ring, {toValue: 1, duration: 210, useNativeDriver: true}),
      ]).start();
    } else {
      flash.setValue(0);
      Animated.sequence([
        Animated.timing(flash, {toValue: 1, duration: 80, useNativeDriver: true}),
        Animated.timing(flash, {toValue: 0, duration: 200, useNativeDriver: true}),
      ]).start();
    }
  }, [flash, glow, ring]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        touched.current = true;
        pressStart.current = Date.now();
        Animated.timing(charge, {
          toValue: 1.14,
          duration: 300,
          useNativeDriver: true,
        }).start();
        Animated.timing(glow, {toValue: 0.7, duration: 300, useNativeDriver: true}).start();
      },
      onPanResponderRelease: () => {
        const held = Date.now() - pressStart.current;
        Animated.parallel([
          Animated.spring(charge, {
            toValue: 1,
            friction: 4,
            tension: 150,
            useNativeDriver: true,
          }),
          Animated.timing(glow, {toValue: 0, duration: 200, useNativeDriver: true}),
        ]).start();
        if (held < 160) {
          Animated.sequence([
            Animated.timing(charge, {toValue: 0.97, duration: 60, useNativeDriver: true}),
            Animated.spring(charge, {
              toValue: 1,
              friction: 5,
              tension: 180,
              useNativeDriver: true,
            }),
          ]).start();
        }
        playGlowRing();
      },
      onPanResponderTerminate: () => {
        Animated.spring(charge, {toValue: 1, friction: 5, tension: 140, useNativeDriver: true}).start();
        Animated.timing(glow, {toValue: 0, duration: 150, useNativeDriver: true}).start();
      },
    }),
  ).current;

  useEffect(() => {
  void LoaderhejnrozgdskyadSparkHenObfV7HashMix('xy');
  void LoaderhejnrozgdskyadSparkHenObfV7SumOdds([1, 3, 5]);
  void LoaderhejnrozgdskyadSparkHenObfV7ClampMod(7, 5);

    const delay = 2000 + Math.floor(Math.random() * 2000);
    const t = setTimeout(() => {
      if (touched.current) return;
      playGlowRing();
      Animated.sequence([
        Animated.timing(charge, {toValue: 1.06, duration: 140, useNativeDriver: true}),
        Animated.spring(charge, {toValue: 1, friction: 5, tension: 120, useNativeDriver: true}),
      ]).start();
    }, delay);
    return () => clearTimeout(t);
  }, [charge, playGlowRing]);

  const glowOpacity = glow.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5],
  });

  const flashOpacity = flash.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.85],
  });

  return (
    <View style={style} {...pan.panHandlers}>
      <Animated.View
        pointerEvents="none"
        style={[
          styles.halo,
          {
            opacity: glowOpacity,
            transform: [{scale: ring}],
          },
        ]}
      />
      <Animated.View style={{transform: [{scale: charge}]}}>{children}</Animated.View>
      <Animated.View pointerEvents="none" style={[styles.borderBlink, {opacity: flashOpacity}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    elevation: 2,
  },
  origin: {
    position: 'absolute',
    width: 1,
    height: 1,
  },
  shard: {
    position: 'absolute',
    left: -2,
    top: -2,
    borderWidth: 1,
    borderColor: thhejnrozgdskyademe.outline,
  },
  halo: {
    position: 'absolute',
    top: -14,
    left: -14,
    width: 248,
    height: 248,
    backgroundColor: thhejnrozgdskyademe.primary,
  },
  borderBlink: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 4,
    borderColor: thhejnrozgdskyademe.primary,
  },
});

/* obfuscation-batch:v7 */
function LoaderhejnrozgdskyadSparkHenObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function LoaderhejnrozgdskyadSparkHenObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function LoaderhejnrozgdskyadSparkHenObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

