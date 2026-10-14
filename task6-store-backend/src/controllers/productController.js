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

module.exports = {
    createProduct
};
