import React from "react";
import PaymentForm from "../components/PaymentForm";
import Topbar from "../components/Topbar";
import "E:/Portfolio-p1/SysQube/src/App.css";

const Payment = () => {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <div className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-10 pb-20 h-screen overflow-auto space-y-4">
        <Topbar />
        <PaymentForm />
      </div>
    </div>
  );
};

export default Payment;
