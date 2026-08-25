import { useEffect, useState } from 'react';

const VISIBLE_MS = 4200;
const FADE_MS = 450;

export default function WelcomeBubble() {
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    const toVisible = requestAnimationFrame(() => setPhase('visible'));
    const toLeaving = setTimeout(() => setPhase('leaving'), VISIBLE_MS);
    const toGone = setTimeout(() => setPhase('gone'), VISIBLE_MS + FADE_MS);
    return () => {
      cancelAnimationFrame(toVisible);
      clearTimeout(toLeaving);
      clearTimeout(toGone);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className="welcome-bubble-slot">
      <div className={`welcome-bubble welcome-bubble--${phase}`}>
        Willkommen, du spirituelles Wesen.
        <span className="welcome-bubble__tail" />
      </div>
    </div>
  );
}
