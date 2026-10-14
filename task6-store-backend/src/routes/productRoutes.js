const express = require('express');

const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
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

//DELETE a product by ID
router.delete('/:id', deleteProduct);

module.exports = router;