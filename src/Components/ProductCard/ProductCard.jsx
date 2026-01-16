import React, { useState } from 'react';
import { FaHeart, FaStar, FaShoppingCart, FaCheck } from 'react-icons/fa';
import { formatPrice, hasDiscount } from '../../utils/priceFormatter';
import './ProductCard.css';
import { useCart } from '../CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <div className="product-card">
            <div className="card-top">
                <img src={product.image} alt={product.name} />
                <FaHeart className="favorite-icon" />
                {hasDiscount(product.discount) && (
                    <div className="discount-badge">-{product.discount}%</div>
                )}
                {!product.inStock && (
                    <div className="out-of-stock-overlay">Out of Stock</div>
                )}
            </div>
            <div className="card-bottom">
                <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{product.rating}</span>
                    <span>({product.reviews} Reviews)</span>
                </div>
                <h4>{product.name}</h4>
                <div className="price-cart">
                    <div className="price-container">
                        {hasDiscount(product.discount) && (
                            <span className="original-price">{formatPrice(product.originalPrice)}</span>
                        )}
                        <p className="current-price">{formatPrice(product.price)}</p>
                    </div>
                    <span>Sold Out {product.soldOut}</span>
                    <div
                        className={`cart-icon-wrapper ${added ? 'added' : ''}`}
                        onClick={handleAddToCart}
                        title="Add to Cart"
                    >
                        {added ? <FaCheck className="cart-icon" /> : <FaShoppingCart className="cart-icon" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
