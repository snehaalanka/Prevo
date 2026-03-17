import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import Sidebar from '../components/Sidebar';
import UploadBox from '../components/UploadBox';
import ATSScore from './ATSScore';
import JDMatch from './JDMatch';
import SkillGap from './SkillGap';
import './Dashboard.css';

const Dashboard = () => {
  const { user, isNewUser, logout, resumeUploaded, resumeFile, uploadResume } = useApp();

  // Restore last active tab from localStorage on refresh
  const [activeTab, setActiveTab] = useState(
    () => localStorage.getItem('activeTab') || 'Dashboard'
  );

  useEffect(() => {
    const handleTabBack = (event) => {
      if (event.state && event.state.tab) {
        setActiveTab(event.state.tab);
        localStorage.setItem('activeTab', event.state.tab);
      }
    };
    window.addEventListener('popstate', handleTabBack);
    return () => window.removeEventListener('popstate', handleTabBack);
  }, []);

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    localStorage.setItem('activeTab', tabName); // Save on every tab switch
    window.history.pushState({ inApp: true, tab: tabName }, '');
  };

  const animatedName = user?.fullName.split('').map((char, index) => (
    <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>{char}</span>
  ));

  return (
    <div className="dashboard-container">
      <Sidebar
        activeTab={activeTab}
        onTabChange={handleTabChange}
        userName={user?.fullName}
        onLogout={logout}
      />

      <main className="dashboard-main">
        {activeTab === 'Dashboard' && (
          <div className="dashboard-home">
            <header className="welcome-header">
              <h1>
                {isNewUser ? 'Welcome ' : 'Welcome back '}
                <span className="user-gradient">{animatedName}.</span>
              </h1>
              <p>Ready to level up today?</p>
            </header>
            <div className="upload-section">
              <UploadBox
                onFileSelect={uploadResume}
                uploaded={resumeUploaded}
                fileName={resumeFile?.name}
              />
            </div>
          </div>
        )}

        {activeTab === 'ATS Score' && <ATSScore />}
        {activeTab === 'JD Match' && <JDMatch />}
        {activeTab === 'Skill Gap' && <SkillGap isUploaded={resumeUploaded} />}

        {activeTab === 'Mock Interview' && (
          <div className="placeholder-content">
            <h2 style={{ color: '#8c4bff' }}>Mock Interview Coming Soon</h2>
          </div>
        )}
        {activeTab === 'History' && (
          <div className="placeholder-content">
            <h2 style={{ color: '#8c4bff' }}>Your Past Analysis History</h2>
            <p style={{ color: '#94a3b8' }}>No history found yet.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;