const express = require('express');

const { createProduct } = require('../controllers/productController');

const router = express.Router();

//CREATE a new product
router.post('/', createProduct);

module.exports = router;