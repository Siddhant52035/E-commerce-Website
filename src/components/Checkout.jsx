import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.items);
  const shippingFee = 125;
  const navigate = useNavigate();

  // Calculate subtotal inside the component
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/shippingInfo");
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <div className="flex justify-between text-gray-700">
        <span>Subtotal ({cart.length} items)</span>
        <span>Rs. {subTotal}</span>
      </div>
      <div className="flex justify-between text-gray-700 mt-2">
        <span>Shipping Fee</span>
        <span>Rs. {shippingFee}</span>
      </div>
      <div className="flex mt-6 justify-between text-gray-700 mt-2">
        <span className="font-semibold text-xl">Total</span>
        <span className="font-semibold text-xl">
          Rs. {subTotal + shippingFee}
        </span>
      </div>
      <CustomButton
        title="Proceed To CheckOut"
        onClick={handleProceedToCheckout}
        containerStyles="text-base text-ascent-1 mt-6 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
      />
    </div>
  );
};

export default Checkout;
