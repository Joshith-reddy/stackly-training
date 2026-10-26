const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const {
    createProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const router = express.Router();

//CREATE a new product
router.post('/', authMiddleware, createProduct);

//GET all products
router.get('/', getProducts);

//GET a product by ID
router.get('/:id', getProductById);

//UPDATE a product by ID
router.put('/:id', authMiddleware, updateProduct);

//DELETE a product by ID
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;