import React, { useRef } from 'react';
import './UploadBox.css';

const UploadBox = ({ onFileSelect, uploaded = false, fileName = '' }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file && onFileSelect) onFileSelect(file);
  };

  return (
    <div className="upload-box" onClick={handleClick}>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
      />

      {!uploaded ? (
        <>
          <div className="upload-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>
          <p className="upload-text">Upload your resume here</p>
          <p className="upload-hint">PDF / DOC . Max 10MB</p>
        </>
      ) : (
        <div className="fade-in">
          <div className="upload-icon" style={{ color: '#641cb7', filter: 'drop-shadow(0 0 8px rgba(100, 28, 183, 0.4))' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <p className="upload-text" style={{ color: '#641cb7' }}>{fileName}</p>
          <p className="upload-hint" style={{ marginTop: '15px', textDecoration: 'underline' }}>Click to replace file</p>
        </div>
      )}
    </div>
  );
};

export default UploadBox;