export default function TarotCard({ card, className = '' }) {
  return (
    <div className={`tarot-card ${className}`}>
      <div className="tarot-card__roman">{card.roman}</div>
      <svg viewBox="0 0 180 220" className="tarot-card__art" dangerouslySetInnerHTML={{ __html: card.svg }} />
      <div className="tarot-card__foot">
        <h3 className="tarot-card__title">{card.title}</h3>
        <p className="tarot-card__keywords" style={{ color: card.accent }}>{card.keywords}</p>
      </div>
    </div>
  );
}
