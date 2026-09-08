// Import the Express framework
const express = require("express");

// Create an Express application
const app = express();

// Define the server port
const PORT = 3000;

// GET /
// Returns the welcome message when the root URL is requested
app.get("/", (req, res) => {
  res.send("Welcome to Stackly! 🚀");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});