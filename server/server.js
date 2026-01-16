const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');

const app = express();
const PORT = 5174;

// Middleware
app.use(cors());
app.use(express.json());

// Path to products data
const productsPath = path.join(__dirname, 'data', 'products.json');

// Helper function to read products
const readProducts = () => {
    const data = fs.readFileSync(productsPath, 'utf8');
    return JSON.parse(data);
};

// ... existing endpoints (omitted for brevity in replace_file_content logic)

// STRIPE CHECKOUT SESSION ENDPOINT
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { items } = req.body;

        const lineItems = items.map(item => ({
            price_data: {
                currency: 'thb',
                product_data: {
                    name: item.name,
                    images: [item.image.startsWith('http') ? item.image : `https://example.com${item.image}`],
                },
                unit_amount: item.price * 100, // Stripe expects amount in cents/satang
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `http://localhost:5173/success`,
            cancel_url: `http://localhost:5173/cart`,
        });

        res.json({ id: session.id });
    } catch (error) {
        console.error('Stripe error:', error);
        res.status(500).json({ error: error.message });
    }
});

// GET all products
app.get('/api/products', (req, res) => {
    try {
        const data = readProducts();
        res.json(data.products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// GET trending products
app.get('/api/products/trending', (req, res) => {
    try {
        const data = readProducts();
        const trendingProducts = data.products.filter(product => product.trending);
        res.json(trendingProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch trending products' });
    }
});

// GET single product by ID
app.get('/api/products/:id', (req, res) => {
    try {
        const data = readProducts();
        const product = data.products.find(p => p.id === parseInt(req.params.id));

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});

// PUT update product
app.put('/api/products/:id', (req, res) => {
    try {
        const data = readProducts();
        const productIndex = data.products.findIndex(p => p.id === parseInt(req.params.id));

        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Update product with new data
        const updatedProduct = {
            ...data.products[productIndex],
            ...req.body,
            id: parseInt(req.params.id) // Ensure ID doesn't change
        };

        // Recalculate price if discount or originalPrice changed
        if (req.body.discount !== undefined || req.body.originalPrice !== undefined) {
            const originalPrice = req.body.originalPrice || data.products[productIndex].originalPrice;
            const discount = req.body.discount || data.products[productIndex].discount;
            updatedProduct.price = Math.round(originalPrice * (1 - discount / 100));
        }

        data.products[productIndex] = updatedProduct;
        fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));

        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});

// POST create new product
app.post('/api/products', (req, res) => {
    try {
        const data = readProducts();

        // Generate new ID
        const newId = Math.max(...data.products.map(p => p.id)) + 1;

        // Calculate price from originalPrice and discount
        const originalPrice = req.body.originalPrice || 0;
        const discount = req.body.discount || 0;
        const price = Math.round(originalPrice * (1 - discount / 100));

        const newProduct = {
            id: newId,
            ...req.body,
            price
        };

        data.products.push(newProduct);
        fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create product' });
    }
});

// DELETE product
app.delete('/api/products/:id', (req, res) => {
    try {
        const data = readProducts();
        const productIndex = data.products.findIndex(p => p.id === parseInt(req.params.id));

        if (productIndex === -1) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const deletedProduct = data.products.splice(productIndex, 1)[0];
        fs.writeFileSync(productsPath, JSON.stringify(data, null, 2));

        res.json({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 REST API Server running on http://localhost:${PORT}`);
    console.log(`📦 Stripe integration active (using ${process.env.STRIPE_SECRET_KEY ? 'provided' : 'placeholder'} key)`);
});
