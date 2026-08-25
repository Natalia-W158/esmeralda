import { useEffect, useState } from 'react';

const VISIBLE_MS = 4200;
const FADE_MS = 450;

export default function WelcomeBubble({ text = 'Willkommen, du spirituelles Wesen.' }) {
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
        <svg className="welcome-bubble__tail" viewBox="0 0 34 36" width="26" height="32">
          <path d="M9 1 C15 13 15 25 13 35 C25 25 27 13 21 1 Z" />
        </svg>
        <span className="welcome-bubble__text">{text}</span>
      </div>
    </div>
  );
}
