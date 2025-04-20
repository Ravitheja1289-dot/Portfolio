import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { body, validationResult } from 'express-validator';
import XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Constants
const EXCEL_FILE = join(__dirname, 'contact_submissions.xlsx');
const SHEET_NAME = 'Contact Submissions';

// Initialize Excel file if it doesn't exist
const initializeExcel = () => {
  if (!fs.existsSync(EXCEL_FILE)) {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
      ['Timestamp', 'Name', 'Email', 'Message'] // Headers
    ]);
    XLSX.utils.book_append_sheet(workbook, worksheet, SHEET_NAME);
    XLSX.writeFile(workbook, EXCEL_FILE);
    console.log('Excel file created at:', EXCEL_FILE);
  }
};

// Helper function to read Excel file
const readExcel = () => {
  const workbook = XLSX.readFile(EXCEL_FILE);
  const worksheet = workbook.Sheets[SHEET_NAME];
  return XLSX.utils.sheet_to_json(worksheet);
};

// Helper function to write to Excel file
const writeToExcel = (data) => {
  const workbook = XLSX.readFile(EXCEL_FILE);
  const worksheet = workbook.Sheets[SHEET_NAME];
  const existingData = XLSX.utils.sheet_to_json(worksheet);
  
  existingData.push(data);
  
  const newWorksheet = XLSX.utils.json_to_sheet(existingData);
  workbook.Sheets[SHEET_NAME] = newWorksheet;
  
  XLSX.writeFile(workbook, EXCEL_FILE);
  console.log('New submission added to Excel file');
};

// Routes
app.post('/api/contact', [
  body('name').trim().notEmpty().escape(),
  body('email').isEmail().normalizeEmail(),
  body('message').trim().notEmpty().escape()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const submission = {
      Timestamp: new Date().toISOString(),
      Name: req.body.name,
      Email: req.body.email,
      Message: req.body.message
    };

    writeToExcel(submission);
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving submission:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all submissions
app.get('/api/submissions', (req, res) => {
  try {
    const submissions = readExcel();
    res.json(submissions);
  } catch (error) {
    console.error('Error reading submissions:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Download Excel file
app.get('/api/download', (req, res) => {
  try {
    res.download(EXCEL_FILE);
  } catch (error) {
    console.error('Error downloading file:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Initialize Excel file on server start
initializeExcel();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 