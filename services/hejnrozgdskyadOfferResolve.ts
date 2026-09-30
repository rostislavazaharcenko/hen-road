import {
  Utils,
  hejnrozgdskyadSendInitPayload,
  hejnrozgdskyadNormalizeWorkerBaseUrl,
} from './UthejnrozgdskyadilService';
import {
  hejnrozgdskyadEncrypt as cryptoEncrypt,
  hejnrozgdskyadDecrypt as cryptoDecrypt,
} from './CryphejnrozgdskyadtoService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finhejnrozgdskyadKey } from './constants/consthejnrozgdskyadntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  hejnrozgdskyadInitTarget,
  hejnrozgdskyadAppenndSendId,
  hejnrozgdskyadGetAndroidId,
  hejnrozgdskyadGetAndroidUserAAgent,
  hejnrozgdskyadGetAppIdenier,
  hejnrozgdskyadGetAppVersion,
  hejnrozgdskyadInitializationRuntime,
} from './initializationSharhejnrozgdskyaded';
import { hejnrozgdskyadViewportShow } from './hejnrozgdskyadViewportHost';
// autosetup-split-begin
import { hejnrozgdskyadOfferResolvObfV1HashMix, hejnrozgdskyadMixSeed, hejnrozgdskyadOffObfV3SumOdds, hejnrozgdskyadOffObfV4SumOdds, hejnrozgdskyadOfferResolvObfV2HashMix, hejnrozgdskyadOfferResolvObfV1ClampMod, hejnrozgdskyadFoldRange, hejnrozgdskyadOffObfV3ClampMod, hejnrozgdskyadOffObfV4ClampMod, hejnrozgdskyadOfferResolvObfV2ClampMod, hejnrozgdskyadOfferResolvObfV2SumOdds, hejnrozgdskyadOffObfV3HashMix, hejnrozgdskyadOffObfV4HashMix, hejnrozgdskyadOfferResolvObfV1SumOdds, hejnrozgdskyadClampSpan, hejnrozgdskyadOfferResolveObfV5HashMix, hejnrozgdskyadOfferResolveObfV5SumOdds, hejnrozgdskyadOfferResolveObfV5ClampMod, hejnrozgdskyadOfferResolveObfV6HashMix, hejnrozgdskyadOfferResolveObfV6SumOdds, hejnrozgdskyadOfferResolveObfV6ClampMod } from './hejnrozgdskyadOfferResolvePart01';
// autosetup-split-end

export async function hejnrozgdskyadInitStep(): Promise<InitializationState | null> {
  void hejnrozgdskyadOfferResolveObfV7HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV7ClampMod(7, 5);

  void hejnrozgdskyadOfferResolveObfV5HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV5ClampMod(7, 5);
  void hejnrozgdskyadOfferResolveObfV6HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV6ClampMod(7, 5);
  void hejnrozgdskyadOffObfV3HashMix('xy');
  void hejnrozgdskyadOffObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadOffObfV3ClampMod(7, 5);
  void hejnrozgdskyadOffObfV4HashMix('xy');
  void hejnrozgdskyadOffObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadOffObfV4ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.hejnrozgdskyadGetLink();
    if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const appId = await hejnrozgdskyadGetAppIdenier();
    const userAgent = await hejnrozgdskyadGetAndroidUserAAgent();
    const androidId = await hejnrozgdskyadGetAndroidId();
    const appVersion = await hejnrozgdskyadGetAppVersion();
    const workerBaseUrl = hejnrozgdskyadNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = hejnrozgdskyadInitializationRuntime.DevhejnrozgdskyadiceId;

    const namingValue = hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlNaming;

    const cookieRaw = [
      appId ?? '',
      payloadDeviceId ?? '',
      hejnrozgdskyadInitializationRuntime.adhejnrozgdskyadId ?? '',
      hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken ?? '',
      hejnrozgdskyadInitializationRuntime.insthejnrozgdskyadallRef ?? '',
      hejnrozgdskyadInitializationRuntime.FinhejnrozgdskyadlOneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ].join('|');

    const encryptedCookie = cryptoEncrypt(cookieRaw);
    const dataValue = encodeURIComponent(encryptedCookie);
    const cookieHeader = `data=${dataValue}`;

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}`;

    const encryptedBody = encodeURIComponent(cryptoEncrypt(bodyPlain));

    try {
      const responseText = await hejnrozgdskyadSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        body: encryptedBody,
      });

      if (!responseText) {
        await Utils.hejnrozgdskyadSetUserBlocke(1);
        await hejnrozgdskyadUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await hejnrozgdskyadOnInitResponse(responseText);
    } catch (rpcError) {
      void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
      void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
      void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
      void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
      await hejnrozgdskyadUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
    void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
    void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
    void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
    await hejnrozgdskyadUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function hejnrozgdskyadOnInitResponse(responseText: string): Promise<InitializationState> {
  void hejnrozgdskyadOfferResolveObfV7HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV7ClampMod(7, 5);

  void hejnrozgdskyadOfferResolveObfV5HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV5ClampMod(7, 5);
  void hejnrozgdskyadOfferResolveObfV6HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV6ClampMod(7, 5);
  void hejnrozgdskyadOffObfV3HashMix('xy');
  void hejnrozgdskyadOffObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadOffObfV3ClampMod(7, 5);
  void hejnrozgdskyadOffObfV4HashMix('xy');
  void hejnrozgdskyadOffObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadOffObfV4ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
    if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = JSON.parse(decrytedResponse);

      redirectUrl = obj.redirectUrl || null;
      redirectUrlInitial = obj.redirectUrlInitial || null;
      errorField = obj.error || null;
      blockUser = !!obj.blockUser;
    } catch (parseError) {
      void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
      void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
      void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
      void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.hejnrozgdskyadSetUserBlocke(1);
      await hejnrozgdskyadUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.hejnrozgdskyadSetUserBlocke(1);
      await hejnrozgdskyadUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finhejnrozgdskyadKey, redirectUrlInitial);

      const finalUrl = hejnrozgdskyadAppenndSendId(
        redirectUrlInitial,
        hejnrozgdskyadInitializationRuntime.penhejnrozgdskyaddingSendId,
      );

      const success = await hejnrozgdskyadViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: hejnrozgdskyadInitTarget.webview,
      };
    }

    await hejnrozgdskyadUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: hejnrozgdskyadInitTarget.game,
    };
  } catch (error) {
    void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
    void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
    void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
    void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
    await hejnrozgdskyadUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function hejnrozgdskyadUnsubscribeFirebase(reason?: string): Promise<void> {
  void hejnrozgdskyadOfferResolveObfV7HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV7ClampMod(7, 5);

  void hejnrozgdskyadOfferResolveObfV5HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV5ClampMod(7, 5);
  void hejnrozgdskyadOfferResolveObfV6HashMix('xy');
  void hejnrozgdskyadOfferResolveObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolveObfV6ClampMod(7, 5);
  void hejnrozgdskyadOffObfV3HashMix('xy');
  void hejnrozgdskyadOffObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadOffObfV3ClampMod(7, 5);
  void hejnrozgdskyadOffObfV4HashMix('xy');
  void hejnrozgdskyadOffObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadOffObfV4ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
  void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
  void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken = '';
  } catch (error) {
    void hejnrozgdskyadOfferResolvObfV1HashMix('xy');
    void hejnrozgdskyadOfferResolvObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadOfferResolvObfV1ClampMod(7, 5);
    void hejnrozgdskyadOfferResolvObfV2HashMix('xy');
    void hejnrozgdskyadOfferResolvObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadOfferResolvObfV2ClampMod(7, 5);
    hejnrozgdskyadInitializationRuntime.pushejnrozgdskyadhToken = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */
function hejnrozgdskyadOfferResolveObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadOfferResolveObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadOfferResolveObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

