import React, { useRef } from 'react';
import './Dashboard.css';

const Dashboard = ({ userName = "Sneha", onLogout }) => {
  const fileInputRef = useRef(null);

  const navItems = [
    "Dashboard", "ATS Score", "JD Match", 
    "Mock Interview", "Skill Gap", "History"
  ];

  const handleUploadClick = () => {
    // Triggers the hidden file input
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      alert(`File selected: ${file.name}`);
      // Add your backend upload logic here
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo"></div>
          <span>Prevo</span>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <button 
              key={index} 
              className={`nav-item ${item === 'Dashboard' ? 'active' : ''}`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-spacer"></div>

        <div className="sidebar-footer">
          <div className="account-box">
            <div className="account-details">
              <span className="user-name">{userName}</span>
            </div>
          </div>
          
          <button className="signout-btn" onClick={onLogout}>
            Sign out
          </button>
        </div>
      </aside>

      <main className="dashboard-main">
        <header className="welcome-header">
          <h1>Welcome <span className="user-gradient">{userName}!</span></h1>
          <p>Ready to level up today?</p>
        </header>

        <div className="upload-section">
          {/* Clickable area for file upload */}
          <div className="upload-box" onClick={handleUploadClick}>
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
            <div className="upload-icon">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </div>
            <p className="upload-text">Upload your resume here</p>
            <p className="upload-hint">PDF / DOC . Max 10MB</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;