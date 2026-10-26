
const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
    createOrder
} = require("../controllers/orderController");

const router = express.Router();

//CREATE a new order
router.post('/', authMiddleware, createOrder);

module.exports = router;