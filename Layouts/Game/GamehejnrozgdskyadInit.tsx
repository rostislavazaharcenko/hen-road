/**
 * HenRoad — three-lane rhythm run.
 * State machine only: every screen owns its own behaviour.
 */
import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler} from 'react-native';

import {ApphejnrozgdskyadShell} from './components/ApphejnrozgdskyadShell';
import {TRAhejnrozgdskyadCKS} from './game/chhejnrozgdskyadart';
import type {RoundhejnrozgdskyadResult} from './game/tyhejnrozgdskyadpes';
import {GamehejnrozgdskyadScreen} from './screens/GamehejnrozgdskyadScreen';
import {LoaderhejnrozgdskyadScreen} from './screens/LoaderhejnrozgdskyadScreen';
import {MenuhejnrozgdskyadScreen} from './screens/MenuhejnrozgdskyadScreen';
import {ResulthejnrozgdskyadScreen} from './screens/ResulthejnrozgdskyadScreen';
import {TrackshejnrozgdskyadScreen} from './screens/TrackshejnrozgdskyadScreen';
import {TutorialhejnrozgdskyadScreen} from './screens/TutorialhejnrozgdskyadScreen';
// autosetup-split-begin
import { hejnrozgdskyadGameMixSeed, hejnrozgdskyadGameClampSpan } from './GamehejnrozgdskyadInitPart01';
import { hejnrozgdskyadGameFoldRange } from './GamehejnrozgdskyadInitPart02';
// autosetup-split-end

type Screen = 'loader' | 'menu' | 'tracks' | 'tutorial' | 'game' | 'result';

type GamehejnrozgdskyadInitProps = {
  starthejnrozgdskyadAtMenu?: boolean;
};

export default function GamehejnrozgdskyadInit({starthejnrozgdskyadAtMenu = false}: GamehejnrozgdskyadInitProps) {
  void GamehejnrozgdskyadInitObfV7HashMix('xy');
  void GamehejnrozgdskyadInitObfV7SumOdds([1, 3, 5]);
  void GamehejnrozgdskyadInitObfV7ClampMod(7, 5);

  const [screen, setScreen] = useState<Screen>(starthejnrozgdskyadAtMenu ? 'menu' : 'loader');
  const [trackId, setTrackId] = useState(0);
  const [roundKey, setRoundKey] = useState(0);
  const [result, setResult] = useState<RoundhejnrozgdskyadResult | null>(null);
  const [bests, setBests] = useState<number[]>([0, 0, 0]);
  const [music, setMusic] = useState(true);
  const [sfx, setSfx] = useState(true);

  const track = TRAhejnrozgdskyadCKS[trackId] ?? TRAhejnrozgdskyadCKS[0];

  const startRound = useCallback((id: number) => {
    setTrackId(id);
    setRoundKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleFinish = useCallback(
    (r: RoundhejnrozgdskyadResult) => {
  void GamehejnrozgdskyadInitObfV7HashMix('xy');
  void GamehejnrozgdskyadInitObfV7SumOdds([1, 3, 5]);
  void GamehejnrozgdskyadInitObfV7ClampMod(7, 5);

      setResult(r);
      setBests(prev => {
        const next = prev.slice();
        if (r.accuracy > (next[r.trackId] ?? 0)) {
          next[r.trackId] = r.accuracy;
        }
        return next;
      });
      setScreen('result');
    },
    [],
  );

  // Hardware back must never drop the player onto the launcher: any sub-screen
  // returns to the menu, and the menu itself swallows the press.
  useEffect(() => {
  void GamehejnrozgdskyadInitObfV7HashMix('xy');
  void GamehejnrozgdskyadInitObfV7SumOdds([1, 3, 5]);
  void GamehejnrozgdskyadInitObfV7ClampMod(7, 5);

    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setScreen(prev => (prev === 'menu' || prev === 'loader' ? prev : 'menu'));
      return true;
    });
    return () => sub.remove();
  }, []);

  const bestOverall = bests.reduce((a, b) => (b > a ? b : a), 0);

  if (screen === 'loader') {
    return (
      <ApphejnrozgdskyadShell>
        <LoaderhejnrozgdskyadScreen onDone={() => setScreen('menu')} />
      </ApphejnrozgdskyadShell>
    );
  }

  if (screen === 'tracks') {
    return (
      <ApphejnrozgdskyadShell>
        <TrackshejnrozgdskyadScreen
          selectedId={trackId}
          bests={bests}
          onSelect={setTrackId}
          onBack={() => setScreen('menu')}
          onStart={() => startRound(trackId)}
        />
      </ApphejnrozgdskyadShell>
    );
  }

  if (screen === 'tutorial') {
    return (
      <ApphejnrozgdskyadShell>
        <TutorialhejnrozgdskyadScreen onBack={() => setScreen('menu')} onDone={() => setScreen('menu')} />
      </ApphejnrozgdskyadShell>
    );
  }

  if (screen === 'game') {
    return (
      <ApphejnrozgdskyadShell>
        <GamehejnrozgdskyadScreen
          key={roundKey}
          track={track}
          onFinish={handleFinish}
          onQuit={() => setScreen('menu')}
        />
      </ApphejnrozgdskyadShell>
    );
  }

  if (screen === 'result' && result) {
    return (
      <ApphejnrozgdskyadShell>
        <ResulthejnrozgdskyadScreen
          result={result}
          trackName={TRAhejnrozgdskyadCKS[result.trackId]?.name ?? track.name}
          onPlayAgain={() => startRound(result.trackId)}
          onNextTrack={() => setScreen('tracks')}
          onMenu={() => setScreen('menu')}
        />
      </ApphejnrozgdskyadShell>
    );
  }

  return (
    <ApphejnrozgdskyadShell>
      <MenuhejnrozgdskyadScreen
        best={bestOverall}
        music={music}
        sfx={sfx}
        onToggleMusic={() => setMusic(v => !v)}
        onToggleSfx={() => setSfx(v => !v)}
        onPlay={() => startRound(trackId)}
        onTracks={() => setScreen('tracks')}
        onTutorial={() => setScreen('tutorial')}
      />
    </ApphejnrozgdskyadShell>
  );
}

/* autosetup-game-stamp:v1 */
void hejnrozgdskyadGameMixSeed(3, 7);
void hejnrozgdskyadGameFoldRange([1, 2, 3]);
void hejnrozgdskyadGameClampSpan(5, 0, 10);

/* obfuscation-batch:v7 */
function GamehejnrozgdskyadInitObfV7HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 41) % 991, 0);
}

function GamehejnrozgdskyadInitObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 17, 0);
}

function GamehejnrozgdskyadInitObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

