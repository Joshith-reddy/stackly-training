
// Load variables from .env into process.env
require("dotenv").config();

// Import Express
const express = require("express");

// Import database connection function
const connectDB = require("./config/db");

// Import user routes
const userRoutes = require("./routes/userRoutes");

// Create Express application
const app = express();

// Use JSON middleware so req.body works for JSON requests
app.use(express.json());

// Simple root endpoint
app.get("/", (req, res) => {
  res.status(200).send("Welcome to Task 5 Users API");
});

// Mount all user routes under /users
app.use("/users", userRoutes);

// Get port from .env or use 3000
const PORT = process.env.PORT || 3000;

// Start application
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();