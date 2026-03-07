import React from 'react';
import './SkillGap.css';

const SkillGap = ({ isUploaded }) => {
  if (!isUploaded) {
    return (
      <div className="skill-container">
        <header className="skill-header">
          <h1 className="skill-title">Skill Gap</h1>
          <hr className="skill-divider" />
        </header>

        <div className="skill-empty-state">
          <div className="warning-icon">!</div>
          <h2 className="error-text">No resume uploaded</h2>
          <p className="error-hint">Please upload your resume on the Dashboard to see your skill gap analysis.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="skill-container">
      <header className="skill-header">
        <h1 className="skill-title">Skill Gap Analysis</h1>
        <hr className="skill-divider" />
      </header>

      <div className="skill-results">
        <p className="success-text">Resume detected! Analyzing your skills...</p>
      </div>
    </div>
  );
};

export default SkillGap;