// Initialize Server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000; 

app.use(bodyParser.json());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'main' directory
app.use(express.static('./', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'text/javascript');
    }
  }
}));

// Handle POST requests to '/submit-email'
app.post('/submit-email', (req, res) => {
  const email = req.body.email;
  // Save the email to a file
  fs.appendFileSync('emails.txt', email + '\n');
  // Send a JSON response confirming the submission
  res.json({ success: true, message: 'Email submitted successfully!' });
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
