import React from 'react';
import News from './News';
import styles from './schemesNews.module.css'; // (make sure this file exists or remove if not used)


const SchemesNewsHome = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* Left and Right Sections */}
        <div className={styles.leftSection}>
          <h2>📜 Schemes</h2>
          <p className={styles.description}>
            The Indian Government announces various welfare schemes from time to time for the benefit of different sections of society. Here, you can search and explore schemes across departments and categories.
          </p>


          <div className={styles.searchBox}>
            <label htmlFor="search">🔍 Search Schemes</label>
            <input type="text" id="search" placeholder="Enter keyword..." />
            <button>Search</button>
          </div>


          <ul className={styles.schemeList}>
            <li>🏙️ Smart Cities Mission Portal by Ministry of Urban Development</li>
            <li>🌸 Guidelines for Integrated Development of Floriculture</li>
            <li>🛡️ Social Defence Schemes – Ministry of Social Justice</li>
            <li>♿ Schemes for Differently Abled – Ministry of Social Justice</li>
          </ul>
          <ul><News/></ul>
        </div>


        <div className={styles.rightSection}>
          <div className={styles.newsBox}>
            <h3>👁️ Most Viewed</h3>
            <ul>
              <li>New Millennium Indian Technology Leadership Initiative by CSIR</li>
              <li>Tax Holiday Scheme by MSME Development Commissioner</li>
              <li>Student Schemes in Madhya Pradesh</li>
              <li>Paryavaran Vahini Scheme – Environment Ministry</li>
              <li>Gujarat Education Schemes</li>
            </ul>
          </div>


          <div className={styles.newsBox}>
            <h3>📢 What's New</h3>
            <ul>
              <li>Petrochemical Schemes – Department of Chemical & Petrochemical</li>
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