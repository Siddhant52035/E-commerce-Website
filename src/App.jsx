import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping.jsx";
import Payment from "./pages/Payment.jsx";
import Order from "./pages/Order.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Shipping />} path="/shipping" />
        <Route element={<Payment />} path="/payment" />
        <Route element={<Order />} path="/order" />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
