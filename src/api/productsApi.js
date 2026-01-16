// Base API URL
const API_BASE_URL = 'http://localhost:5174/api';

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} Array of all products
 */
export const fetchAllProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

/**
 * Fetch trending products from the API
 * @returns {Promise<Array>} Array of trending products
 */
export const fetchTrendingProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/trending`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching trending products:', error);
    throw error;
  }
};

/**
 * Fetch a single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

/**
 * Update a product
 * @param {number} id - Product ID
 * @param {Object} updates - Object containing fields to update
 * @returns {Promise<Object>} Updated product object
 */
export const updateProduct = async (id, updates) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const product = await response.json();
    return product;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    throw error;
  }
};

/**
 * Create a new product
 * @param {Object} productData - Product data
 * @returns {Promise<Object>} Created product object
 */
export const createProduct = async (productData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

/**
 * Delete a product
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Deletion confirmation
 */
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    throw error;
  }
};
