import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
    
      <nav className="navbar">
        <div className="brand-section">
          <div className="brand-logo"></div>
          <span style={{ fontWeight: 800, fontSize: '20px' }}>Prevo</span>
        </div>
        
        <div className="nav-actions">
          <a href="#" className="login-btn">Login</a>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      <main className="hero">
        <div className="pill-label">
          AI-powered Interview Prep
        </div>

        <h1 className="main-title">
          Turn Practice <span className="gradient-part">Into Performance.</span>
        </h1>

        <div className="description">
          <p style={{ margin: 0 }}>Get your resume analyzed, see your ATS score and</p>
          <p style={{ margin: 0 }}>master mock interviews tailored to your JD.</p>
          <span className="ready-tag">Step in ready.</span>
        </div>
      </main>
    </div>
  );
}

export default App;