require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const applicantRoutes = require('./routes/applicants');
const authRoutes = require('./routes/auth');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'https://volunteer-web-app.netlify.app' }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/applicants', applicantRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});