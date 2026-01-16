/**
 * Format price with Thai Baht currency symbol
 * @param {number} price - Price in baht
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `฿${price.toLocaleString()}`;
};

/**
 * Calculate discounted price
 * @param {number} originalPrice - Original price
 * @param {number} discount - Discount percentage (0-100)
 * @returns {number} Discounted price
 */
export const calculateDiscountedPrice = (originalPrice, discount) => {
  return Math.round(originalPrice * (1 - discount / 100));
};

/**
 * Calculate discount percentage from two prices
 * @param {number} originalPrice - Original price
 * @param {number} discountedPrice - Discounted price
 * @returns {number} Discount percentage
 */
export const getDiscountPercentage = (originalPrice, discountedPrice) => {
  return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};

/**
 * Check if product has a discount
 * @param {number} discount - Discount percentage
 * @returns {boolean} True if product has discount
 */
export const hasDiscount = (discount) => {
  return discount > 0;
};
