import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Topbar from "./components/Topbar";
import Cart from "./pages/Cart";
import ShippingInfo from "./pages/ShippingInfo";
import Payment from "./pages/PaymentInfo.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Topbar />} path="/topbar" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Payment />} path="/payment" />
        <Route element={<ShippingInfo />} path="/shippingInfo" />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
