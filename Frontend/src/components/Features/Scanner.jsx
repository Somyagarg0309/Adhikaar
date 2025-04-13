import React from 'react';
import { FaQrcode } from 'react-icons/fa';
import scannerImg from '/assets/images/scannerImg.webp';
import './Features.css';

const Scanner = () => {
  return (
    <div className="feature-card">
      <img src={scannerImg} alt="Scanner preview" className="feature-img" />
      <div className="icon"><FaQrcode size={50} color="#0d6efd" /></div>
      <h3>Document Scanner</h3>
      <p>Scan QR codes to access help, track complaint status, or get legal support instantly.</p>
    </div>
  );
};

export default Scanner;
