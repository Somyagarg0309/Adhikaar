import React, { useState } from 'react';
import './scanner.css';

const ScannerHome = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [language, setLanguage] = useState('');
  const [report, setReport] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    setReport(`Scanned document (${language}) processed successfully.`);
  };

  return (
    <div className="scanner-container">
      <h2>📄 Text Image Scanner</h2>

      <div className="scanner-section">
        <label htmlFor="file-upload">Upload Image:</label>
        <input type="file" id="file-upload" onChange={handleFileChange} />
      </div>

      <div className="scanner-section">
        <label htmlFor="language">Document Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">Select Language</option>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>

      <button
        className="analyze-button"
        onClick={handleAnalyze}
        disabled={!selectedFile || !language}
      >
        🔍 Analyze
      </button>

      {report && (
        <div className="scanner-report">
          <h3>📝 Report</h3>
          <p>{report}</p>
        </div>
      )}
    </div>
  );
};

export default ScannerHome;
