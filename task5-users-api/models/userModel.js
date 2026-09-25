// models/userModel.js

// Import Mongoose
const mongoose = require("mongoose");

// Define the User schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    age: {
      type: Number,
      required: true,
      min: 0,
    },

    role: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
  },
  {
    versionKey: false,
  }
);

// Create the User model
const User = mongoose.model("User", userSchema);

// Export the model
module.exports = User;