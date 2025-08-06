const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');

// POST endpoint for new applicants
router.post('/', async (req, res) => {
  try {
    const { name, email, role, motivation } = req.body;
    if (!name || !email || !role || !motivation) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const applicant = new Applicant({ name, email, role, motivation });
    await applicant.save();
    res.status(201).json({ message: 'Applicant registered successfully' });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Error registering applicant', error: err.message });
  }
});

// Existing GET endpoint for applicants
router.get('/', auth, async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching applicants' });
  }
});

// Accept an application (mark as accepted and create user if not already accepted)
router.put('/accept/:id', auth, async (req, res) => {
  try {
    const applicant = await Applicant.findById(req.params.id);
    if (!applicant) return res.status(404).json({ message: 'Applicant not found' });

    if (applicant.accepted) {
      return res.status(400).json({ message: 'Applicant already accepted' });
    }

    // Generate a default password based on email
    const defaultPassword = applicant.email.split('@')[0];
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(defaultPassword, salt);

    // Create new user
    const user = new User({
      username: `${applicant.name.toLowerCase().replace(/\s+/g, '_')}_${Date.now()}`,
      password: hashedPassword,
      email: applicant.email,
      role: 'volunteer'
    });

    await user.save();
    // Update applicant to mark as accepted
    applicant.accepted = true;
    await applicant.save();
    res.json({ message: 'Applicant accepted and moved to users' });
  } catch (err) {
    console.error('Error accepting applicant:', err);
    res.status(500).json({ message: 'Error accepting applicant', error: err.message });
  }
});

// Delete an application
router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndDelete(req.params.id);
    if (!applicant) return res.status(404).json({ message: 'Applicant not found' });
    res.json({ message: 'Applicant deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting applicant' });
  }
});

module.exports = router;