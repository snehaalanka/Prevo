import React from 'react';
import './Sidebar.css';

const navItems = [
  'Dashboard', 'ATS Score', 'JD Match',
  'Mock Interview', 'Skill Gap', 'History'
];

const Sidebar = ({ activeTab, onTabChange, userName, onLogout }) => {
  return (
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
            onClick={() => onTabChange(item)}
          >
            {item}
          </button>
        ))}
      </nav>

      <div className="sidebar-spacer"></div>

      <div className="sidebar-footer">
        <div className="account-box">
          <span className="user-name">{userName}</span>
        </div>
        <button className="signout-btn" onClick={onLogout}>Sign out</button>
      </div>
    </aside>
  );
};

export default Sidebar;