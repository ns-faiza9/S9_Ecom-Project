import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import AreesanImg from "./assets/Areesan.png";
import './style.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toast, setToast] = useState({ show: false, message: '', fade: false });
    const navigate = useNavigate();

    const showToast = (msg) => {
        setToast({ show: true, message: msg, fade: false });
        setTimeout(() => {
            setToast(prev => ({ ...prev, fade: true }));
            setTimeout(() => {
                setToast({ show: false, message: '', fade: false });
            }, 400);
        }, 2000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempt:', { email, password });

        // Simulated successful login
        const username = email.split('@')[0];
        const userData = {
            name: username,
            username: username,
            email: email,
            token: 'simulated-jwt-token'
        };
        localStorage.setItem('areesan_user', JSON.stringify(userData));

        showToast(`Welcome back, ${userData.name}! ✨`);

        // Brief delay for the toast to be seen before navigation
        setTimeout(() => {
            navigate('/');
        }, 1200);
    };

    return (
        <div className="app-wrapper">
            {toast.show && (
                <div className="toast-container">
                    <div className={`toast ${toast.fade ? 'fade-out' : ''}`}>
                        <span>👋</span> {toast.message}
                    </div>
                </div>
            )}

            <main className="container">

                <section className="login-section">
                    <div className="login-split-container">
                        <div className="login-left-panel">
                            <img src={AreesanImg} alt="Areesan Flowers" />
                            <h1>Areesan</h1>
                            <p>Handcrafted flowers & joyful moments</p>
                        </div>

                        <div className="login-right-panel">
                            <div className="login-card">
                                <div className="login-header">
                                    <h2>Welcome Back</h2>
                                    <p>Sign in to your Areesan account</p>
                                </div>

                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="••••••••"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
