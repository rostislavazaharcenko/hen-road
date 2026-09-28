/**
 * HenRoad — three-lane rhythm run.
 * State machine only: every screen owns its own behaviour.
 */
import React, {useCallback, useEffect, useState} from 'react';
import {BackHandler} from 'react-native';

import {AppShell} from './src/components/AppShell';
import {TRACKS} from './src/game/chart';
import type {RoundResult} from './src/game/types';
import {GameScreen} from './src/screens/GameScreen';
import {LoaderScreen} from './src/screens/LoaderScreen';
import {MenuScreen} from './src/screens/MenuScreen';
import {ResultScreen} from './src/screens/ResultScreen';
import {TracksScreen} from './src/screens/TracksScreen';
import {TutorialScreen} from './src/screens/TutorialScreen';

type Screen = 'loader' | 'menu' | 'tracks' | 'tutorial' | 'game' | 'result';

export default function App() {
  const [screen, setScreen] = useState<Screen>('loader');
  const [trackId, setTrackId] = useState(0);
  const [roundKey, setRoundKey] = useState(0);
  const [result, setResult] = useState<RoundResult | null>(null);
  const [bests, setBests] = useState<number[]>([0, 0, 0]);
  const [music, setMusic] = useState(true);
  const [sfx, setSfx] = useState(true);

  const track = TRACKS[trackId] ?? TRACKS[0];

  const startRound = useCallback((id: number) => {
    setTrackId(id);
    setRoundKey(k => k + 1);
    setScreen('game');
  }, []);

  const handleFinish = useCallback(
    (r: RoundResult) => {
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
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      setScreen(prev => (prev === 'menu' || prev === 'loader' ? prev : 'menu'));
      return true;
    });
    return () => sub.remove();
  }, []);

  const bestOverall = bests.reduce((a, b) => (b > a ? b : a), 0);

  if (screen === 'loader') {
    return (
      <AppShell>
        <LoaderScreen onDone={() => setScreen('menu')} />
      </AppShell>
    );
  }

  if (screen === 'tracks') {
    return (
      <AppShell>
        <TracksScreen
          selectedId={trackId}
          bests={bests}
          onSelect={setTrackId}
          onBack={() => setScreen('menu')}
          onStart={() => startRound(trackId)}
        />
      </AppShell>
    );
  }

  if (screen === 'tutorial') {
    return (
      <AppShell>
        <TutorialScreen onBack={() => setScreen('menu')} onDone={() => setScreen('menu')} />
      </AppShell>
    );
  }

  if (screen === 'game') {
    return (
      <AppShell>
        <GameScreen
          key={roundKey}
          track={track}
          onFinish={handleFinish}
          onQuit={() => setScreen('menu')}
        />
      </AppShell>
    );
  }

  if (screen === 'result' && result) {
    return (
      <AppShell>
        <ResultScreen
          result={result}
          trackName={TRACKS[result.trackId]?.name ?? track.name}
          onPlayAgain={() => startRound(result.trackId)}
          onNextTrack={() => setScreen('tracks')}
          onMenu={() => setScreen('menu')}
        />
      </AppShell>
    );
  }

  return (
    <AppShell>
      <MenuScreen
        best={bestOverall}
        music={music}
        sfx={sfx}
        onToggleMusic={() => setMusic(v => !v)}
        onToggleSfx={() => setSfx(v => !v)}
        onPlay={() => startRound(trackId)}
        onTracks={() => setScreen('tracks')}
        onTutorial={() => setScreen('tutorial')}
      />
    </AppShell>
  );
}
