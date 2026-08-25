import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

export default function LoginModal({ onClose, onLoggedIn }) {
  const { login } = useAuth();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError('Bitte alle Felder ausfüllen.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Bitte eine gültige E-Mail-Adresse eingeben.');
      return;
    }
    const nextUser = login({ firstName, lastName, email });
    onLoggedIn(nextUser);
  };

  return (
    <div className="login-modal" role="dialog" aria-modal="true" aria-label="Anmelden">
      <div className="login-modal__backdrop" onClick={onClose} />
      <div className="login-modal__panel">
        <button className="overlay__close" onClick={onClose} aria-label="Schließen">×</button>
        <span className="overlay__eyebrow">Anmelden</span>
        <h3 className="login-modal__title">Sichere dir deine Tarot-Historie</h3>
        <p className="login-modal__hint">
          Diese Vorschau speichert dein Konto lokal in diesem Browser — noch ohne echten Cloud-Login.
        </p>

        <form className="login-modal__form" onSubmit={handleSubmit}>
          <input
            className="login-modal__input"
            type="text"
            placeholder="Vorname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="login-modal__input"
            type="text"
            placeholder="Nachname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            className="login-modal__input"
            type="email"
            placeholder="E-Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <p className="login-modal__error">{error}</p>}
          <button type="submit" className="login-modal__submit">Anmelden</button>
        </form>

        <p className="login-modal__google-note">Anmeldung mit Google folgt, sobald ein echtes Backend angebunden ist.</p>
      </div>
    </div>
  );
}
