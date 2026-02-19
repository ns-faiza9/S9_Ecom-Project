import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ProductCard from './components/ProductCard.jsx';
import './style.css';
import { showToast } from './components/Toast.jsx';

export default function Favourites() {
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const storedFavs = JSON.parse(localStorage.getItem('areesan_favs') || '[]');
        setFavs(storedFavs);
    }, []);

    const removeFromFavs = (id) => {
        const updated = favs.filter(p => p.id !== id);
        setFavs(updated);
        localStorage.setItem('areesan_favs', JSON.stringify(updated));
    };

    const addToCart = (p) => {
        const cart = JSON.parse(localStorage.getItem('areesan_cart') || '[]');
        cart.push(p);
        localStorage.setItem('areesan_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
        showToast(`${p.name} added to cart! 🌸`);
    };

    return (
        <>
            <Header />
            <main className="container">
                <section className="section-title">
                    <h3>Your Favourites</h3>
                    <p>The bouquets you loved most, kept in one place.</p>
                </section>

                {favs.length === 0 ? (
                    <div className="empty-state">
                        <p>You haven't added any favourites yet. Start exploring our shop!</p>
                        <a href="/shop" className="btn btn-primary">Go to Shop</a>
                    </div>
                ) : (
                    <section className="grid">
                        {favs.map(p => (
                            <ProductCard
                                key={p.id}
                                product={p}
                                onAdd={() => addToCart(p)}
                            />
                        ))}
                    </section>
                )}
            </main>
            <Footer />
        </>
    );
}
