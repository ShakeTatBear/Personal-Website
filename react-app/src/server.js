// Initialize Server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000; 

// Since Express 4.16+, bodyParser.json() is built-in with express.json()
app.use(express.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
// Assuming 'public' folder exists and holds static content like images, CSS, JavaScript, etc.
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      // This should be handled automatically by Express static,
      // but it's okay to leave it for special cases or extra surety
      res.setHeader('Content-Type', 'text/javascript');
    }
  }
}));

// Handle POST requests to '/submit-email'
app.post('/submit-email', (req, res) => {
  const email = req.body.email;
  if (!email) { // Validate that email is not undefined
    return res.status(400).json({ success: false, message: 'Email is required' });
  }
  // Save the email to a file
  fs.appendFile('emails.txt', email + '\n', err => {
    if (err) {
      console.error('Error saving email:', err);
      return res.status(500).json({ success: false, message: 'Failed to save email' });
    }
    // Send a JSON response confirming the submission
    res.json({ success: true, message: 'Email submitted successfully!' });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
