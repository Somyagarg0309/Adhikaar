// routes/newsRoutes.js
import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/get-news", async (req, res) => {
  try {
    const API_KEY = process.env.VITE_SEARCH_API_KEY;

    // More specific query for transgender rights in India
    const URL = `https://newsapi.org/v2/everything?q=transgender%20rights%20india&sortBy=publishedAt&pageSize=20&language=en&apiKey=${API_KEY}`;

    const response = await axios.get(URL);
    const articles = response.data.articles;

    res.json({ articles });
  } catch (error) {
    console.error("Error fetching news:", error.message);
    res.status(500).json({ message: "Failed to fetch news articles" });
  }
});

export default router;
