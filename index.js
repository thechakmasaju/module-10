const express = require('express');
const mongoose = require('mongoose');
const { authenticate } = require('./auth'); // Import the authenticate middleware

const app = express();

// Other app configurations and middleware

// Apply the authenticate middleware function to the desired routes
app.get('/products', authenticate, async (req, res) => {
  // Handle the request and response logic
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
