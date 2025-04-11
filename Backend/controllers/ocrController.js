import axios from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export const handleOCR = async (req, res) => {
  try {
    const filePath = req.file.path;
    const lang = req.body.lang || 'hin';

    const form = new FormData();
    form.append('file', fs.createReadStream(filePath));
    form.append('lang', lang);

    const response = await axios.post(
      'https://ocr-models-production.up.railway.app/ocr/',
      form,
      { headers: form.getHeaders() }
    );

    fs.unlinkSync(filePath); // Clean up uploaded file
    res.json(response.data);
  } catch (err) {
    console.error('OCR Error:', err.message);
    res.status(500).json({ error: 'Failed to process OCR' });
  }
};
