import React from 'react';
import News from './News';
import styles from './schemesNews.module.css';

const SchemesNewsHome = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <h2>📜 Schemes</h2>
          <p className={styles.description}>
            The Indian Government announces various welfare schemes for different sections of society.
            Use the tools below to explore schemes across departments and categories.
          </p>

          <div className={styles.searchBox}>
            <label htmlFor="search">🔍 Search Schemes</label>
            <input type="text" id="search" placeholder="Enter keyword..." />
            <div className={styles.searchButtons}>
              <button>Search</button>
              
            </div>
          </div>

          <ul className={styles.schemeList}>
            <li>🏙️ <strong>Smart Cities Mission</strong> – Ministry of Urban Development   <button className={styles.knowMore}>Know More</button> </li>
            <li>🌸 <strong>Floriculture Development Guidelines</strong>  <button className={styles.knowMore}>Know More</button></li>
            <li>🛡️ <strong>Social Defence Schemes</strong> – Ministry of Social Justice  <button className={styles.knowMore}>Know More</button></li>
            <li>♿ <strong>Support for Differently Abled</strong> – Ministry of Social Justice  <button className={styles.knowMore}>Know More</button></li>
          </ul>

          <ul>
            <News />
          </ul>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <div className={styles.newsBox}>
            <h3>👁️ Most Viewed</h3>
            <ul>
              <li>New Millennium Indian Technology Initiative – CSIR</li>
              <li>Tax Holiday Scheme – MSME Development</li>
              <li>Student Schemes – Madhya Pradesh</li>
              <li>Paryavaran Vahini Scheme – Environment Ministry</li>
              <li>Gujarat Education Schemes</li>
            </ul>
          </div>

          <div className={styles.newsBox}>
            <h3>📢 What's New</h3>
            <ul>
              <li>Petrochemical Schemes – Chemical & Petrochemical Dept.</li>
              <li>Ministry of Health & Family Welfare Website</li>
              <li>Biomass Gasifier Scheme – Renewable Energy Ministry</li>
              <li>Indira Awaas Yojana</li>
              <li>Vocational Training in Tribal Areas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemesNewsHome;
