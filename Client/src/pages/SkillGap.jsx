import React from 'react';
import './SkillGap.css';

// Mock data — replace with real AI response later
const mockData = {
  readinessScore: 72,
  skillsMatched: 8,
  skillsTotal: 12,
  skillsMissing: 4,
  strengths: ['React.js', 'GitHub', 'MongoDB', 'Node.js', 'Communication'],
  skillGaps: ['DSA', 'System Design', 'SQL', 'Docker'],
  focusAreas: ['DSA', 'System Design', 'SQL', 'Docker'],
  improvementPlan: [
    { title: 'Practice DSA', duration: '30 days', action: 'View Plan', link: '#' },
    { title: 'Learn System Design', duration: '45 days', action: 'View Resources', link: '#' },
    { title: 'Master SQL', duration: '20 days', action: 'View Plan', link: '#' },
    { title: 'Docker Basics', duration: '15 days', action: 'View Resources', link: '#' },
  ]
};

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

  const { readinessScore, skillsMatched, skillsTotal, skillsMissing, strengths, skillGaps, focusAreas, improvementPlan } = mockData;

  return (
    <div className="skill-container">
      <header className="skill-header">
        <h1 className="skill-title">Skill Gap Analysis</h1>
        <hr className="skill-divider" />
        <p className="skill-quote">Here's what's standing between you and your target role.</p>
      </header>

      {/* ── Row 1: Stats ── */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-icon readiness-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div>
            <p className="stat-label">Readiness Score</p>
            <p className="stat-value">{readinessScore}%</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon matched-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="8 12 11 15 16 9" />
            </svg>
          </div>
          <div>
            <p className="stat-label">Skills Matched</p>
            <p className="stat-value">{skillsMatched}/{skillsTotal}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon missing-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <p className="stat-label">Skills Missing</p>
            <p className="stat-value">{skillsMissing} key skills</p>
          </div>
        </div>
      </div>

      {/* ── Row 2: Three analysis boxes ── */}
      <div className="analysis-row">

        {/* Strengths */}
        <div className="analysis-card">
          <h3 className="analysis-card-title strengths-title">Strengths</h3>
          <ul className="skill-list">
            {strengths.map((s, i) => (
              <li key={i} className="skill-item strengths-item">
                <span className="skill-dot strengths-dot"></span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Skill Gaps */}
        <div className="analysis-card">
          <h3 className="analysis-card-title gaps-title">Skill Gaps</h3>
          <ul className="skill-list">
            {skillGaps.map((s, i) => (
              <li key={i} className="skill-item gaps-item">
                <span className="skill-dot gaps-dot"></span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Focus Areas */}
        <div className="analysis-card focus-card">
          <h3 className="analysis-card-title focus-title">Quick Focus Areas</h3>
          <p className="focus-subtitle">Especially for your target role</p>
          <ul className="skill-list">
            {focusAreas.map((s, i) => (
              <li key={i} className="skill-item focus-item">
                <span className="skill-dot focus-dot"></span>
                {s}
              </li>
            ))}
          </ul>
          <button className="mock-btn">Start Mock Interview →</button>
        </div>

      </div>

      {/* ── Row 3: Improvement Plan ── */}
      <div className="improvement-section">
        <h3 className="improvement-title">Improvement Plan</h3>
        <div className="improvement-row">
          {improvementPlan.map((plan, i) => (
            <div key={i} className="improvement-card">
              <p className="plan-title">{plan.title}</p>
              <p className="plan-duration">{plan.duration}</p>
              <a href={plan.link} className="plan-link">{plan.action} →</a>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SkillGap;