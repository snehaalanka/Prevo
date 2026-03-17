import React, { useState } from 'react';
import './Auth.css';

const Register = ({ isOpen, onClose, onSwitch, onRegisterSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');

    if (fullName.trim().length < 2) return setError('Please enter your full name.');
    if (!email.includes('@')) return setError('Invalid email.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find(u => u.email === email)) return setError('Email already registered.');

    const newUser = { fullName, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    onRegisterSuccess(newUser);
  };

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Create Account</h2>
        {error && <p style={{ color: '#ff4b4b', fontSize: '13px', marginBottom: '10px' }}>{error}</p>}

        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Full Name" className="auth-input" value={fullName} required
            onChange={(e) => setFullName(e.target.value)} />
          <input type="email" placeholder="Email Address" className="auth-input" value={email} required
            onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" className="auth-input" value={password} required
            onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" className="register-btn" style={{ width: '100%', marginTop: '20px' }}>
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: '24px', fontSize: '14px', color: '#94a3b8' }}>
          Already have an account?{' '}
          <span onClick={onSwitch} className="switch-link">Sign In</span>
        </p>
      </div>
    </div>
  );
};

export default Register;