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

//Retrieve all orders for the authenticated user
const getOrders = async (req, res) => {
    try {
        let orders;
        if (req.user.role === "user") {
            orders = await Order.find({ user: req.user.userId });
        } else {
            orders = await Order.find();
        }
        res.status(200).json({ orders });
    } catch (error) {
        console.error("Error retrieving orders:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = {
    createOrder,
    getOrders
};  
    