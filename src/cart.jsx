// src/cart.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("areesan_cart") || "[]");
    setCartItems(cart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("areesan_cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    // Notify header
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header current="cart" />
      <main className="container">
        <h2>My Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-grid">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-card">
                  <img src={item.img} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>₹{item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Total: ₹{totalPrice}</h3>
              <Link to="/payment" className="btn btn-primary">Checkout</Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
