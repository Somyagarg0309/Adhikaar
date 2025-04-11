import Groq from 'groq-sdk';  // Import the Groq SDK

// Initialize the Groq client with the API key from environment variables
const groq = new Groq({ apiKey: "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" });

// Function to request a chat completion from Groq
export const getChatbotResponse = async (req, res) => {
  try {
    // Extract the user's message from the request body
    const userMessage = req.body.message;

    // If no message is provided, return a bad request error
    if (!userMessage) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    // Request to the Groq API with the user's message
    const response = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',  // 'user' indicates that this is a message from the user
          content: userMessage,  // The user's message
        },
      ],
      model: 'llama3-70b-8192',  // Ensure the model is available in Groq
    });

    // Extract the chatbot's reply from the response
    const botMessage = response.choices[0]?.message?.content || 'No reply from the model.';

    // Send back the chatbot's response
    res.json({ reply: botMessage });
  } catch (error) {
    // Log any errors and return a server error response
    console.error('Chatbot error:', error.message);
    res.status(500).json({ error: 'Chatbot failed to respond.' });
  }
};
