import { useMemo, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { getHistoryFor } from '../lib/history';

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function HistoryOverlay({ onClose }) {
  const { user } = useAuth();
  const [sortBy, setSortBy] = useState('date');
  const entries = useMemo(() => getHistoryFor(user.email), [user.email]);

  const sorted = useMemo(() => {
    const copy = [...entries];
    if (sortBy === 'date') {
      copy.sort((a, b) => new Date(b.drawnAt) - new Date(a.drawnAt));
    } else {
      copy.sort((a, b) => a.title.localeCompare(b.title, 'de'));
    }
    return copy;
  }, [entries, sortBy]);

  return (
    <div className="history-overlay" role="dialog" aria-modal="true" aria-label="Deine Tarot-Historie">
      <div className="history-overlay__backdrop" onClick={onClose} />
      <div className="history-overlay__panel">
        <button className="overlay__close" onClick={onClose} aria-label="Schließen">×</button>
        <span className="overlay__eyebrow">Historie</span>
        <h3 className="history-overlay__title">Deine gezogenen Tageskarten</h3>

        <div className="history-overlay__sort">
          <button
            type="button"
            className={`history-overlay__sort-btn${sortBy === 'date' ? ' is-active' : ''}`}
            onClick={() => setSortBy('date')}
          >
            Nach Datum
          </button>
          <button
            type="button"
            className={`history-overlay__sort-btn${sortBy === 'title' ? ' is-active' : ''}`}
            onClick={() => setSortBy('title')}
          >
            Nach Karte
          </button>
        </div>

        {sorted.length === 0 ? (
          <p className="history-overlay__empty">Noch keine Karten gezogen, seit du angemeldet bist.</p>
        ) : (
          <ul className="history-overlay__list">
            {sorted.map((entry, i) => (
              <li key={i} className="history-overlay__row">
                <span className="history-overlay__roman" style={{ color: entry.accent }}>{entry.roman}</span>
                <span className="history-overlay__info">
                  <span className="history-overlay__card-title">{entry.title}</span>
                  <span className="history-overlay__date">{formatDate(entry.drawnAt)}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
