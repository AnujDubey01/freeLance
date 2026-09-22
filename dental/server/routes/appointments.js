const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

// @route   POST /api/appointments
// @desc    Create a new appointment request
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, service, date, time } = req.body;
    
    const newAppointment = new Appointment({
      name,
      phone,
      email,
      service,
      date,
      time
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json({ success: true, data: savedAppointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

// @route   GET /api/appointments
// @desc    Get all appointments (for admin)
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: appointments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
