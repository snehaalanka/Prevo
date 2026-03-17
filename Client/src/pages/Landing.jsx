import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Login from '../components/Auth/Login';
import Register from '../components/Auth/Register';
import './Landing.css';

const Landing = () => {
  const { login } = useApp();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  return (
    <div className="container">
      <Login
        isOpen={isLoginOpen}
        onClose={() => setLoginOpen(false)}
        onSwitch={() => { setLoginOpen(false); setRegisterOpen(true); }}
        onLoginSuccess={(data, rem) => login(data, false, rem)}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
        onSwitch={() => { setRegisterOpen(false); setLoginOpen(true); }}
        onRegisterSuccess={(data) => login(data, true, true)}
      />

      <nav className="navbar">
        <div className="brand-section">
          <div className="brand-logo"></div>
          <span style={{ fontWeight: 800, fontSize: '20px' }}>Prevo</span>
        </div>
        <div className="nav-actions">
          <button onClick={() => setLoginOpen(true)} className="login-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Login
          </button>
          <button onClick={() => setRegisterOpen(true)} className="register-btn">
            Register
          </button>
        </div>
      </nav>

      <main className="hero">
        <div className="pill-label">AI-powered Interview Prep</div>
        <h1 className="main-title">
          Turn Practice <span className="gradient-part">Into Performance.</span>
        </h1>
        <div className="description">
          Get your resume analyzed, see your ATS score and <br />
          master mock interviews tailored to your JD.
          <span className="ready-tag">Step in ready.</span>
        </div>
      </main>
    </div>
  );
};

export default Landing;