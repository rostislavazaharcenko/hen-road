/**
 * Round tuning. Values are fixed by the design document and by the
 * pipeline invariants (loader duration, capture-window gates).
 */

// Splash duration — EXACTLY 8000ms so the capture agent always gets a frame
// of the brand card before the auto-transition to the menu fires.
export const LOADER_DURATION_MS = 8000;

// Round length / pacing.
export const TRACK_DURATION_MS = 27000;
export const MIN_ROUND_MS = 13000;
export const ASSIST_IDLE_MS = 4000;
export const NOTE_TRAVEL_MS = 2200;
export const COUNTDOWN_STEP_MS = 400;
export const ENGINE_TICK_MS = 60;
export const FIRST_NOTE_MS = 1800;

// Judgement windows (ms away from the note's exact hit time).
export const HIT_PERFECT_MS = 90;
export const HIT_GOOD_MS = 170;
export const HIT_LATE_MS = 240;
export const HOLD_TICK_MS = 250;

// Performance meter.
export const PERF_MAX = 100;
export const PERF_START = 62;
export const PERF_MISS = -3.5;
export const PERF_WRONG_TAP = -1.5;
export const PERF_HIT = 2.2;
export const PERF_PERFECT = 3.0;
export const PERF_HOLD_TICK = 0.4;

// Fail / clear thresholds.
export const MISS_STREAK_LIMIT = 5;
export const TARGET_ACCURACY = 82;

// Accuracy weights per judgement.
export const WEIGHT_PERFECT = 1.0;
export const WEIGHT_GOOD = 0.85;
export const WEIGHT_LATE = 0.6;
export const WEIGHT_MISS = 0.0;
