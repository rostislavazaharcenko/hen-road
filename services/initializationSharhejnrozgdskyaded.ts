import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { hejnrozgdskyadDecrypt } from './CryphejnrozgdskyadtoService';
import { finhejnrozgdskyadKey } from './constants/consthejnrozgdskyadntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  hejnrozgdskyadViewportGetState,
  hejnrozgdskyadViewportShow,
} from './hejnrozgdskyadViewportHost';
import { Utils } from './UthejnrozgdskyadilService';

let hejnrozgdskyadLastOpenedPushExternalUrl = '';
let hejnrozgdskyadLastOpenedPushExternalAt = 0;

export const hejnrozgdskyadInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof hejnrozgdskyadInitTarget)[keyof typeof hejnrozgdskyadInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface hejnrozgdskyadInitializationRuntime {
  pushejnrozgdskyadhToken: string;
  insthejnrozgdskyadallRef: string;
  DevhejnrozgdskyadiceId: string;
  FinhejnrozgdskyadlOneLink: string;
  FinhejnrozgdskyadlNaming: string;
  adhejnrozgdskyadId: string;
  firshejnrozgdskyadtParameterReceived: boolean;
  orhejnrozgdskyadanicWaiting: boolean;
  orghejnrozgdskyadnicWaitResolve: (() => void) | null;
  penhejnrozgdskyaddingSendId: string;
}

export const hejnrozgdskyadInitializationRuntime: hejnrozgdskyadInitializationRuntime = {
  pushejnrozgdskyadhToken: '',
  insthejnrozgdskyadallRef: '',
  DevhejnrozgdskyadiceId: '',
  FinhejnrozgdskyadlOneLink: '',
  FinhejnrozgdskyadlNaming: '',
  adhejnrozgdskyadId: '',
  firshejnrozgdskyadtParameterReceived: false,
  orhejnrozgdskyadanicWaiting: false,
  orghejnrozgdskyadnicWaitResolve: null,
  penhejnrozgdskyaddingSendId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function hejnrozgdskyadResetInitializationRuntime(): void {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken = '';
  hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef = '';
  hejnrozgdskyadInitializationRuntime.DevhejnrozgdskyadiceId = '';
  hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlOneLink = '';
  hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlNaming = '';
  hejnrozgdskyadInitializationRuntime.adhejnrozgdskyadId = '';
  hejnrozgdskyadInitializationRuntime.firshejnrozgdskyadtParameterReceived = false;
  hejnrozgdskyadInitializationRuntime.orhejnrozgdskyadanicWaiting = false;
  hejnrozgdskyadInitializationRuntime.orghejnrozgdskyadnicWaitResolve = null;
}

export function hejnrozgdskyadAppenndSendId(url: string, sendId: string): string {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function hejnrozgdskyadSynncPendingSendIdFromNative(): Promise<void> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AhejnrozgdskyadppInfoModule } = NativeModules;
    if (!AhejnrozgdskyadppInfoModule || typeof AhejnrozgdskyadppInfoModule.getAndClearPendingSenhejnrozgdskyaddId !== 'function') {
      return;
    }
    const sendId = await AhejnrozgdskyadppInfoModule.getAndClearPendingSenhejnrozgdskyaddId();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      hejnrozgdskyadInitializationRuntime.penhejnrozgdskyaddingSendId = sendId.trim();
    }
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function hejnrozgdskyadTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === hejnrozgdskyadLastOpenedPushExternalUrl &&
    now - hejnrozgdskyadLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    hejnrozgdskyadLastOpenedPushExternalUrl = url;
    hejnrozgdskyadLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    hejnrozgdskyadLastOpenedPushExternalUrl = '';
    hejnrozgdskyadLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function hejnrozgdskyadSynncPendingPushUrlFromNative(): Promise<void> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { AhejnrozgdskyadppInfoModule } = NativeModules;
    if (
      !AhejnrozgdskyadppInfoModule ||
      typeof AhejnrozgdskyadppInfoModule.getAndClearPendingPushUrl !== 'function'
    ) {
      return;
    }
    const pushUrl = await AhejnrozgdskyadppInfoModule.getAndClearPendingPushUrl();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await hejnrozgdskyadTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function hejnrozgdskyadGetAppIdenier(): Promise<string> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { AhejnrozgdskyadppInfoModule } = NativeModules;

    if (!AhejnrozgdskyadppInfoModule) {
      //console.log('AhejnrozgdskyadppInfoModule module not found');
      return '';
    }

    const packageName = await AhejnrozgdskyadppInfoModule.getPachejnrozgdskyadkageName();
    //console.log('Test App Identifier:', packageName);
    return packageName || '';
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting app identifier:', error);
    return '';
  }
}

export async function hejnrozgdskyadGetAppVersion(): Promise<string> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function hejnrozgdskyadGetAndroidId(): Promise<string> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function hejnrozgdskyadGetAndroidUserAAgent(): Promise<string> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { UserAhejnrozgdskyadper } = NativeModules;

    if (!UserAhejnrozgdskyadper) {
      //console.log('UserAhejnrozgdskyadper module not found');
      return '';
    }

    const userAgent: string = await UserAhejnrozgdskyadper.getAndrhejnrozgdskyadoidUserAgent();
    return userAgent || '';
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Error getting UserAgent:', error);
    return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const hejnrozgdskyadINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let hejnrozgdskyadInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function hejnrozgdskyadWaitForInitPush(timeoutMs: number): Promise<string | null> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {
    void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
    void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
    void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
    void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
    void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void hejnrozgdskyadMixSeed(3, 7);
    void hejnrozgdskyadFoldRange([1, 2, 3]);
    void hejnrozgdskyadClampSpan(5, 0, 10);

    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

      void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
      void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
      void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (hejnrozgdskyadInitPushResolver === deliver) {
        hejnrozgdskyadInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

      void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
      void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
      void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: body delivered, len:', encryptedBody.length);
      finish(encryptedBody);
    };

    const timer = setTimeout(() => {
      void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
      void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
      void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] init push waiter: timeout fired');
      finish(null);
    }, timeoutMs);

    //console.log('[PushDebug] init push waiter: registered, timeoutMs:', timeoutMs);
    hejnrozgdskyadInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function hejnrozgdskyadDeliverInitPush(encryptedBody: string): boolean {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!hejnrozgdskyadInitPushResolver) {
    //console.log('[PushDebug] init push deliver: no foreground waiter');
    return false;
  }
  const resolver = hejnrozgdskyadInitPushResolver;
  hejnrozgdskyadInitPushResolver = null;
  //console.log('[PushDebug] init push deliver: delivered to foreground waiter');
  resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function hejnrozgdskyadHandleInitPushBackground(encryptedBody: string): Promise<void> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  //console.log('[PushDebug] init push background handler: start, bodyLen:', encryptedBody.length);
  try {
    const decrypted = hejnrozgdskyadDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
      //console.log('[PushDebug] init push background handler: decrypt empty');
      return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    //console.log('[PushDebug] init push background handler: parsed', { hasRedirectUrlInitial: !!redirectUrlInitial, hasRedirectUrl: !!redirectUrl, });

    if (redirectUrlInitial) {
      const finalUrl = hejnrozgdskyadAppenndSendId(
        redirectUrlInitial,
        hejnrozgdskyadInitializationRuntime.penhejnrozgdskyaddingSendId,
      );
      await AsyncStorage.setItem(finhejnrozgdskyadKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = hejnrozgdskyadViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await hejnrozgdskyadViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      //console.log('[PushDebug] init push background handler: webview opened');
      return;
    }

    if (redirectUrl) {
      await Utils.hejnrozgdskyadSetUserBlocke(1);
      //console.log('[PushDebug] init push background handler: user blocked');
    }
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] init push background handler error:', error);
  }
}

function hejnrozgdskyadExtractInitPushBody(data: Record<string, any>): string {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of hejnrozgdskyadINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function hejnrozgdskyadWaitForPushToken(timeoutSeconds: number): Promise<string | null> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {
    void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
    void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
    void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
    void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
    void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {
      void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
      void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
      void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
      void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log(`[PushDebug] timeout waiting for FCM token after ${timeoutSeconds}s`);
      resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
        //console.log('[PushDebug] FCM token obtained:', `${token.slice(0, 20)}... (len=${token.length})`);
        await hejnrozgdskyadOnTokenReceived(token);
        resolve(token);
        return;
      }
      //console.log('[PushDebug] getToken returned null without error');
    } catch (error) {
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      //console.log('[PushDebug] getToken error:', error);
    }
  });
}

async function hejnrozgdskyadOnTokenReceived(token: string): Promise<void> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('Test Firebase: Token received:', token);
    hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken = token;
  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('Test Firebase: Error handling token:', error);
  }
}

export async function hejnrozgdskyadOnMessageRecieved(remoteMessage: any): Promise<void> {
  void initializationSharhejnrozgdskyadedObfV7HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV7SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV7ClampMod(7, 5);

  void initializationSharhejnrozgdskyadedObfV5HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV5SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV5ClampMod(7, 5);
  void initializationSharhejnrozgdskyadedObfV6HashMix('xy');
  void initializationSharhejnrozgdskyadedObfV6SumOdds([1, 3, 5]);
  void initializationSharhejnrozgdskyadedObfV6ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV3HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV3ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharObfV4HashMix('xy');
  void hejnrozgdskyadinitializationSharObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharObfV4ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);


  void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    //console.log('[PushDebug] message received:', { hasData: !!remoteMessage?.data, dataKeys: remoteMessage?.data ? Object.keys(remoteMessage.data) : [], hasNotification: !!remoteMessage?.notification, messageId: remoteMessage?.messageId ?? null,});

    if (!remoteMessage || !remoteMessage.data) {
      //console.log('[PushDebug] message ignored: no data payload');
      return;
    }

    if (remoteMessage.notification) {
      //console.log('[PushDebug] visible notification:', remoteMessage.notification);
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = hejnrozgdskyadExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
      //console.log('[PushDebug] init push body extracted, len:', initPushBody.length);
      const delivered = hejnrozgdskyadDeliverInitPush(initPushBody);
      if (!delivered) {
        //console.log('[PushDebug] no foreground waiter, handling in background');
        await hejnrozgdskyadHandleInitPushBackground(initPushBody);
      }
      return;
    }

    //console.log('[PushDebug] no eb/encrypted_body in data, checking sendid');

    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
      //console.log('[PushDebug] sendid received:', sendId);
      hejnrozgdskyadInitializationRuntime.penhejnrozgdskyaddingSendId = sendId;
      const finalUrl = await AsyncStorage.getItem(finhejnrozgdskyadKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = hejnrozgdskyadAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = hejnrozgdskyadViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await hejnrozgdskyadViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix('xy');
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    //console.log('[PushDebug] message handler error:', error);
  }
}

/** Alias kept for the background message handler registered in index.js. */
export const hejnrozgdskyadabppOnMessageRecieved = hejnrozgdskyadOnMessageRecieved;

function hejnrozgdskyadMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function hejnrozgdskyadFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function hejnrozgdskyadClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function hejnrozgdskyadinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function hejnrozgdskyadinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function hejnrozgdskyadinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function hejnrozgdskyadinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function hejnrozgdskyadinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function hejnrozgdskyadinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function hejnrozgdskyadinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function hejnrozgdskyadinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function hejnrozgdskyadinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function hejnrozgdskyadinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function hejnrozgdskyadinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function hejnrozgdskyadinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharhejnrozgdskyadedObfV6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initializationSharhejnrozgdskyadedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharhejnrozgdskyadedObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharhejnrozgdskyadedObfV5HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharhejnrozgdskyadedObfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function initializationSharhejnrozgdskyadedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function initializationSharhejnrozgdskyadedObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function initializationSharhejnrozgdskyadedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function initializationSharhejnrozgdskyadedObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

