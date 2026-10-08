const express = require("express");

const { 
    createUser, 
    getUsers, 
    getUserById,
    updateUser
} = require("../controllers/userController");

const router = express.Router();

//Post route for creating a new user
router.post("/", createUser);
//Get route for retrieving all users
router.get("/", getUsers);
//Get route for retrieving a user by ID
router.get("/:id", getUserById);
//Put route for updating user information
router.put("/:id", updateUser);

module.exports = router;
