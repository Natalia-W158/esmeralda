import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';
import HistoryOverlay from './HistoryOverlay';

function initialsOf(user) {
  return `${user.firstName[0] ?? ''}${user.lastName[0] ?? ''}`.toUpperCase();
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a7.97 7.97 0 0 0 0-2l2.1-1.6-2-3.4-2.5 1a8 8 0 0 0-1.7-1L14.9 3h-3.8l-.4 2.6a8 8 0 0 0-1.7 1l-2.5-1-2 3.4L6.6 11a7.97 7.97 0 0 0 0 2l-2.1 1.6 2 3.4 2.5-1a8 8 0 0 0 1.7 1l.4 2.6h3.8l.4-2.6a8 8 0 0 0 1.7-1l2.5 1 2-3.4-2.1-1.6Z" />
    </svg>
  );
}

export default function AccountMenu({ onLoggedIn }) {
  const { user, logout } = useAuth();
  const [panelOpen, setPanelOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);

  if (!user) {
    return (
      <div className="account-menu">
        <button className="account-menu__trigger" onClick={() => setLoginOpen(true)} aria-label="Anmelden / Einstellungen">
          <SettingsIcon />
        </button>
        {loginOpen && (
          <LoginModal
            onClose={() => setLoginOpen(false)}
            onLoggedIn={(nextUser) => {
              setLoginOpen(false);
              onLoggedIn(nextUser);
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="account-menu">
      <button
        className="account-menu__trigger account-menu__trigger--avatar"
        onClick={() => setPanelOpen((open) => !open)}
        aria-label="Konto & Einstellungen"
      >
        {initialsOf(user)}
      </button>

      {panelOpen && (
        <div className="account-menu__panel">
          <p className="account-menu__name">{user.firstName} {user.lastName}</p>
          <p className="account-menu__email">{user.email}</p>
          <button
            type="button"
            className="account-menu__action"
            onClick={() => { setHistoryOpen(true); setPanelOpen(false); }}
          >
            Historie ansehen
          </button>
          <button
            type="button"
            className="account-menu__action account-menu__action--danger"
            onClick={() => { logout(); setPanelOpen(false); }}
          >
            Abmelden
          </button>
        </div>
      )}

      {historyOpen && <HistoryOverlay onClose={() => setHistoryOpen(false)} />}
    </div>
  );
}
