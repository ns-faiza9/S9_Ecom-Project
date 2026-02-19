// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AreesanLogo from "../assets/logoAreesan.png";

export default function Header({ current }) {
  const [count, setCount] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Guest User',
    email: 'guest@example.com',
    username: 'guest'
  });
  const navigate = useNavigate();

  useEffect(() => {
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem('areesan_cart') || '[]');
      setCount(cart.length);
    };

    const updateUserData = () => {
      const storedUser = localStorage.getItem('areesan_user');
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      } else {
        setUserData({
          name: 'Guest User',
          email: 'guest@example.com',
          username: 'guest'
        });
      }
    };

    updateCount();
    updateUserData();
    window.addEventListener('cartUpdated', updateCount);
    window.addEventListener('storage', updateUserData);

    const handleClickOutside = (event) => {
      if (profileOpen && !event.target.closest('.profile-container')) {
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('cartUpdated', updateCount);
      window.removeEventListener('storage', updateUserData);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [profileOpen]);

  const handleLogout = () => {
    localStorage.removeItem('areesan_user');
    window.dispatchEvent(new Event('storage')); // Trigger update for multi-tab consistency
    navigate('/login');
  };

  return (
    <header className="header container" role="banner">
      <div className="brand" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={AreesanLogo} alt="Areesan logo" className="logo" />
        <div>
          <h1>Areesan</h1>
          <p>Handcrafted flowers & joyful moments</p>
        </div>
      </div>

      <nav className="nav" aria-label="Main navigation">
        <Link className={current === 'home' ? 'active' : ''} to="/">Home</Link>
        <Link className={current === 'shop' ? 'active' : ''} to="/shop">Shop</Link>
        {userData.email === 'guest@example.com' && (
          <Link className={current === 'login' ? 'active' : ''} to="/login">Login</Link>
        )}


        <div className="nav-actions">
          <Link to="/favourites" className="cart-indicator" title="Favourites">
            ❤️
          </Link>

          <Link to="/cart" className="cart-indicator" title="Cart">
            🛒 <span className="cart-count-badge">{count}</span>
          </Link>

          <div className="profile-container">
            <button
              className={`profile-trigger ${profileOpen ? 'active' : ''}`}
              onClick={() => setProfileOpen(!profileOpen)}
              aria-expanded={profileOpen}
              aria-haspopup="true"
              title="Profile"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Profile"
                className="profile-icon"
              />
              <span className="dropdown-arrow">▾</span>
            </button>

            {profileOpen && (
              <div className="profile-dropdown">
                <div className="dropdown-header">
                  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" />
                  <div className="user-info">
                    <p className="user-name">{userData.name}</p>
                    <p className="user-email">{userData.email}</p>
                    <p className="user-username" style={{ fontSize: '0.8rem', color: '#666' }}>@{userData.username}</p>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <ul className="dropdown-menu">
                  <li><Link to="/profile">My Profile</Link></li>
                  <li><Link to="/orders">My Orders</Link></li>
                  <li><Link to="/about">About Areesan</Link></li>
                  <li><Link to="/contact">Contact Support</Link></li>
                  <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
