import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { getProducts } from './services/api.js';
import './style.css';

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then(products => {
            const found = products.find(p => p.id === parseInt(id));
            setProduct(found);
            setLoading(false);
        });
    }, [id]);

    const addToCart = (p, q) => {
        const cart = JSON.parse(localStorage.getItem('areesan_cart') || '[]');
        for (let i = 0; i < q; i++) {
            cart.push(p);
        }
        localStorage.setItem('areesan_cart', JSON.stringify(cart));
        window.dispatchEvent(new Event('cartUpdated'));
    };

    const buyNow = (p, q) => {
        // Create a temporary Buy Now session for just this item
        localStorage.setItem('areesan_buy_now', JSON.stringify({ item: p, qty: q }));
        navigate('/payment');
    };

    if (loading) return <div className="container">Loading...</div>;
    if (!product) return <div className="container">Product not found.</div>;

    return (
        <>
            <Header />
            <main className="container">
                <div className="product-details-page">
                    <div className="pd-image">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="pd-info">
                        <span className="pd-category">{product.category}</span>
                        <h1>{product.name}</h1>
                        <p className="pd-price">₹{product.price}</p>
                        <div className="pd-divider"></div>
                        <p className="pd-desc">{product.desc}</p>

                        <div className="pd-actions">
                            <div className="qty-selector pd-qty">
                                <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
                                <input type="number" value={qty} readOnly />
                                <button className="qty-btn" onClick={() => setQty(qty + 1)}>+</button>
                            </div>
                            <button className="btn btn-primary" onClick={() => addToCart(product, qty)}>Add to Cart</button>
                            <button className="btn btn-ghost" onClick={() => buyNow(product, qty)}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
