import { useState } from 'react';
import TarotCard from './TarotCard';
import ShareSheet from './ShareSheet';

export default function CardOverlay({ card, onClose }) {
  const [shareOpen, setShareOpen] = useState(false);

  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={`Tageskarte: ${card.title}`}>
      <div className="overlay__backdrop" onClick={onClose} />
      <div className="overlay__panel">
        <button className="overlay__close" onClick={onClose} aria-label="Schließen">×</button>
        <span className="overlay__eyebrow">Deine Tageskarte</span>
        <div className="overlay__body">
          <TarotCard card={card} className="tarot-card--overlay" />
          <p className="overlay__meaning">{card.meaning}</p>
          <button className="overlay__share" onClick={() => setShareOpen(true)}>
            <svg viewBox="0 0 24 24" className="overlay__share-icon" aria-hidden="true">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.6" y1="10.5" x2="15.4" y2="6.5" />
              <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
            </svg>
            Tageskarte teilen
          </button>
        </div>
      </div>

      {shareOpen && <ShareSheet card={card} onClose={() => setShareOpen(false)} />}
    </div>
  );
}
