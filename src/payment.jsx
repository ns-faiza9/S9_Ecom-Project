import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./style.css";

export default function Payment() {
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [cardData, setCardData] = useState({ number: "", expiry: "", cvv: "", name: "" });
    const [upiId, setUpiId] = useState("");
    const [deliveryDetails, setDeliveryDetails] = useState({
        name: "",
        phone: "",
        address: "",
        instructions: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const buyNowData = JSON.parse(localStorage.getItem("areesan_buy_now"));
        if (buyNowData) {
            const items = Array(buyNowData.qty).fill(buyNowData.item);
            setCartItems(items);
        } else {
            const cart = JSON.parse(localStorage.getItem("areesan_cart") || "[]");
            setCartItems(cart);
        }

        // Pre-fill from profile
        const storedUser = localStorage.getItem("areesan_user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setDeliveryDetails(prev => ({
                ...prev,
                name: user.name || "",
                phone: user.phone || "",
                address: user.address || ""
            }));
        }
    }, []);

    const total = cartItems.reduce((sum, p) => sum + p.price, 0);

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        const isBuyNow = !!localStorage.getItem("areesan_buy_now");

        // Simulate payment processing
        setTimeout(() => {
            const itemCounts = cartItems.reduce((acc, item) => {
                acc[item.name] = (acc[item.name] || 0) + 1;
                return acc;
            }, {});

            const itemsString = Object.entries(itemCounts)
                .map(([name, count]) => count > 1 ? `${name} (x${count})` : name)
                .join(', ');

            const orderId = `#ORD-${Math.floor(1000 + Math.random() * 9000)}`;
            const newOrder = {
                id: orderId,
                date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
                total: total,
                status: 'Processing',
                items: itemsString,
                paymentMethod: paymentMethod,
                delivery: deliveryDetails // Save delivery details
            };

            const existingOrders = JSON.parse(localStorage.getItem("areesan_orders") || "[]");
            localStorage.setItem("areesan_orders", JSON.stringify([newOrder, ...existingOrders]));

            setIsProcessing(false);
            setIsSuccess(true);

            if (isBuyNow) {
                localStorage.removeItem("areesan_buy_now");
            } else {
                localStorage.removeItem("areesan_cart");
                window.dispatchEvent(new Event("cartUpdated"));
            }
        }, 2000);
    };

    if (isSuccess) {
        return (
            <>
                <Header current="payment" />
                <main className="container payment-success">
                    <div className="success-card">
                        <div className="success-icon">✔️</div>
                        <h2>Order Placed!</h2>
                        <p>Thank you for your purchase. Your flowers will be delivered soon.</p>
                        <Link to="/" className="btn btn-primary">Back to Home</Link>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header current="payment" />
            <main className="container">
                <h2>Checkout & Payment</h2>
                <div className="payment-layout">
                    <form className="payment-forms" onSubmit={handlePayment}>
                        <section className="delivery-info">
                            <h3>Delivery Information</h3>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label>Recipient Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        required
                                        value={deliveryDetails.name}
                                        onChange={(e) => setDeliveryDetails({ ...deliveryDetails, name: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder="Phone for delivery"
                                        required
                                        value={deliveryDetails.phone}
                                        onChange={(e) => setDeliveryDetails({ ...deliveryDetails, phone: e.target.value })}
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label>Delivery Address</label>
                                    <textarea
                                        rows="3"
                                        placeholder="Enter full delivery address"
                                        required
                                        value={deliveryDetails.address}
                                        onChange={(e) => setDeliveryDetails({ ...deliveryDetails, address: e.target.value })}
                                    ></textarea>
                                </div>
                                <div className="form-group full-width">
                                    <label>Special Instructions (Optional)</label>
                                    <input
                                        type="text"
                                        placeholder="Apt #, floor, or special notes"
                                        value={deliveryDetails.instructions}
                                        onChange={(e) => setDeliveryDetails({ ...deliveryDetails, instructions: e.target.value })}
                                    />
                                </div>
                            </div>
                        </section>

                        <section className="payment-methods">
                            <h3>Select Payment Method</h3>
                            <div className="method-options">
                                <label className={`method-option ${paymentMethod === 'card' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>Credit / Debit Card</span>
                                </label>

                                <label className={`method-option ${paymentMethod === 'upi' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="upi"
                                        checked={paymentMethod === 'upi'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>UPI / Google Pay</span>
                                </label>

                                <label className={`method-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                    />
                                    <span>Cash on Delivery</span>
                                </label>
                            </div>

                            {paymentMethod === 'card' && (
                                <div className="card-details">
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        required
                                        value={cardData.number}
                                        onChange={(e) => setCardData({ ...cardData, number: e.target.value })}
                                    />
                                    <div className="row">
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            required
                                            value={cardData.expiry}
                                            onChange={(e) => setCardData({ ...cardData, expiry: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            required
                                            value={cardData.cvv}
                                            onChange={(e) => setCardData({ ...cardData, cvv: e.target.value })}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Card Holder Name"
                                        required
                                        value={cardData.name}
                                        onChange={(e) => setCardData({ ...cardData, name: e.target.value })}
                                    />
                                </div>
                            )}

                            {paymentMethod === 'upi' && (
                                <div className="upi-details">
                                    <input
                                        type="text"
                                        placeholder="Enter UPI ID (e.g., name@okaxis)"
                                        required
                                        value={upiId}
                                        onChange={(e) => setUpiId(e.target.value)}
                                    />
                                </div>
                            )}

                            <button type="submit" className="btn btn-primary pay-btn" disabled={isProcessing}>
                                {isProcessing
                                    ? "Processing..."
                                    : (paymentMethod === "cod" || (paymentMethod === "card" && cardData.number && cardData.expiry && cardData.cvv && cardData.name) || (paymentMethod === "upi" && upiId))
                                        ? "Place Order"
                                        : `Pay ₹${total}`
                                }
                            </button>
                        </section>
                    </form>

                    <aside className="checkout-summary">
                        <h3>Order Summary</h3>
                        <div className="summary-items">
                            {Object.entries(cartItems.reduce((acc, item) => {
                                if (!acc[item.name]) acc[item.name] = { count: 0, total: 0 };
                                acc[item.name].count += 1;
                                acc[item.name].total += item.price;
                                return acc;
                            }, {})).map(([name, data], idx) => (
                                <div key={idx} className="summary-item">
                                    <span>{name} {data.count > 1 ? `(x${data.count})` : ''}</span>
                                    <span>₹{data.total}</span>
                                </div>
                            ))}
                        </div>
                        <hr />
                        <div className="summary-total">
                            <span>Total Amount</span>
                            <span>₹{total}</span>
                        </div>
                    </aside>
                </div>
            </main >
            <Footer />
        </>
    );
}
