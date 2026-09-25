
// Import Express
const express = require("express");

// Import Mongoose for ObjectId validation
const mongoose = require("mongoose");

// Import the User model
const User = require("../models/userModel");

// Create an Express router
const router = express.Router();

// GET /users 
router.get("/", async (req, res) => {
  try {
    const { role, age } = req.query;

    // Build the MongoDB filter dynamically
    const filter = {};

    // Filter by role if supplied
    if (role) {
      filter.role = role.toLowerCase();
    }

    // Filter by age if supplied
    if (age !== undefined) {
      const ageNumber = Number(age);

      if (Number.isNaN(ageNumber)) {
        return res.status(400).json({
          message: "Age query parameter must be a number",
        });
      }

      filter.age = ageNumber;
    }

    // Find users matching the filter
    const users = await User.find(filter);

    // Successful GET response
    res.status(200).json(users);
  } catch (error) {
    console.error("GET /users error:", error.message);

    res.status(500).json({
      message: "Failed to retrieve users",
    });
  }
});



// GET /users/:id
// Get one user by MongoDB ObjectId


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID",
      });
    }

    // Find the user by ID
    const user = await User.findById(id);

    // User does not exist
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // User found
    res.status(200).json(user);
  } catch (error) {
    console.error("GET /users/:id error:", error.message);

    res.status(500).json({
      message: "Failed to retrieve user",
    });
  }
});



// POST /users
// Create a new user

router.post("/", async (req, res) => {
  try {
    const { name, email, age, role } = req.body;

    // Check required fields
    if (
      !name ||
      !email ||
      age === undefined ||
      age === null ||
      !role
    ) {
      return res.status(400).json({
        message: "name, email, age and role are required",
      });
    }

    // Create the user in MongoDB
    const user = await User.create({
      name,
      email,
      age,
      role,
    });

    // 201 = Created
    res.status(201).json(user);
  } catch (error) {
    console.error("POST /users error:", error.message);

    // Handle validation/casting errors as bad requests
    if (
      error.name === "ValidationError" ||
      error.name === "CastError"
    ) {
      return res.status(400).json({
        message: "Invalid user data",
      });
    }

    // Handle duplicate email
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "Failed to create user",
    });
  }
});


// PUT /users/:id
// Replace/update the complete user

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, role } = req.body;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID",
      });
    }

    // PUT expects the complete user data
    if (
      !name ||
      !email ||
      age === undefined ||
      age === null ||
      !role
    ) {
      return res.status(400).json({
        message: "name, email, age and role are required for PUT",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        name,
        email,
        age,
        role,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    // User does not exist
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("PUT /users/:id error:", error.message);

    if (
      error.name === "ValidationError" ||
      error.name === "CastError"
    ) {
      return res.status(400).json({
        message: "Invalid user data",
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "Failed to update user",
    });
  }
});


// PATCH /users/:id
// Update selected fields

router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID",
      });
    }

    // Make sure the body is not empty
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Request body cannot be empty",
      });
    }

    // Only allow known User fields
    const allowedFields = ["name", "email", "age", "role"];

    const invalidFields = Object.keys(req.body).filter(
      (field) => !allowedFields.includes(field)
    );

    if (invalidFields.length > 0) {
      return res.status(400).json({
        message: `Invalid fields: ${invalidFields.join(", ")}`,
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("PATCH /users/:id error:", error.message);

    if (
      error.name === "ValidationError" ||
      error.name === "CastError"
    ) {
      return res.status(400).json({
        message: "Invalid user data",
      });
    }

    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "Failed to update user",
    });
  }
});



// DELETE /users/:id
// Delete a user


router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID",
      });
    }

    // Delete the user
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      user: deletedUser,
    });
  } catch (error) {
    console.error("DELETE /users/:id error:", error.message);

    res.status(500).json({
      message: "Failed to delete user",
    });
  }
});


// Export the router
module.exports = router;