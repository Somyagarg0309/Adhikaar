import React, { useState } from 'react';
import './scanner.css';

const ScannerHome = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [language, setLanguage] = useState('');
  const [report, setReport] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleAnalyze = async () => {
    if (!selectedFile || !language) return;

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('lang', language.toLowerCase()); // language code expected by backend

    setLoading(true);
    setReport('');

    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/ocr`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze the document');
      }

      const data = await response.json();

      setReport(
        `📄 OCR Text:\n${data.ocrText}\n\n🤖 AI Legal Summary:\n${data.botMessage}`
      );
    } catch (error) {
      setReport(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="scanner-wrapper">
      <div className="scanner-container">
        <h1 className="scanner-heading">🔍 Analyze Your Document</h1>

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
            <option value="eng">English</option>
            <option value="hin">Hindi</option>
            <option value="spa">Spanish</option>
            <option value="fra">French</option>
          </select>
        </div>

        <button
          className="scanner-analyze-button"
          onClick={handleAnalyze}
          disabled={!selectedFile || !language || loading}
        >
          {loading ? '⏳ Analyzing...' : '🔎 Analyze'}
        </button>

        {report && (
          <div className="scanner-report">
            <h3>📝 Report</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{report}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScannerHome;
