import { useEffect, useState } from 'react';
import Esmeralda from './components/Esmeralda';
import WelcomeBubble from './components/WelcomeBubble';
import CardOverlay from './components/CardOverlay';
import AccountMenu from './components/AccountMenu';
import LoginButton from './components/LoginButton';
import CookieNotice from './components/CookieNotice';
import { useAuth } from './contexts/AuthContext';
import { addHistoryEntry } from './lib/history';
import { cards } from './data/cards';

const DEFAULT_GREETING = 'Willkommen, du spirituelles Wesen.';

export default function App() {
  const { user } = useAuth();
  const [shuffling, setShuffling] = useState(false);
  const [overlayCard, setOverlayCard] = useState(null);
  const [bubble, setBubble] = useState({ key: 0, text: DEFAULT_GREETING });

  useEffect(() => {
    if (!shuffling) return;
    const timer = setTimeout(() => {
      const card = cards[Math.floor(Math.random() * cards.length)];
      setShuffling(false);
      setOverlayCard(card);
      if (user) addHistoryEntry(user.email, card);
    }, 1450);
    return () => clearTimeout(timer);
  }, [shuffling, user]);

  const handleShuffle = () => {
    if (shuffling) return;
    setShuffling(true);
  };

  const handleLoggedIn = (nextUser) => {
    setBubble({
      key: Date.now(),
      text: `Willkommen in der spirituellen Welt, ${nextUser.firstName}.`,
    });
  };

  return (
    <div className="app">
      <AccountMenu onLoggedIn={handleLoggedIn} />

      <div className="app__sky">
        <WelcomeBubble key={bubble.key} text={bubble.text} />
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

        <div className="app__actions">
          <button className="app__shuffle" onClick={handleShuffle} disabled={shuffling}>
            {shuffling ? 'Esmeralda mischt …' : 'Karten mischen'}
          </button>

          <LoginButton onLoggedIn={handleLoggedIn} />
        </div>
      </div>

      {overlayCard && (
        <CardOverlay card={overlayCard} onClose={() => setOverlayCard(null)} />
      )}

      <CookieNotice />
    </div>
  );
}
