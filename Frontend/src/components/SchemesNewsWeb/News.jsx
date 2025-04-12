import React, { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_SEARCH_API_KEY;
// const URL = `https://newsapi.org/v2/everything?q=lgbtq%20rights&sortBy=publishedAt&apiKey=${API_KEY}`;
const URL = `https://newsapi.org/v2/everything?q=lgbtq%20OR%20queer%20OR%20transgender%20OR%20gay%20OR%20lesbian&sortBy=publishedAt&pageSize=20&language=en&qInTitle=india&apiKey=${API_KEY}`;
const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }

        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="news-container">
      <h1 className="news-title">LGBTQ+ News</h1>

      {loading && <p className="loading-text">Loading articles...</p>}
      {error && <p className="error-text">{error}</p>}

      <div className="articles-grid">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="article-card"
          >
            <img
              src={article.urlToImage || "https://via.placeholder.com/400"}
              alt={article.title}
              className="article-image"
            />
            <div className="card-content">
              <h2 className="article-title">{article.title}</h2>
              <p className="article-description">{article.description}</p>
              <span className="read-more">Read more →</span>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .news-container {
          width: 100%;
          padding: 20px;
        }

        .news-title {
          text-align: center;
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px 0;
        }

        .article-card {
          background-color: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .article-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

        .article-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-bottom: 1px solid #ddd;
        }

        .card-content {
          padding: 15px;
        }

        .article-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin: 10px 0;
        }

        .article-description {
          font-size: 1rem;
          color: #555;
          margin-bottom: 10px;
        }

        .read-more {
          font-size: 0.9rem;
          color: #007BFF;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .article-card:hover .read-more {
          color: #0056b3;
        }

        .loading-text,
        .error-text {
          text-align: center;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
};

export default News;
