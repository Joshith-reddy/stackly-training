const User = require("../models/User");

//create a new user
const createUser = async (req, res) => {
    try {
        const { name, email, password, age } = req.body;

        const user = new User({
            name,
            email,
            password,
            age
        });

        await user.save();

        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Create user error:", error.message);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};
//GET all users
const getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");

        res.status(200).json(users);
    } catch (error) {
        console.error("Get users error:", error.message);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

//GET user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Get user by ID error:", error.message);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

// UPDATE

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        Object.assign(user, req.body);

        await user.save();

        res.status(200).json({
            message: "User updated successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                age: user.age,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Update user error:", error.message);

        res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser
};
