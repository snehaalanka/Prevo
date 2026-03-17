import React, { useState } from 'react';
import './Auth.css';

const Login = ({ isOpen, onClose, onSwitch, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (!email.includes('@') || !email.includes('.')) {
      return setError('Please enter a valid email address.');
    }

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (foundUser) {
      onLoginSuccess(foundUser, rememberMe);
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Welcome Back</h2>
        {error && <p style={{ color: '#ff4b4b', fontSize: '13px' }}>{error}</p>}

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email Address" className="auth-input" required
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="auth-input" required
            onChange={(e) => setPassword(e.target.value)} />

          <div style={{ display: 'flex', alignItems: 'center', margin: '10px 0', gap: '8px' }}>
            <input type="checkbox" id="remember" checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)} />
            <label htmlFor="remember" style={{ fontSize: '13px', color: '#94a3b8' }}>Remember me</label>
          </div>

          <button type="submit" className="register-btn" style={{ width: '100%', marginTop: '10px' }}>
            Login
          </button>
        </form>

        <p style={{ marginTop: '20px', fontSize: '14px', color: '#94a3b8' }}>
          Don't have an account? <span onClick={onSwitch} className="switch-link">Register</span>
        </p>
      </div>
    </div>
  );
};

export default Login;