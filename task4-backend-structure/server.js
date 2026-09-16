// Import Express
const express = require("express");

// Import the user routes
const userRoutes = require("./routes/userRoutes");

// Create the Express application
const app = express();

// Define the port
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount user routes
// Any request starting with /users will be handled by userRoutes
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});