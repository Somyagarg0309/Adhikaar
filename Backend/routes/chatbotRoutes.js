import express from 'express';
import { getChatbotResponse } from '../controllers/chatbotController.js';  // Import the function correctly

const router = express.Router();

// POST route to handle chatbot requests
router.post('/chat', getChatbotResponse);

export default router;
