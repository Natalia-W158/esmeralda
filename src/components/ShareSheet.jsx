import { useState } from 'react';

function buildShareText(card) {
  return `☾ Meine Tageskarte von Esmeralda: ${card.title} — ${card.keywords}\n\n${card.meaning}\n\nZieh deine eigene Tageskarte:`;
}

const CHANNELS = [
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    href: (text, url) => `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    key: 'telegram',
    label: 'Telegram',
    href: (text, url) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
  },
  {
    key: 'x',
    label: 'X',
    href: (text, url) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${text} ${url}`)}`,
  },
  {
    key: 'facebook',
    label: 'Facebook',
    href: (text, url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
  },
  {
    key: 'email',
    label: 'E-Mail',
    href: (text, url) => `mailto:?subject=${encodeURIComponent('Deine Tageskarte von Esmeralda')}&body=${encodeURIComponent(`${text}\n\n${url}`)}`,
  },
];

export default function ShareSheet({ card, onClose }) {
  const [copied, setCopied] = useState(false);
  const text = buildShareText(card);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const canNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title: 'Esmeralda — Tageskarte', text, url });
      onClose();
    } catch {
      // Nutzer hat abgebrochen oder das Gerät unterstützt es doch nicht — Sheet bleibt offen.
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Zwischenablage nicht verfügbar — stiller Fehlschlag, Button bleibt unverändert.
    }
  };

  return (
    <div className="share-sheet" role="dialog" aria-modal="true" aria-label="Tageskarte teilen">
      <div className="share-sheet__backdrop" onClick={onClose} />
      <div className="share-sheet__panel">
        <button className="overlay__close" onClick={onClose} aria-label="Schließen">×</button>
        <span className="overlay__eyebrow">Teilen</span>
        <h3 className="share-sheet__title">Wie möchtest du deine Tageskarte teilen?</h3>

        {canNativeShare && (
          <button className="share-sheet__native" onClick={handleNativeShare}>
            Teilen über …
          </button>
        )}

        <div className="share-sheet__grid">
          {CHANNELS.map((channel) => (
            <a
              key={channel.key}
              className="share-sheet__channel"
              href={channel.href(text, url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {channel.label}
            </a>
          ))}
          <button type="button" className="share-sheet__channel" onClick={handleCopy}>
            {copied ? 'Kopiert ✓' : 'Text kopieren'}
          </button>
        </div>
      </div>
    </div>
  );
}
