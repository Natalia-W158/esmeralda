import { useState } from 'react';

const STORAGE_KEY = 'esmeralda-cookie-notice-ack';

function loadAck() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

export default function CookieNotice() {
  const [dismissed, setDismissed] = useState(loadAck);

  if (dismissed) return null;

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Zwischenablage/Storage nicht verfügbar — Hinweis blendet trotzdem aus.
    }
    setDismissed(true);
  };

  return (
    <div className="cookie-notice" role="dialog" aria-label="Hinweis zu gespeicherten Daten">
      <p className="cookie-notice__text">
        Diese Vorschau speichert dein Profil und deine Tageskarten-Historie lokal in deinem
        Browser (localStorage) — kein Tracking, keine Werbe-Cookies. Beim Anmelden wird die
        Domain deiner E-Mail-Adresse zur Prüfung an einen öffentlichen DNS-Dienst (Google)
        übermittelt.
      </p>
      <button type="button" className="cookie-notice__button" onClick={handleAccept}>
        Verstanden
      </button>
    </div>
  );
}
