import React, { useState } from 'react';
import './Cart.css';
import { useCart } from '../../Components/CartContext';
import { formatPrice } from '../../utils/priceFormatter';
import { FaTrash, FaPlus, FaMinus, FaChevronLeft, FaCreditCard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your Stripe publishable key from dashboard
const stripePromise = loadStripe('pk_test_placeholder');

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart, getCartCount } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      // This is where we call our backend to create a Stripe session
      const response = await fetch('http://localhost:5174/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cartItems }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();
      const stripe = await stripePromise;

      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Something went wrong with the checkout process. Using real keys?');
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-cart-container">
        <div className="empty-cart-content">
          <img src="/src/assets/empty-cart.png" alt="Empty Cart" className="empty-cart-img" />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added any shoes to your cart yet.</p>
          <Link to="/ShoesGallery" className="btn dark-btn">
            <FaChevronLeft /> Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>{getCartCount()} {getCartCount() === 1 ? 'Item' : 'Items'} in your bag</p>
      </div>

      <div className="cart-content">
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item-premium">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="item-info">
                <div className="item-header">
                  <h3>{item.name}</h3>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
                <p className="item-category">{item.brand}</p>
                <div className="item-controls">
                  <div className="quantity-selector">
                    <button onClick={() => updateQuantity(item.id, -1)} disabled={item.quantity <= 1}>
                      <FaMinus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>
                      <FaPlus />
                    </button>
                  </div>
                  <p className="item-price">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            </div>
          ))}

          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className="cart-summary-sidebar">
          <div className="summary-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>
            <div className="summary-row">
              <span>Estimated Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>Included</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>{formatPrice(getCartTotal())}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                'Processing...'
              ) : (
                <>
                  <FaCreditCard /> Checkout with Stripe
                </>
              )}
            </button>

            <div className="payment-security">
              <p>Secure SSL encrypted payments</p>
              <div className="cards-icons">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2014_logo_detail.svg" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
