import {useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {
  ASSIST_IDLE_MS,
  COUNTDOWN_STEP_MS,
  ENGINE_TICK_MS,
  HIT_LATE_MS,
  HOLD_TICK_MS,
  MIN_ROUND_MS,
  MISS_STREAK_LIMIT,
  NOTE_TRAVEL_MS,
  PERF_HOLD_TICK,
  PERF_MAX,
  PERF_START,
  PERF_WRONG_TAP,
  TARGET_ACCURACY,
  TRACK_DURATION_MS,
} from '../constants/config';
import {buildChart} from '../game/chart';
import {judgeColor, judgePerf, judgeTiming, judgeWeight, rankFor} from '../game/judge';
import type {
  ChartNote,
  JudgeName,
  JudgeToastData,
  LiveNote,
  RoundResult,
  RoundState,
  Track,
} from '../game/types';

interface NoteRecord {
  note: ChartNote;
  judged: boolean;
  ignored: boolean;
  lastHoldTick: number;
}

export interface EngineView {
  state: RoundState;
  perf: number;
  accuracy: number;
  streak: number;
  combo: number;
  missStreak: number;
  notes: LiveNote[];
  toasts: JudgeToastData[];
  assist: boolean;
  countdown: number;
  hit: number;
  total: number;
}

const EMPTY_VIEW: EngineView = {
  state: 'countdown',
  perf: PERF_START,
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
export function useRhythmEngine(track: Track, onFinish: (r: RoundResult) => void) {
  const chart = useMemo(() => buildChart(track), [track]);

  const [view, setView] = useState<EngineView>(EMPTY_VIEW);

  const recordsRef = useRef<Map<number, NoteRecord>>(new Map());
  const liveRef = useRef<LiveNote[]>([]);
  const spawnIdxRef = useRef(0);
  const t0Ref = useRef(0);
  const stateRef = useRef<RoundState>('countdown');
  const pausedAtRef = useRef(0);

  const perfRef = useRef(PERF_START);
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
  const toastsRef = useRef<JudgeToastData[]>([]);
  const toastIdRef = useRef(1);
  const countdownRef = useRef(3);

  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timersRef = useRef<Array<ReturnType<typeof setTimeout>>>([]);
  const sigRef = useRef('');
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  const elapsed = useCallback(() => Date.now() - t0Ref.current, []);

  const pushToast = useCallback((lane: number, name: JudgeName) => {
    const toast: JudgeToastData = {
      id: toastIdRef.current++,
      lane,
      text: name,
      color: judgeColor(name),
    };
    toastsRef.current = [...toastsRef.current.slice(-3), toast];
  }, []);

  const applyJudge = useCallback(
    (rec: NoteRecord, name: JudgeName) => {
      rec.judged = true;
      totalRef.current += 1;
      weightSumRef.current += judgeWeight(name);
      perfRef.current = Math.max(0, Math.min(PERF_MAX, perfRef.current + judgePerf(name)));

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
    if (totalRef.current === 0) {
      return 100;
    }
    return Math.round((weightSumRef.current / totalRef.current) * 100);
  }, []);

  const finish = useCallback(() => {
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
    const win = !failedRef.current && perfRef.current > 0 && accuracy >= TARGET_ACCURACY;
    onFinishRef.current({
      win,
      accuracy,
      bestStreak: bestStreakRef.current,
      hit: hitRef.current,
      total: totalRef.current,
      rank: rankFor(accuracy),
      trackId: track.id,
    });
  }, [accuracyNow, track.id]);

  const publish = useCallback(() => {
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
    if (stateRef.current !== 'playing' && stateRef.current !== 'failing') {
      return;
    }
    const el = elapsed();

    while (
      stateRef.current === 'playing' &&
      spawnIdxRef.current < chart.length &&
      chart[spawnIdxRef.current].tMs - NOTE_TRAVEL_MS <= el
    ) {
      const n = chart[spawnIdxRef.current];
      spawnIdxRef.current += 1;
      recordsRef.current.set(n.id, {note: n, judged: false, ignored: false, lastHoldTick: 0});
      liveRef.current = [...liveRef.current, {...n, spawnAt: n.tMs - NOTE_TRAVEL_MS}];
    }

    if (el - lastTapAtRef.current >= ASSIST_IDLE_MS && stateRef.current === 'playing') {
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
      if (el > rec.note.tMs + HIT_LATE_MS) {
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
      if (el <= tailEnd && el - rec.lastHoldTick >= HOLD_TICK_MS) {
        rec.lastHoldTick = el;
        perfRef.current = Math.min(PERF_MAX, perfRef.current + PERF_HOLD_TICK);
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
    const tooManyMisses = missStreakRef.current >= MISS_STREAK_LIMIT;
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

    const chartDone = spawnIdxRef.current >= chart.length && liveRef.current.length === 0;
    const timeUp = el >= TRACK_DURATION_MS;
    if (el >= MIN_ROUND_MS && (failedRef.current || timeUp || chartDone)) {
      if (!failedRef.current && accuracyNow() < TARGET_ACCURACY) {
        failedRef.current = true;
      }
      publish();
      finish();
      return;
    }

    publish();
  }, [accuracyNow, applyJudge, chart, elapsed, finish, publish]);

  const tickFnRef = useRef(tick);
  tickFnRef.current = tick;

  const startRound = useCallback(() => {
    t0Ref.current = Date.now();
    stateRef.current = 'playing';
    if (tickRef.current) {
      clearInterval(tickRef.current);
    }
    tickRef.current = setInterval(() => tickFnRef.current(), ENGINE_TICK_MS);
    publish();
  }, [publish]);

  const startRoundRef = useRef(startRound);
  startRoundRef.current = startRound;

  const publishRef = useRef(publish);
  publishRef.current = publish;

  useEffect(() => {
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
        }, COUNTDOWN_STEP_MS * step),
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

      const name = picked ? judgeTiming(el - picked.note.tMs) : null;
      if (picked && name) {
        applyJudge(picked, name);
        if (picked.note.kind === 'hold') {
          picked.lastHoldTick = el;
          heldRef.current[lane] = picked.note.id;
        }
      } else {
        perfRef.current = Math.max(0, perfRef.current + PERF_WRONG_TAP);
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
    if (stateRef.current !== 'paused') {
      return;
    }
    t0Ref.current += Date.now() - pausedAtRef.current;
    stateRef.current = 'playing';
    publish();
  }, [publish]);

  const quit = useCallback(() => {
    failedRef.current = true;
    finish();
  }, [finish]);

  return {view, padDown, padUp, pause, resume, quit};
}
