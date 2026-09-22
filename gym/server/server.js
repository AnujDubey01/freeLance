require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Models
const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  program: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});
const Enquiry = mongoose.model('Enquiry', enquirySchema);

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Ironforge Fitness API is running.' });
});

app.post('/api/enquiries', async (req, res) => {
  try {
    const newEnquiry = new Enquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ success: true, message: 'Enquiry saved successfully' });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({ success: false, message: 'Failed to save enquiry' });
  }
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ironforge_fitness';

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
  });
