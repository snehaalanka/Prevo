import React, { useState } from 'react';
import './App.css';
import Login from "./login.jsx";
import Register from "./register.jsx";

function App() {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  // Helper functions to handle the "Switch" logic
  const openRegister = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const openLogin = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  return (
    <div className="container">
      {/* Auth Modals */}
      <Login 
        isOpen={isLoginOpen} 
        onClose={() => setLoginOpen(false)} 
        onSwitch={openRegister} 
      />
      <Register 
        isOpen={isRegisterOpen} 
        onClose={() => setRegisterOpen(false)} 
        onSwitch={openLogin} 
      />

      <nav className="navbar">
        <div className="brand-section">
          {/* Logo with your 5.5px border defined in App.css */}
          <div className="brand-logo"></div>
          <span style={{ fontWeight: 800, fontSize: '20px', fontFamily: 'Instrument Sans' }}>Prevo</span>
        </div>
        
        <div className="nav-actions">
          <button 
            onClick={() => setLoginOpen(true)} 
            className="login-btn" 
            style={{background: 'none', border: 'none', cursor: 'pointer'}}
          >
            Login
          </button>
          <button 
            onClick={() => setRegisterOpen(true)} 
            className="register-btn"
          >
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
}

export default App;