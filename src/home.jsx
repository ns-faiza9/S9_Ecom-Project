// src/home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { getProducts } from './services/api.js';
import ProductCard from './components/ProductCard.jsx';
import Areesan from "./assets/Areesan.png";
import './style.css';
import { showToast } from './components/Toast.jsx';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data.slice(0, 4)); // show first 4 featured
      setLoading(false);
    });
  }, []);



  const addToCart = (p, qty = 1) => {
    const cart = JSON.parse(localStorage.getItem('areesan_cart') || '[]');
    for (let i = 0; i < qty; i++) {
      cart.push(p);
    }
    localStorage.setItem('areesan_cart', JSON.stringify(cart));
    showToast(`${qty} ${p.name}(s) added to cart! 🌸`);
    // Dispatch event to update cart count in header
    const evt = new CustomEvent('cartUpdated');
    window.dispatchEvent(evt);
  };

  return (
    <>
      <Header current="home" />



      <main className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="txt">
            <h2 id="hero-title">Flowers that tell your story</h2>
            <p>Areesan has various flower bouquets and are happy to help in arrangements of birthdays, anniversaries, or a thoughtful surprise. with  a touch of timeless elegance.</p>
            <div className="cta">
              <Link className="btn btn-primary" to="/shop">Shop Bestsellers</Link>
              <Link className="btn btn-ghost" to="/about">Learn More</Link>
            </div>
          </div>
          <div className="img">
            <img src={Areesan} alt="assorted bouquet" />
          </div>
        </section>

        <section className="section-title">
          <h3>Featured Bouquets</h3>
        </section>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#b14e6f' }}>
            <p>Loading featured flowers...</p>
          </div>
        ) : (
          <section className="grid">
            {products.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} />)}
          </section>
        )}

        <section className="section-title" style={{ marginTop: '80px' }}>
          <h3>Why Choose Areesan?</h3>
          <p>We pride ourselves on more than just flowers.</p>
        </section>

        <section className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">🌸</span>
            <h4>Always Fresh</h4>
            <p>Our flowers are sourced daily from premium nurseries to ensure they stay vibrant for longer.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h4>Same-Day Delivery</h4>
            <p>Order by 2 PM and get your blooms delivered on the same day, handled with utmost care.</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">✨</span>
            <h4>Handcrafted with Love</h4>
            <p>Every bouquet is unique, artfully arranged by our master florists to tell your special story.</p>
          </div>
        </section>

        <section className="testimonials-section">
          <section className="section-title">
            <h3>What Our Customers Say</h3>
            <p>Real stories from our community.</p>
          </section>
          <div className="testimonial-grid">
            <div className="testimonial-card bloom">
              <p>"The bouquet I ordered for my mother's birthday was even more beautiful than the pictures. It truly told a story!"</p>
              <div className="testimonial-author">— Hamza Ali Mazari</div>
            </div>
            <div className="testimonial-card bloom">
              <p>"Excellent service and the delivery was incredibly fast. The scent of the lilies filled my entire home."</p>
              <div className="testimonial-author">— Md. Uzma</div>
            </div>
            <div className="testimonial-card bloom">
              <p>"Areesan is my go-to for every anniversary. The handcrafted touch makes all the difference."</p>
              <div className="testimonial-author">—Sk. Monera </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
