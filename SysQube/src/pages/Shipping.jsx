import React from "react";
import Topbar from "../components/Topbar";
import "E:/Portfolio-p1/SysQube/src/App.css";
import ShippingForm from "../components/ShippingForm";

const Shipping = () => {
  return (
    <div className="space-y-4 w-full px-0 2xl:px-10 pb-20 h-screen overflow-auto">
      <ShippingForm />
    </div>
  );
};

export default Shipping;
