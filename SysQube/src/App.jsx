import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping.jsx";
import Payment from "./pages/Payment.jsx";
import Order from "./pages/Order.jsx";
import Topbar from "./components/Topbar.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { useSelector } from "react-redux";

function Layout() {
  return (
    <>
      <Topbar />
      <main className="w-[97%] mx-auto mt-4 ">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
function App() {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className="bg-bgColor" data-theme={theme}>
      <Routes>
        <Route element={<Layout />} path="/">
          <Route index element={<Home />} />
          <Route element={<Cart />} path="cart" />
          <Route element={<Shipping />} path="shipping" />
          <Route element={<Payment />} path="payment" />
          <Route element={<Order />} path="order" />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
