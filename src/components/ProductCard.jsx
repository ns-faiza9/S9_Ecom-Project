import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function ProductCard({ product, onAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem('areesan_favs') || '[]');
    setIsFav(favs.some(f => f.id === product.id));
  }, [product.id]);

  const toggleFav = (e) => {
    e.stopPropagation();
    const favs = JSON.parse(localStorage.getItem('areesan_favs') || '[]');
    let updated;
    if (isFav) {
      updated = favs.filter(f => f.id !== product.id);
    } else {
      updated = [...favs, product];
    }
    localStorage.setItem('areesan_favs', JSON.stringify(updated));
    setIsFav(!isFav);
  };

  const handleAdd = (e) => {
    e.stopPropagation();
    onAdd(product, quantity);
    setQuantity(1);
  };

  const handleBuyNow = (e) => {
    e.stopPropagation();
    // Use a separate session for Buy Now to avoid including the whole cart
    localStorage.setItem('areesan_buy_now', JSON.stringify({ item: product, qty: quantity }));
    navigate('/payment');
  };

  const goToDetails = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card" onClick={goToDetails} style={{ cursor: 'pointer', position: 'relative' }}>
      <button
        className={`fav-btn ${isFav ? 'active' : ''}`}
        onClick={toggleFav}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: isFav ? '#b14e6f' : 'rgba(255,255,255,0.8)',
          border: 'none',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 5,
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          fontSize: '1.2rem',
          color: isFav ? '#fff' : '#b14e6f'
        }}
      >
        {isFav ? '❤️' : '🤍'}
      </button>
      <img
        src={product.img}
        alt={product.name}
        loading="lazy"
        onError={(e) => {
          e.target.src = 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop';
        }}
      />
      <h4 style={{ margin: '12px 0 4px' }}>{product.name}</h4>
      <p style={{ fontSize: '0.85rem', color: '#8b6b75', marginBottom: '12px' }}>{product.category}</p>

      <div className="meta">
        <div className="price-qty">
          <div className="price">₹{product.price}</div>
          <div className="qty-selector" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="qty-btn">-</button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              min="1"
            />
            <button onClick={() => setQuantity(quantity + 1)} className="qty-btn">+</button>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
          <button className="btn btn-primary" style={{ flex: 1, padding: '10px' }} onClick={handleAdd}>Add</button>
          <button className="btn btn-ghost" style={{ flex: 1, padding: '10px' }} onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}
