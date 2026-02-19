import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import Page Components
import Home from "./home.jsx";
import Shop from "./shop.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Login from "./login.jsx";
import Cart from "./cart.jsx";
import Payment from "./payment.jsx";
import Orders from "./orders.jsx";
import ProductDetails from "./productDetails.jsx";
import Profile from "./profile.jsx";
import Favourites from "./favourites.jsx";
import Toast from "./components/Toast.jsx";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Toast />
    </>
  );
}
