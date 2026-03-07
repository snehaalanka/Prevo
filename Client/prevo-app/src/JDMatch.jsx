import React, { useState } from 'react';
import './JDMatch.css';

const JDMatch = () => {
  const [jdText, setJdText] = useState("");

  return (
    <div className="jd-container">
      <header className="jd-header">
        <h1 className="jd-title">JD Match</h1>
        <hr className="jd-divider" />
        <p className="jd-subtitle">Curious if you’re the perfect fit? Paste the JD.</p>
      </header>

      <div className="jd-content">
        <div className="jd-input-area">
          <textarea 
            className="jd-textarea"
            placeholder="Paste your Job Description here..."
            value={jdText}
            onChange={(e) => setJdText(e.target.value)}
          />
          
          {/* Action button appears once text is pasted */}
          {jdText.length > 50 && (
            <button className="analyze-btn">
              Analyze Match
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JDMatch;