const express = require('express');

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct
} = require('../controllers/productController');

const router = express.Router();

//CREATE a new product
router.post('/', createProduct);

//GET all products
router.get('/', getProducts);

//GET a product by ID
router.get('/:id', getProductById);

//UPDATE a product by ID
router.put('/:id', updateProduct);

module.exports = router;