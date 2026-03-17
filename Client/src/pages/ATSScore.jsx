import React, { useRef } from 'react';
import { useApp } from '../context/AppContext';
import './ATSScore.css';

const ATSScore = () => {
  const { uploadResume } = useApp();
  const fileInputRef = useRef(null);

  const handleUploadClick = () => fileInputRef.current.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) uploadResume(file);
  };

  return (
    <div className="ats-container">
      <header className="ats-header">
        <h1 className="ats-title">ATS Score</h1>
        <hr className="ats-divider" />
        <p className="ats-quote">Upload your resume and see how ATS-ready you are today.</p>
      </header>

      <div className="ats-content">
        <div className="ats-upload-box" onClick={handleUploadClick}>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <div className="ats-upload-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
          <p className="ats-upload-text">Upload your resume here</p>
          <p className="ats-upload-hint">PDF / DOC . Max 10MB</p>
        </div>
      </div>
    </div>
  );
};

export default ATSScore;