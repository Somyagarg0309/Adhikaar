import React, { useState } from 'react';
import styles from './schemesNews.module.css';

const allSchemes = [
  {
    title: "🌈 SMILE Scheme for Transgender Welfare",
    description: "Support for Marginalized Individuals for Livelihood and Enterprise (SMILE) provides housing, medical aid, and job training for the transgender community."
  },
  {
    title: "📚 Scholarship Scheme for LGBTQ+ Students",
    description: "Government and NGOs provide scholarships and mentorship for LGBTQ+ youth pursuing higher education."
  },
  {
    title: "💼 Inclusive Employment Program",
    description: "Aimed at reducing workplace discrimination and offering job placement services to LGBTQ+ individuals."
  },
  {
    title: "🏠 Shelter Homes for Trans Persons",
    description: "Safe residential support facilities for trans and non-binary individuals facing displacement or family rejection."
  },
];

const SchemesNewsHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSchemes, setFilteredSchemes] = useState(allSchemes);

  const handleSearch = () => {
    const term = searchTerm.toLowerCase();
    const results = allSchemes.filter(scheme =>
      scheme.title.toLowerCase().includes(term) || scheme.description.toLowerCase().includes(term)
    );
    setFilteredSchemes(results.length ? results : [{ title: "No Results Found", description: "Try searching for another term related to LGBTQ+ welfare." }]);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h2>📜 LGBTQ+ Schemes</h2>
          <p className={styles.description}>
            Discover government and NGO initiatives promoting the rights, welfare, and empowerment of the LGBTQ+ community.
          </p>

          <div className={styles.searchBox}>
            <label htmlFor="search">🔍 Search Inclusive Schemes</label>
            <input
              type="text"
              id="search"
              placeholder="e.g. education, transgender, job..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          <ul className={styles.schemeList}>
            {filteredSchemes.map((scheme, index) => (
              <li key={index}>
                <strong>{scheme.title}</strong>
                <p>{scheme.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.newsBox}>
            <h3>👁️ Most Viewed</h3>
            <ul>
              <li>Legal aid workshops for LGBTQ+ rights</li>
              <li>State-wise transgender ID card registration</li>
              <li>National helpline for LGBTQ+ support</li>
              <li>Pride fellowship programs 2025</li>
              <li>Inclusive healthcare subsidies announced</li>
            </ul>
          </div>

          <div className={styles.newsBox}>
            <h3>📢 What's New</h3>
            <ul>
              <li>Rainbow Housing Project – Phase II Launched</li>
              <li>Central Scheme for Trans Youth Upskilling</li>
              <li>LGBTQ+ Mental Health Helpline Expansion</li>
              <li>State Policy on Gender Inclusion – 2025 Draft</li>
              <li>Queer Art and Culture Grant – Applications Open</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemesNewsHome;
