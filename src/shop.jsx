import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { getProducts } from './services/api.js';
import ProductCard from './components/ProductCard.jsx';
import './style.css';
import { showToast } from './components/Toast.jsx';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Roses', 'Spring', 'Exotic', 'Classic'];

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    });
  }, []);

  const filterProducts = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === cat));
    }
  };



  const addToCart = (p, qty = 1) => {
    const cart = JSON.parse(localStorage.getItem('areesan_cart') || '[]');
    for (let i = 0; i < qty; i++) {
      cart.push(p);
    }
    localStorage.setItem('areesan_cart', JSON.stringify(cart));
    showToast(`${qty} ${p.name}(s) added to cart! 🌸`);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  return (
    <>
      <Header current="shop" />



      <main className="container">
        <section className="section-title">
          <h3>Our Collection</h3>
        </section>

        <div className="filter-chips">
          {categories.map(cat => (
            <button
              key={cat}
              className={`chip ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => filterProducts(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#b14e6f', fontSize: '1.2rem' }}>
            <p>Loading our collection...</p>
          </div>
        ) : (
          <section className="grid">
            {filteredProducts.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
