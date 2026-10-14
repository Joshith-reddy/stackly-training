const Product = require('../models/Product');

//CREATE a new product
const createProduct = async (req, res) => {
    try {
        const { name, 
            description, 
            price, 
            category, 
            stock } = req.body;
        const product = new Product({ 
                name, 
                description, 
                price, 
                category, 
                stock 
            });
            await product.save();
            res.status(201).json({
                message: 'Product created successfully',
                product
            });
    } catch (error) {
        console.error('Create product error:', error.message);
        res.status(500).json({ 
            message: 'Internal Server Error'});
    }
};

//GET all products
const getProducts = async (req, res) => {
    try {   
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Get products error:', error.message);
        res.status(500).json({ 
            message: 'Internal Server Error'});
    }
};

//GET a product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id); 
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }   
        res.status(200).json(product);
    } catch (error) {
        console.error('Get product error:', error.message);
        res.status(500).json({ 
            message: 'Internal Server Error'});
    }
};
module.exports = {
    createProduct,
    getProducts,
    getProductById
};
