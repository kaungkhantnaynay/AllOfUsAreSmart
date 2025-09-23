import React, { createContext, useState, useContext } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // Function to add an item to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            // Check if the item is already in the cart
            const itemExists = prevItems.find((item) => item.id === product.id);

            if (itemExists) {
                // If it exists, update the quantity
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If not, add the new item with a quantity of 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // You can add more functions like removeFromCart, clearCart, etc.

    return (
        <CartContext.Provider value={{ cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};