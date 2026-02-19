import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import './style.css';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderToCancel, setOrderToCancel] = useState(null);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("areesan_orders") || "[]");
        // ... (rest of useEffect remains same)
        setOrders(savedOrders);
    }, []);

    const toggleExpand = (id) => {
        setExpandedOrderId(expandedOrderId === id ? null : id);
    };

    const handleCancelOrder = (orderId) => {
        setOrderToCancel(orderId);
        setIsModalOpen(true);
    };

    const confirmCancel = () => {
        const updatedOrders = orders.filter(order => order.id !== orderToCancel);
        localStorage.setItem("areesan_orders", JSON.stringify(updatedOrders));
        setOrders(updatedOrders);
        setIsModalOpen(false);
        setOrderToCancel(null);
    };

    const aggregateItems = (itemsStr) => {
        // ... (remains same)
    };

    return (
        <div className="app-wrapper">
            <Header current="orders" />

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Cancel Order?</h3>
                        <p>Are you sure you want to cancel your order <strong>{orderToCancel}</strong>? This action cannot be undone.</p>
                        <div className="modal-actions">
                            <button className="btn-confirm-cancel" onClick={confirmCancel}>Yes, Cancel Order</button>
                            <button className="btn-keep-order" onClick={() => setIsModalOpen(false)}>Keep My Order</button>
                        </div>
                    </div>
                </div>
            )}

            <main className="container">
                <section className="orders-section">
                    <div className="section-title">
                        <h3>My Orders</h3>
                        <p>Track and manage your floral deliveries</p>
                    </div>

                    <div className="orders-list">
                        {orders.length === 0 ? (
                            <div className="empty-orders">
                                <p>You haven't placed any orders yet.</p>
                                <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
                            </div>
                        ) : (
                            orders.map((order) => {
                                const isExpanded = expandedOrderId === order.id;
                                const displayedItems = aggregateItems(order.items);
                                return (
                                    <div key={order.id} className={`order-card ${isExpanded ? 'expanded' : ''}`}>
                                        <div className="order-summary">
                                            <div className="detail-item">
                                                <span className="label">🎁 Items:</span>
                                                <span className="value">{displayedItems}</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="label">📅 Date:</span>
                                                <span className="value">{order.date}</span>
                                            </div>
                                        </div>

                                        <div className={`order-details-expanded ${isExpanded ? 'show' : ''}`}>
                                            <div className="order-header" style={{ marginTop: '0', paddingTop: '0', borderBottom: '1px dashed #f0e6e9', marginBottom: '15px' }}>
                                                <span className="order-id">{order.id}</span>
                                                <span className={`order-status ${order.status.toLowerCase().replace(' ', '-')}`}>
                                                    {order.status}
                                                </span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="label">💰 Total Amount:</span>
                                                <span className="value">₹{order.total}</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="label">💳 Payment Method:</span>
                                                <span className="value">{order.paymentMethod === 'cod' ? 'Cash on Delivery' : (order.paymentMethod === 'upi' ? 'UPI' : 'Card')}</span>
                                            </div>
                                            <button
                                                className="btn btn-cancel"
                                                onClick={() => handleCancelOrder(order.id)}
                                                style={{ marginTop: '10px' }}
                                            >
                                                🗑️ Cancel Order
                                            </button>
                                        </div>

                                        <div className="order-footer">
                                            <button
                                                className="btn btn-primary"
                                                onClick={() => toggleExpand(order.id)}
                                                style={{ width: '100%' }}
                                            >
                                                {isExpanded ? 'Hide Details' : 'View Details'}
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
