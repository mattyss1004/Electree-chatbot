import { useState } from 'react';

const VALID_USERNAME = 'electree';
const VALID_PASSWORD = 'Solar2026';

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === VALID_USERNAME && password === VALID_PASSWORD) {
      setStatus('success');
      setError('');
      setTimeout(() => onLogin(), 1200);
    } else {
      setStatus('error');
      setError('Nesprávné přihlašovací údaje.');
      setTimeout(() => setStatus('idle'), 2000);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a1628 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '20px',
    }}>
      {/* DEMO badge */}
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        background: 'rgba(34, 197, 94, 0.15)',
        border: '1px solid rgba(34, 197, 94, 0.4)',
        color: '#22c55e',
        padding: '4px 14px',
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>DEMO</div>

      {/* Logo / Icon */}
      <div style={{
        width: '64px',
        height: '64px',
        background: 'linear-gradient(135deg, #22c55e, #16a34a)',
        borderRadius: '18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '28px',
        boxShadow: '0 0 40px rgba(34, 197, 94, 0.3)',
        fontSize: '28px',
      }}>⚡</div>

      {/* Title */}
      <h1 style={{
        color: '#ffffff',
        fontSize: '28px',
        fontWeight: '700',
        margin: '0 0 6px 0',
        letterSpacing: '-0.5px',
        textAlign: 'center',
      }}>Electree Solar</h1>

      <p style={{
        color: '#6b7280',
        fontSize: '14px',
        margin: '0 0 36px 0',
        textAlign: 'center',
        letterSpacing: '0.05em',
      }}>AI Asistent — Přístup pro demo</p>

      {/* Card */}
      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        padding: '36px',
        width: '100%',
        maxWidth: '380px',
        backdropFilter: 'blur(12px)',
      }}>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              color: '#9ca3af',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>Uživatelské jméno</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Zadejte jméno"
              autoComplete="username"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${status === 'error' ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              color: '#9ca3af',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '8px',
            }}>Heslo</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Zadejte heslo"
              autoComplete="current-password"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${status === 'error' ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.1)'}`,
                borderRadius: '10px',
                padding: '12px 14px',
                color: '#ffffff',
                fontSize: '14px',
                outline: 'none',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s',
              }}
            />
          </div>

          {/* Error message */}
          {error && (
            <p style={{
              color: '#ef4444',
              fontSize: '13px',
              margin: '-12px 0 16px 0',
              textAlign: 'center',
            }}>{error}</p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '13px',
              borderRadius: '10px',
              border: 'none',
              cursor: status === 'success' ? 'default' : 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.03em',
              transition: 'all 0.3s ease',
              background: status === 'success'
                ? 'linear-gradient(135deg, #22c55e, #16a34a)'
                : status === 'error'
                ? 'linear-gradient(135deg, #ef4444, #dc2626)'
                : 'linear-gradient(135deg, #22c55e, #16a34a)',
              color: '#ffffff',
              boxShadow: status === 'success'
                ? '0 0 20px rgba(34,197,94,0.5)'
                : '0 4px 15px rgba(34,197,94,0.2)',
            }}
          >
            {status === 'success' ? '✓ Přihlášení úspěšné' : status === 'error' ? '✗ Nesprávné údaje' : 'Přihlásit se'}
          </button>
        </form>
      </div>

      {/* Footer note */}
      <p style={{
        color: '#374151',
        fontSize: '12px',
        marginTop: '28px',
        textAlign: 'center',
      }}>Tato stránka je určena pouze pro demo účely.</p>
    </div>
  );
}
