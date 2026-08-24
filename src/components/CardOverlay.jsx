import TarotCard from './TarotCard';

export default function CardOverlay({ card, onClose }) {
  return (
    <div className="overlay" role="dialog" aria-modal="true" aria-label={`Tageskarte: ${card.title}`}>
      <div className="overlay__backdrop" onClick={onClose} />
      <div className="overlay__panel">
        <button className="overlay__close" onClick={onClose} aria-label="Schließen">×</button>
        <span className="overlay__eyebrow">Deine Tageskarte</span>
        <div className="overlay__body">
          <TarotCard card={card} className="tarot-card--overlay" />
          <p className="overlay__meaning">{card.meaning}</p>
        </div>
      </div>
    </div>
  );
}
