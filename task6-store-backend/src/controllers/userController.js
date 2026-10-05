const User = require("../models/User");

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

module.exports = {
    createUser
};