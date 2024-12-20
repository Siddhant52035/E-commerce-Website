import React from "react";
import Topbar from "../components/Topbar";
import "E:/Portfolio-p1/SysQube/src/App.css";
import ShippingForm from "../components/ShippingForm";

const Shipping = () => {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <div className="flex-grow w-full px-4 sm:px-6 md:px-8 lg:px-10 pb-20 h-screen overflow-auto space-y-4">
        <Topbar />
        <ShippingForm />
      </div>
    </div>
  );
};

export default Shipping;
