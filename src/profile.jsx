import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './style.css';
import { showToast } from './components/Toast.jsx';

export default function Profile() {
    const [user, setUser] = useState({
        name: 'Guest User',
        email: 'guest@example.com',
        username: 'guest',
        address: '',
        phone: '',
        shippingDetails: ''
    });

    useEffect(() => {
        const storedUser = localStorage.getItem('areesan_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleSave = () => {
        localStorage.setItem('areesan_user', JSON.stringify(user));
        showToast('Profile updated successfully! ✨');
    };

    return (
        <>
            <Header />
            <main className="container">
                <div className="profile-page-card">
                    <div className="profile-page-header">
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Avatar" />
                        <div>
                            <h1>{user.name}</h1>
                            <p>@{user.username}</p>
                        </div>
                    </div>

                    <div className="profile-form">
                        <div className="form-group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={user.name}
                                onChange={e => setUser({ ...user, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                value={user.email}
                                readOnly
                                style={{ background: '#f5f5f5', cursor: 'not-allowed' }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="text"
                                value={user.phone || ''}
                                placeholder="Enter your phone number"
                                onChange={e => setUser({ ...user, phone: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Home Address</label>
                            <textarea
                                rows="3"
                                value={user.address || ''}
                                placeholder="Enter your full delivery address"
                                onChange={e => setUser({ ...user, address: e.target.value })}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label>Shipping Preferences</label>
                            <textarea
                                rows="2"
                                value={user.shippingDetails || ''}
                                placeholder="Flat number, landmarks, or special instructions"
                                onChange={e => setUser({ ...user, shippingDetails: e.target.value })}
                            ></textarea>
                        </div>

                        <button className="btn btn-primary btn-block" onClick={handleSave}>Save Profile Changes</button>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
