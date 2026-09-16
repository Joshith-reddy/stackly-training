// Import Express
const express = require("express");

// Import controller functions
const {
  getUsers,
  createUser,
} = require("../controllers/userController");

// Import logger middleware
const logger = require("../middleware/logger");

// Create an Express router
const router = express.Router();

// Apply logger middleware to requests coming through this router
router.use(logger);

// GET /users
router.get("/", getUsers);

// POST /users
router.post("/", createUser);

// Export the router
module.exports = router;