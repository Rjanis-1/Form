const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (e.g., index.html, styles.css, script.js)
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can process the form data (e.g., save to a database)
    console.log(`Received form submission: ${name}, ${email}, ${message}`);
    // Respond with a success message or redirect to a thank you page
    res.send('Form submission successful!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
