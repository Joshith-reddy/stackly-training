const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();

const PORT = 3000;


app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/stackly")
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

// GET 
app.get("/", (req, res) => {
  res.send("Welcome to Stackly! ");
});

// Insert sample users
app.post("/seed-users", async (req, res) => {
  try {
    const users = await User.insertMany([
      {
        name: "John",
        email: "john@test.com",
        age: 25,
      },
      {
        name: "David",
        email: "david@test.com",
        age: 28,
      },
    ]);

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create users",
      error: error.message,
    });
  }
});

// GET /users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users",
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});