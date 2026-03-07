import React, { useRef, useState } from 'react';
import './Dashboard.css';
import ATSScore from './ATSScore';
import JDMatch from './JDMatch';
import SkillGap from './SkillGap'; // Fixed import to point to SkillGap

const Dashboard = ({ userName = "Sneha", onLogout }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [resumeUploaded, setResumeUploaded] = useState(false); 
  const fileInputRef = useRef(null);

  const navItems = [
    "Dashboard", "ATS Score", "JD Match", 
    "Mock Interview", "Skill Gap", "History"
  ];

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
      setResumeUploaded(true); 
    }
  };

  const animatedName = userName.split("").map((char, index) => (
    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
      {char}
    </span>
  ));

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
              className={`nav-item ${activeTab === item ? 'active' : ''}`}
              onClick={() => setActiveTab(item)}
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
        {/* --- ROUTING LOGIC --- */}
        {activeTab === 'Dashboard' ? (
          <div className="dashboard-home">
            <header className="welcome-header">
              <h1 className="typewriter">
                Welcome <span className="user-gradient">{animatedName}</span>.
              </h1>
              <p className="fade-in">Ready to level up today?</p>
            </header>

            <div className="upload-section">
              <div className="upload-box" onClick={handleUploadClick}>
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  style={{ display: 'none' }} 
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                <div className="upload-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                    <polyline points="5 12 12 5 19 12"></polyline>
                  </svg>
                </div>
                <p className="upload-text">Upload your resume here</p>
                <p className="upload-hint">PDF / DOC . Max 10MB</p>
              </div>
            </div>
          </div>
        ) : activeTab === 'ATS Score' ? (
          <ATSScore />
        ) : activeTab === 'JD Match' ? (
          <JDMatch />
        ) : activeTab === 'Skill Gap' ? (
          /* ✅ Skill Gap now correctly checks the upload status */
          <SkillGap isUploaded={resumeUploaded} />
        ) : (
          <div className="placeholder-content" style={{ padding: '60px', width: '100%' }}>
            <h2 style={{ color: '#8c4bff' }}>{activeTab} Coming Soon</h2>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;