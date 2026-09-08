

// Import Mongoose
const mongoose = require("mongoose");

// Define the structure of a user document
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      required: true,
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