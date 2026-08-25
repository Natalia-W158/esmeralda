import { useEffect, useState } from 'react';
import Esmeralda from './components/Esmeralda';
import WelcomeBubble from './components/WelcomeBubble';
import CardOverlay from './components/CardOverlay';
import { cards } from './data/cards';

export default function App() {
  const [shuffling, setShuffling] = useState(false);
  const [overlayCard, setOverlayCard] = useState(null);

  useEffect(() => {
    if (!shuffling) return;
    const timer = setTimeout(() => {
      const card = cards[Math.floor(Math.random() * cards.length)];
      setShuffling(false);
      setOverlayCard(card);
    }, 1450);
    return () => clearTimeout(timer);
  }, [shuffling]);

  const handleShuffle = () => {
    if (shuffling) return;
    setShuffling(true);
  };

  return (
    <div className="app">
      <div className="app__sky">
        <WelcomeBubble />
        <Esmeralda shuffling={shuffling} />
      </div>

      <div className="app__content">
        <div className="app__intro">
          <span className="app__eyebrow">☾ Esmeralda</span>
          <h1 className="app__title">Was hat der heutige Tag für dich bereit?</h1>
          <p className="app__lead">
            Lass die Karten sprechen. Esmeralda mischt das Deck der Großen Arkana und legt dir eine Tageskarte.
          </p>
        </div>

        <button className="app__shuffle" onClick={handleShuffle} disabled={shuffling}>
          {shuffling ? 'Esmeralda mischt …' : 'Karten mischen'}
        </button>
      </div>

      {overlayCard && (
        <CardOverlay card={overlayCard} onClose={() => setOverlayCard(null)} />
      )}
    </div>
  );
}
