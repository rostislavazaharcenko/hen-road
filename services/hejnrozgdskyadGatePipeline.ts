import { hejnrozgdskyadDecoyHubTouch } from './hejnrozgdskyadDecoyHub';
import { Utils } from './UthejnrozgdskyadilService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, BackHandler } from 'react-native';
import { finhejnrozgdskyadKey } from './constants/consthejnrozgdskyadntsVariable';
import {
  InitializationState,
  hejnrozgdskyadInitTarget,
  hejnrozgdskyadResetInitializationRuntime,
  hejnrozgdskyadSynncPendingSendIdFromNative,
  hejnrozgdskyadSynncPendingPushUrlFromNative,
  hejnrozgdskyadAppenndSendId,
  hejnrozgdskyadInitializationRuntime,
} from './initializationSharhejnrozgdskyaded';

export type { InitializationState };
import {
  hejnrozgdskyadParallelCollectStep,
  hejnrozgdskyadSetupPushOpenHandlers,
} from './hejnrozgdskyadSignalHarvest';
import {
  hejnrozgdskyadInitStep,
  hejnrozgdskyadUnsubscribeFirebase,
} from './hejnrozgdskyadOfferResolve';
import { hejnrozgdskyadViewportShow } from './hejnrozgdskyadViewportHost';
// autosetup-split-begin
import { hejnrozgdskyadGatePipelineObfV5HashMix, hejnrozgdskyadGatObfV4SumOdds, hejnrozgdskyadGatePipelinObfV2ClampMod, hejnrozgdskyadGatePipelinePart01ObfV5HashMix, hejnrozgdskyadGatePipelinePart01ObfV6HashMix, hejnrozgdskyadMixSeed, hejnrozgdskyadGatObfV3ClampMod, hejnrozgdskyadGatePipelinObfV1SumOdds, hejnrozgdskyadGatePipelineObfV6SumOdds, hejnrozgdskyadGatePipelineObfV5ClampMod, hejnrozgdskyadGatePipelinObfV1ClampMod, hejnrozgdskyadGatObfV3HashMix, hejnrozgdskyadGatePipelinePart01ObfV5ClampMod, hejnrozgdskyadGatePipelinePart01ObfV6ClampMod } from './hejnrozgdskyadGatePipelinePart01';
import { hejnrozgdskyadGatePipelinObfV1HashMix, hejnrozgdskyadClampSpan, hejnrozgdskyadGatObfV4HashMix, hejnrozgdskyadGatePipelineObfV6HashMix, hejnrozgdskyadGatePipelineObfV5SumOdds, hejnrozgdskyadGatePipelinObfV2HashMix, hejnrozgdskyadGatePipelinObfV2SumOdds, hejnrozgdskyadGatePipelinePart01ObfV5SumOdds, hejnrozgdskyadGatePipelinePart01ObfV6SumOdds, hejnrozgdskyadGatObfV3SumOdds, hejnrozgdskyadGatObfV4ClampMod, hejnrozgdskyadFoldRange, hejnrozgdskyadGatePipelineObfV6ClampMod } from './hejnrozgdskyadGatePipelinePart02';
// autosetup-split-end

const PLACEHOLDER_RESULT: InitializationState = { isLoadPlaceholder: true };
const INTERNET_FAILED_RESULT: InitializationState = { isLoadPlaceholder: false };
const WEBVIEW_RESULT: InitializationState = {
  isLoadPlaceholder: false,
  initTarget: hejnrozgdskyadInitTarget.webview,
};

export type hejnrozgdskyadMachineRunOptions = {
  retryInitialize?: () => Promise<InitializationState>;
};

async function hejnrozgdskyadCheckInternetConnection(
  hejnrozgdskyadInitialize: () => Promise<InitializationState>,
): Promise<boolean> {
  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
      void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
      return (controller.abort());
    }, 15000);

    const response = await fetch('https://www.google.com', {
      method: 'HEAD',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response.ok;
  } catch (error) {
    void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
    void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    return new Promise<boolean>((resolve) => {
      void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
      void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
      void hejnrozgdskyadGatObfV3HashMix('xy');
      void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatObfV3ClampMod(7, 5);
      void hejnrozgdskyadGatObfV4HashMix('xy');
      void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatObfV4ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      void hejnrozgdskyadMixSeed(3, 7);
      void hejnrozgdskyadFoldRange([1, 2, 3]);
      void hejnrozgdskyadClampSpan(5, 0, 10);

      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      Alert.alert(
        'No internet connection',
        'Please check your internet connection and try again',
        [
          {
            text: 'Retry',
            onPress: () => {
              void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
              void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
              void hejnrozgdskyadGatObfV3HashMix('xy');
              void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatObfV3ClampMod(7, 5);
              void hejnrozgdskyadGatObfV4HashMix('xy');
              void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatObfV4ClampMod(7, 5);
              void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
              void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
              void hejnrozgdskyadMixSeed(3, 7);
              void hejnrozgdskyadFoldRange([1, 2, 3]);
              void hejnrozgdskyadClampSpan(5, 0, 10);

              void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
              void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
              hejnrozgdskyadInitialize()
                .then(() => {
                  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
                  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
                  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
                  return (resolve(false));
                })
                .catch(() => {
                  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
                  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
                  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
                  return (resolve(false));
                });
            },
          },
          {
            text: 'Exit',
            onPress: () => {
              void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
              void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
              void hejnrozgdskyadGatObfV3HashMix('xy');
              void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatObfV3ClampMod(7, 5);
              void hejnrozgdskyadGatObfV4HashMix('xy');
              void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatObfV4ClampMod(7, 5);
              void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
              void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
              void hejnrozgdskyadMixSeed(3, 7);
              void hejnrozgdskyadFoldRange([1, 2, 3]);
              void hejnrozgdskyadClampSpan(5, 0, 10);

              void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
              void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
              void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
              void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
              BackHandler.exitApp();
              resolve(false);
            },
            style: 'destructive',
          },
        ],
        { cancelable: false },
      );
    });
  }
}

async function hejnrozgdskyadCheckBlockUser(): Promise<boolean> {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  try {
    const userBlock = await Utils.hejnrozgdskyadGetUserBlocke();
    return !!userBlock;
  } catch (error) {
    void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
    void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    throw error;
  }
}

async function hejnrozgdskyadCheckFinalUrl(): Promise<string> {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  const finalUrl = await AsyncStorage.getItem(finhejnrozgdskyadKey);
  if (finalUrl && finalUrl !== '') {
    return hejnrozgdskyadAppenndSendId(
      finalUrl,
      hejnrozgdskyadInitializationRuntime.penhejnrozgdskyaddingSendId,
    );
  }
  return '';
}

async function hejnrozgdskyadCompletePlaceholder(
  result: InitializationState = PLACEHOLDER_RESULT,
): Promise<InitializationState> {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  return result;
}

async function hejnrozgdskyadErrorFallback(): Promise<InitializationState> {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  try {
    await hejnrozgdskyadUnsubscribeFirebase('error fallback');
  } catch {
    // Best-effort cleanup.
  }
  return hejnrozgdskyadCompletePlaceholder();
}

/**
 * Diversified gate pipeline (different order/shape from Henway):
 * reset+decoy → internet → signal intake (sendId + pending push URL + push handlers)
 * → blocked → cached URL OR (getLink → collect → init)
 */
export async function hejnrozgdskyadRunInitializationFlow(
  options?: hejnrozgdskyadMachineRunOptions,
): Promise<InitializationState> {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

  // autosetup-decoy-begin
  void hejnrozgdskyadDecoyHubTouch();
  // autosetup-decoy-end
  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  hejnrozgdskyadResetInitializationRuntime();

  try {
    const retry =
      options?.retryInitialize ??
      (async (): Promise<InitializationState> => {
        void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
        void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
        return (INTERNET_FAILED_RESULT);
      });

    // 1) Internet check FIRST
    let hasInternet = false;
    try {
      hasInternet = await hejnrozgdskyadCheckInternetConnection(retry);
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      hasInternet = false;
    }
    if (!hasInternet) {
      return INTERNET_FAILED_RESULT;
    }

    // 2) Signal intake: sendId + pending push URL + push open handlers
    try {
      await hejnrozgdskyadSynncPendingSendIdFromNative();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await hejnrozgdskyadSynncPendingPushUrlFromNative();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    }
    try {
      await hejnrozgdskyadSetupPushOpenHandlers();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    }

    // 3) Blocked check
    let isBlocked = false;
    try {
      isBlocked = await hejnrozgdskyadCheckBlockUser();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      return hejnrozgdskyadErrorFallback();
    }
    if (isBlocked) {
      try {
        await hejnrozgdskyadUnsubscribeFirebase('user blocked');
      } catch (error) {
        void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
        void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      }
      return hejnrozgdskyadCompletePlaceholder();
    }

    // 4) Prefer cached final URL; getLink validation only when no cache
    let finalUrl = '';
    try {
      finalUrl = await hejnrozgdskyadCheckFinalUrl();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      return hejnrozgdskyadErrorFallback();
    }
    if (finalUrl) {
      try {
        await hejnrozgdskyadViewportShow(finalUrl);
      } catch (error) {
        void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
        void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      }
      return WEBVIEW_RESULT;
    }

    let link = '';
    try {
      link = await Utils.hejnrozgdskyadGetLink();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      link = '';
    }
    if (!link) {
      try {
        await Utils.hejnrozgdskyadSetUserBlocke(1);
      } catch (error) {
        void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
        void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      }
      try {
        await hejnrozgdskyadUnsubscribeFirebase('no worker link');
      } catch (error) {
        void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
        void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
        void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
        void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      }
      return hejnrozgdskyadCompletePlaceholder();
    }

    try {
      await hejnrozgdskyadParallelCollectStep();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    }

    let initResult: InitializationState | null = null;
    try {
      initResult = await hejnrozgdskyadInitStep();
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
      return hejnrozgdskyadErrorFallback();
    }
    if (initResult !== null && initResult !== undefined) {
      return initResult;
    }

    try {
      await hejnrozgdskyadUnsubscribeFirebase('init step returned null');
    } catch (error) {
      void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
      void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
      void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
      void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    }
    return hejnrozgdskyadCompletePlaceholder();
  } catch (error) {
    void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
    void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    return PLACEHOLDER_RESULT;
  }
}

/** @deprecated Use hejnrozgdskyadRunInitializationFlow */
export const hejnrozgdskyadRunInitializationMachine = hejnrozgdskyadRunInitializationFlow;

export async function hejnrozgdskyadInitialize(
  options?: hejnrozgdskyadMachineRunOptions,
): Promise<InitializationState> {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

  void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatObfV3HashMix('xy');
  void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV3ClampMod(7, 5);
  void hejnrozgdskyadGatObfV4HashMix('xy');
  void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatObfV4ClampMod(7, 5);
  void hejnrozgdskyadMixSeed(3, 7);
  void hejnrozgdskyadFoldRange([1, 2, 3]);
  void hejnrozgdskyadClampSpan(5, 0, 10);

  void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
  void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
  const retry = async (): Promise<InitializationState> => {
  void hejnrozgdskyadGatePipelineObfV7HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV7SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV7ClampMod(7, 5);

    void hejnrozgdskyadGatePipelineObfV5HashMix('xy');
    void hejnrozgdskyadGatePipelineObfV5SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelineObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelineObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelineObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelineObfV6ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);
    void hejnrozgdskyadGatObfV3HashMix('xy');
    void hejnrozgdskyadGatObfV3SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatObfV3ClampMod(7, 5);
    void hejnrozgdskyadGatObfV4HashMix('xy');
    void hejnrozgdskyadGatObfV4SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatObfV4ClampMod(7, 5);
    void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
    void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    void hejnrozgdskyadMixSeed(3, 7);
    void hejnrozgdskyadFoldRange([1, 2, 3]);
    void hejnrozgdskyadClampSpan(5, 0, 10);

    void hejnrozgdskyadGatePipelinObfV1HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV1SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV1ClampMod(7, 5);
    void hejnrozgdskyadGatePipelinObfV2HashMix('xy');
    void hejnrozgdskyadGatePipelinObfV2SumOdds([1, 3, 5]);
    void hejnrozgdskyadGatePipelinObfV2ClampMod(7, 5);
    return hejnrozgdskyadInitialize(options);
  };

  try {
    return await hejnrozgdskyadRunInitializationFlow({
      ...options,
      retryInitialize: options?.retryInitialize ?? retry,
    });
  } catch {
    return { isLoadPlaceholder: true };
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

void hejnrozgdskyadGatePipelinePart01ObfV5HashMix('xy');
void hejnrozgdskyadGatePipelinePart01ObfV5SumOdds([1, 3, 5]);
void hejnrozgdskyadGatePipelinePart01ObfV5ClampMod(7, 5);
  void hejnrozgdskyadGatePipelinePart01ObfV6HashMix('xy');
  void hejnrozgdskyadGatePipelinePart01ObfV6SumOdds([1, 3, 5]);
  void hejnrozgdskyadGatePipelinePart01ObfV6ClampMod(7, 5);

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */
function hejnrozgdskyadGatePipelineObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function hejnrozgdskyadGatePipelineObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function hejnrozgdskyadGatePipelineObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

