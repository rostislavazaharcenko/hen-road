/**
 * RETRO_NEON preset, accent hexes overridden to the HenRoad brand palette.
 * The preset `name` stays untouched (pipeline rule 11b).
 */
export const theme = {
  name: 'RETRO_NEON',

  bg: '#151922',
  bgDeep: '#0D1016',
  bgDeepest: '#05070C',
  surface: '#1D2330',
  surfaceAlt: '#262D3D',
  outline: '#000000',

  primary: '#FFC63F',
  danger: '#EF5245',
  info: '#31BCD0',
  success: '#86CA4A',

  textPrimary: '#F9EDD3',
  textSecondary: 'rgba(249,237,211,0.62)',
  textMuted: 'rgba(249,237,211,0.38)',
} as const;

/** Lane index -> accent. Red is reserved for misses, never a lane. */
export const LANE_COLORS = [theme.info, theme.primary, theme.success];
export const LANE_LABELS = ['LOW', 'MID', 'HIGH'];

export const radius = {
  block: 6,
  chip: 4,
} as const;

export const border = {
  width: 3,
  color: theme.outline,
} as const;

export type Theme = typeof theme;
