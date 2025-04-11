import React from 'react';
import { FaQrcode } from 'react-icons/fa';

const Scanner = () => (
  <div className="feature-card">
    <div className="icon"><FaQrcode size={50} color="#0d6efd" /></div>
    <h3>Scanner</h3>
    <p>Scan QR codes to access help, track complaint status, or get legal support instantly.</p>
  </div>
);

export default Scanner;
