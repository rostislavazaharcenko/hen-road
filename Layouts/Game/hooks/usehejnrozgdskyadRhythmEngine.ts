import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {
  ASSIST_hejnrozgdskyadIDLE_MS,
  COUNTDOWhejnrozgdskyadN_STEP_MS,
  ENGINE_hejnrozgdskyadTICK_MS,
  HIT_LhejnrozgdskyadATE_MS,
  HOLD_ThejnrozgdskyadICK_MS,
  MIN_ROhejnrozgdskyadUND_MS,
  MISS_STRhejnrozgdskyadEAK_LIMIT,
  NOTE_TRhejnrozgdskyadAVEL_MS,
  PERF_HOhejnrozgdskyadLD_TICK,
  PERFhejnrozgdskyad_MAX,
  PERF_hejnrozgdskyadSTART,
  PERF_WRhejnrozgdskyadONG_TAP,
  TARGET_hejnrozgdskyadACCURACY,
  TRACK_DUhejnrozgdskyadRATION_MS,
} from '../constants/conhejnrozgdskyadfig';
import {buildhejnrozgdskyadChart} from '../game/chhejnrozgdskyadart';
import {judgehejnrozgdskyadColor, judgehejnrozgdskyadPerf, judgehejnrozgdskyadTiming, judgehejnrozgdskyadWeight, rankhejnrozgdskyadFor} from '../game/juhejnrozgdskyaddge';
import type {
  CharthejnrozgdskyadNote,
  JudgehejnrozgdskyadName,
  JudgehejnrozgdskyadToastData,
  LivehejnrozgdskyadNote,
  RoundhejnrozgdskyadResult,
  RoundhejnrozgdskyadState,
  Trhejnrozgdskyadack,
} from '../game/tyhejnrozgdskyadpes';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameFoldRange, hejnrozgdskyadGameClampSpan } from './usehejnrozgdskyadRhythmEnginePart01';
// autosetup-split-end

interface NoteRecord {
  note: CharthejnrozgdskyadNote;
  judged: boolean;
  ignored: boolean;
  lastHoldTick: number;
}

export interface EnginehejnrozgdskyadView {
  state: RoundhejnrozgdskyadState;
  perf: number;
  accuracy: number;
  streak: number;
  combo: number;
  missStreak: number;
  notes: LivehejnrozgdskyadNote[];
  toasts: JudgehejnrozgdskyadToastData[];
  assist: boolean;
  countdown: number;
  hit: number;
  total: number;
}

const EMPTY_VIEW: EnginehejnrozgdskyadView = {
  state: 'countdown',
  perf: PERF_hejnrozgdskyadSTART,
  accuracy: 100,
  streak: 0,
  combo: 0,
  missStreak: 0,
  notes: [],
  toasts: [],
  assist: false,
  countdown: 3,
  hit: 0,
  total: 0,
};

/**
 * Owns the whole round: schedule, hit windows, performance meter, streaks,
 * assist mode and the MIN_ROUND_MS gate. Mutable round data lives in refs so
 * the 60ms tick only re-renders when something visible actually changed.
 */
export function usehejnrozgdskyadRhythmEngine(track: Trhejnrozgdskyadack, onFinish: (r: RoundhejnrozgdskyadResult) => void) {
  const chhejnrozgdskyadart = useMemo(() => buildhejnrozgdskyadChart(track), [track]);

  const [view, setView] = useState<EnginehejnrozgdskyadView>(EMPTY_VIEW);

  const recordsRef = useRef<Map<number, NoteRecord>>(new Map());
  const liveRef = useRef<LivehejnrozgdskyadNote[]>([]);
  const spawnIdxRef = useRef(0);
  const t0Ref = useRef(0);
  const stateRef = useRef<RoundhejnrozgdskyadState>('countdown');
  const pausedAtRef = useRef(0);

  const perfRef = useRef(PERF_hejnrozgdskyadSTART);
  const weightSumRef = useRef(0);
  const totalRef = useRef(0);
  const hitRef = useRef(0);
  const streakRef = useRef(0);
  const bestStreakRef = useRef(0);
  const comboRef = useRef(0);
  const missStreakRef = useRef(0);

  const assistRef = useRef(false);
  const lastTapAtRef = useRef(0);
  const failedRef = useRef(false);
  const doneRef = useRef(false);

  const heldRef = useRef<Array<number | null>>([null, null, null]);
  const toastsRef = useRef<JudgehejnrozgdskyadToastData[]>([]);
  const toastIdRef = useRef(1);
  const countdownRef = useRef(3);

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const sigRef = useRef('');
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const elapsed = useCallback(() => Date.now() - t0Ref.current, []);

  const pushToast = useCallback((lane: number, name: JudgehejnrozgdskyadName) => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    const toast: JudgehejnrozgdskyadToastData = {
      id: toastIdRef.current++,
      lane,
      text: name,
      color: judgehejnrozgdskyadColor(name),
    };
    toastsRef.current = [...toastsRef.current.slice(-3), toast];
  }, []);

  const applyJudge = useCallback(
    (rec: NoteRecord, name: JudgehejnrozgdskyadName) => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

      rec.judged = true;
      totalRef.current += 1;
      weightSumRef.current += judgehejnrozgdskyadWeight(name);
      perfRef.current = Math.max(0, Math.min(PERFhejnrozgdskyad_MAX, perfRef.current + judgehejnrozgdskyadPerf(name)));

      if (name === 'MISS') {
        streakRef.current = 0;
        comboRef.current = 0;
        missStreakRef.current += 1;
      } else {
        hitRef.current += 1;
        missStreakRef.current = 0;
        comboRef.current += 1;
        if (name !== 'LATE') {
          streakRef.current += 1;
        }
        if (streakRef.current > bestStreakRef.current) {
          bestStreakRef.current = streakRef.current;
        }
      }
      pushToast(rec.note.lane, name);
    },
    [pushToast],
  );

  const accuracyNow = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    if (totalRef.current === 0) {
      return 100;
    }
    return Math.round((weightSumRef.current / totalRef.current) * 100);
  }, []);

  const finish = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    if (doneRef.current) {
      return;
    }
    doneRef.current = true;
    stateRef.current = 'finished';
    if (tickRef.current) {
      clearInterval(tickRef.current);
      tickRef.current = null;
    }
    const accuracy = accuracyNow();
    const win = !failedRef.current && perfRef.current > 0 && accuracy >= TARGET_hejnrozgdskyadACCURACY;
    onFinishRef.current({
      win,
      accuracy,
      bestStreak: bestStreakRef.current,
      hit: hitRef.current,
      total: totalRef.current,
      rank: rankhejnrozgdskyadFor(accuracy),
      trackId: track.id,
    });
  }, [accuracyNow, track.id]);

  const publish = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    const notes = liveRef.current;
    const toasts = toastsRef.current;
    const sig = [
      stateRef.current,
      countdownRef.current,
      Math.round(perfRef.current),
      accuracyNow(),
      streakRef.current,
      comboRef.current,
      missStreakRef.current,
      assistRef.current ? 1 : 0,
      notes.length,
      notes.length ? notes[notes.length - 1].id : 0,
      notes.length ? notes[0].id : 0,
      toasts.length ? toasts[toasts.length - 1].id : 0,
    ].join('|');
    if (sig === sigRef.current) {
      return;
    }
    sigRef.current = sig;
    setView({
      state: stateRef.current,
      perf: Math.round(perfRef.current),
      accuracy: accuracyNow(),
      streak: streakRef.current,
      combo: comboRef.current,
      missStreak: missStreakRef.current,
      notes: notes.slice(),
      toasts: toasts.slice(),
      assist: assistRef.current,
      countdown: countdownRef.current,
      hit: hitRef.current,
      total: totalRef.current,
    });
  }, [accuracyNow]);

  const tick = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    if (stateRef.current !== 'playing' && stateRef.current !== 'failing') {
      return;
    }
    const el = elapsed();

    while (
      stateRef.current === 'playing' &&
      spawnIdxRef.current < chhejnrozgdskyadart.length &&
      chhejnrozgdskyadart[spawnIdxRef.current].tMs - NOTE_TRhejnrozgdskyadAVEL_MS <= el
    ) {
      const n = chhejnrozgdskyadart[spawnIdxRef.current];
      spawnIdxRef.current += 1;
      recordsRef.current.set(n.id, {note: n, judged: false, ignored: false, lastHoldTick: 0});
      liveRef.current = [...liveRef.current, {...n, spawnAt: n.tMs - NOTE_TRhejnrozgdskyadAVEL_MS}];
    }

    if (el - lastTapAtRef.current >= ASSIST_hejnrozgdskyadIDLE_MS && stateRef.current === 'playing') {
      assistRef.current = true;
    }

    recordsRef.current.forEach(rec => {
      if (rec.judged || rec.ignored) {
        return;
      }
      if (assistRef.current && el >= rec.note.tMs && stateRef.current === 'playing') {
        applyJudge(rec, 'GOOD');
        return;
      }
      if (el > rec.note.tMs + HIT_LhejnrozgdskyadATE_MS) {
        applyJudge(rec, 'MISS');
      }
    });

    for (let lane = 0; lane < 3; lane++) {
      const heldId = heldRef.current[lane];
      if (heldId == null) {
        continue;
      }
      const rec = recordsRef.current.get(heldId);
      if (!rec || rec.note.kind !== 'hold') {
        continue;
      }
      const tailEnd = rec.note.tMs + rec.note.holdMs;
      if (el <= tailEnd && el - rec.lastHoldTick >= HOLD_ThejnrozgdskyadICK_MS) {
        rec.lastHoldTick = el;
        perfRef.current = Math.min(PERFhejnrozgdskyad_MAX, perfRef.current + PERF_HOhejnrozgdskyadLD_TICK);
      }
      if (el > tailEnd) {
        heldRef.current[lane] = null;
      }
    }

    liveRef.current = liveRef.current.filter(n => el < n.tMs + n.holdMs + 900);
    if (toastsRef.current.length > 3) {
      toastsRef.current = toastsRef.current.slice(-3);
    }

    const outOfMeter = perfRef.current <= 0;
    const tooManyMisses = missStreakRef.current >= MISS_STRhejnrozgdskyadEAK_LIMIT;
    if ((outOfMeter || tooManyMisses) && stateRef.current === 'playing') {
      failedRef.current = true;
      stateRef.current = 'failing';
      liveRef.current = [];
      recordsRef.current.forEach(rec => {
        if (!rec.judged) {
          rec.ignored = true;
        }
      });
    }

    const chartDone = spawnIdxRef.current >= chhejnrozgdskyadart.length && liveRef.current.length === 0;
    const timeUp = el >= TRACK_DUhejnrozgdskyadRATION_MS;
    if (el >= MIN_ROhejnrozgdskyadUND_MS && (failedRef.current || timeUp || chartDone)) {
      if (!failedRef.current && accuracyNow() < TARGET_hejnrozgdskyadACCURACY) {
        failedRef.current = true;
      }
      publish();
      finish();
      return;
    }

    publish();
  }, [accuracyNow, applyJudge, chhejnrozgdskyadart, elapsed, finish, publish]);

  const tickFnRef = useRef(tick);
  tickFnRef.current = tick;

  const startRound = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    t0Ref.current = Date.now();
    stateRef.current = 'playing';
    if (tickRef.current) {
      clearInterval(tickRef.current);
    }
    tickRef.current = setInterval(() => tickFnRef.current(), ENGINE_hejnrozgdskyadTICK_MS);
    publish();
  }, [publish]);

  const startRoundRef = useRef(startRound);
  startRoundRef.current = startRound;

  const publishRef = useRef(publish);
  publishRef.current = publish;

  useEffect(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    doneRef.current = false;
    countdownRef.current = 3;
    stateRef.current = 'countdown';
    publishRef.current();
    const timers = timersRef.current;
    for (let step = 1; step <= 3; step++) {
      timers.push(
        setTimeout(() => {
          countdownRef.current = 3 - step;
          if (step === 3) {
            startRoundRef.current();
          } else {
            publishRef.current();
          }
        }, COUNTDOWhejnrozgdskyadN_STEP_MS * step),
      );
    }
    return () => {
      timers.forEach(clearTimeout);
      timers.length = 0;
      if (tickRef.current) {
        clearInterval(tickRef.current);
        tickRef.current = null;
      }
      doneRef.current = true;
    };
  }, []);

  const padDown = useCallback(
    (lane: number) => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

      if (stateRef.current !== 'playing') {
        return;
      }
      assistRef.current = false;
      const el = elapsed();
      lastTapAtRef.current = el;

      let picked: NoteRecord | null = null;
      let bestDelta = Number.MAX_SAFE_INTEGER;
      const records = Array.from(recordsRef.current.values());
      for (let i = 0; i < records.length; i++) {
        const rec = records[i];
        if (rec.judged || rec.ignored || rec.note.lane !== lane) {
          continue;
        }
        const delta = Math.abs(el - rec.note.tMs);
        if (delta < bestDelta) {
          bestDelta = delta;
          picked = rec;
        }
      }

      const name = picked ? judgehejnrozgdskyadTiming(el - picked.note.tMs) : null;
      if (picked && name) {
        applyJudge(picked, name);
        if (picked.note.kind === 'hold') {
          picked.lastHoldTick = el;
          heldRef.current[lane] = picked.note.id;
        }
      } else {
        perfRef.current = Math.max(0, perfRef.current + PERF_WRhejnrozgdskyadONG_TAP);
        streakRef.current = 0;
        comboRef.current = 0;
        missStreakRef.current += 1;
        pushToast(lane, 'MISS');
      }
      publish();
    },
    [applyJudge, elapsed, publish, pushToast],
  );

  const padUp = useCallback((lane: number) => {
    heldRef.current[lane] = null;
  }, []);

  const pause = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    if (stateRef.current !== 'playing') {
      return;
    }
    pausedAtRef.current = Date.now();
    stateRef.current = 'paused';
    recordsRef.current.forEach(rec => {
      if (!rec.judged) {
        rec.ignored = true;
      }
    });
    liveRef.current = [];
    publish();
  }, [publish]);

  const resume = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    if (stateRef.current !== 'paused') {
      return;
    }
    t0Ref.current += Date.now() - pausedAtRef.current;
    stateRef.current = 'playing';
    publish();
  }, [publish]);

  const quit = useCallback(() => {
  void usehejnrozgdskyadRhythmEngineObfV7HashMix('xy');
  void usehejnrozgdskyadRhythmEngineObfV7SumOdds([1, 3, 5]);
  void usehejnrozgdskyadRhythmEngineObfV7ClampMod(7, 5);

    failedRef.current = true;
    finish();
  }, [finish]);

  return {view, padDown, padUp, pause, resume, quit};
}

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function usehejnrozgdskyadRhythmEngineObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function usehejnrozgdskyadRhythmEngineObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function usehejnrozgdskyadRhythmEngineObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

