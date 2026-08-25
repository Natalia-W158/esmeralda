import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginModal from './LoginModal';

export default function LoginButton({ onLoggedIn }) {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  if (user) return null;

  return (
    <>
      <button className="app__login" onClick={() => setOpen(true)}>
        Anmelden
      </button>
      {open && (
        <LoginModal
          onClose={() => setOpen(false)}
          onLoggedIn={(nextUser) => {
            setOpen(false);
            onLoggedIn(nextUser);
          }}
        />
      )}
    </>
  );
}
