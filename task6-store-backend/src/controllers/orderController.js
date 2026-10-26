//Order controller
const Order = require("../models/Order");
// Create a new order
const createOrder = async (req, res) => {
    try {
        const {products, totalAmount, status } = req.body;
        const order = new Order({ user: req.user.userId, products, totalAmount, status });
        await order.save();
        res.status(201).json({
            message: "Order created successfully",
            order
        });
    } catch (error) {
        res.status(500).json({ message: "Order Create Error", error });
    }
};

module.exports = {
    createOrder
};