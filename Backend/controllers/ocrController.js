import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';
import Groq from 'groq-sdk'; // Groq SDK for chatbot interaction

// Initialize Groq client with your API key
const groq = new Groq({ apiKey: "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" });

export const handleOCR = async (req, res) => {
  try {
    const filePath = req.file.path;
    const lang = req.body.lang || 'eng';  // Default language is English

    // Prepare form data for OCR API request
    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    form.append('lang', lang);

    // Send the file to OCR API
    const response = await axios.post(
      'https://ocr-models-production.up.railway.app/ocr/',
      form,
      { headers: form.getHeaders() }
    );

    // Clean up the uploaded file after OCR request
    fs.unlinkSync(filePath);

    // Extract the OCR text from the response (assuming OCR API returns 'text' field)
    const ocrText = response.data.text;

    if (!ocrText) {
      return res.status(400).json({ error: 'No text found in OCR response' });
    }

    // Pass the OCR text to Groq chatbot as a lawyer's analysis and summary prompt
    const prompt = `You are a Lawyer and need to analyze the following text and summarize it: ${ocrText}`;

    // Send the OCR text to Groq for chatbot processing
    const groqResponse = await groq.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt, // Send OCR text in the prompt
        },
      ],
      model: 'llama3-70b-8192', // Use appropriate Groq model
    });

    // Extract the response from Groq
    const botMessage = groqResponse.choices[0]?.message?.content || 'No reply from Groq.';

    // Return both OCR text and Groq's summarized response
    res.json({ ocrText, botMessage });

  } catch (err) {
    console.error('OCR Error:', err.message);
    res.status(500).json({ error: 'Failed to process OCR or Groq response' });
  }
};
