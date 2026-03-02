import React from 'react';
import './Auth.css';

const Login = ({ isOpen, onClose, onSwitch }) => {
  if (!isOpen) return null;

  return (
    <div className="auth-overlay" onClick={onClose}>
      <div className="auth-card" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Welcome Back</h2>
        <p>Master your next interview with Prevo.</p>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email Address" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          
          <button type="submit" className="register-btn" style={{ width: '100%', marginTop: '20px' }}>
            Login
          </button>
        </form>

        <p style={{ marginTop: '24px', fontSize: '14px', color: '#94a3b8' }}>
          Don't have an account?{" "}
          <span 
            onClick={onSwitch} 
            style={{ color: '#8c4bff', cursor: 'pointer', fontWeight: '700', textDecoration: 'none' }}
            className="switch-link"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;