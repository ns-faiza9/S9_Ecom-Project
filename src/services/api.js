// src/services/api.js
import PRODUCTS from '../data/products.js';

/**
 * Simulates an API call to fetch products.
 * Returns a promise that resolves with the list of products after a delay.
 * @returns {Promise<Array>}
 */
export const getProducts = () => {
    return new Promise((resolve) => {
        // Simulate network latency (800ms)
        setTimeout(() => {
            resolve(PRODUCTS);
        }, 800);
    });
};
