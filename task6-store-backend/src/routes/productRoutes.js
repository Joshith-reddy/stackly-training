const express = require('express');

const {
    createProduct,
    getProducts,
    getProductById
} = require('../controllers/productController');

const router = express.Router();

//CREATE a new product
router.post('/', createProduct);

//GET all products
router.get('/', getProducts);

//GET a product by ID
router.get('/:id', getProductById);

module.exports = router;