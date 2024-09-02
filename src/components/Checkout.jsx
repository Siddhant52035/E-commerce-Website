import React from "react";
import { useSelector } from "react-redux";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.items);
  const shippingFee = 125;
  const navigate = useNavigate();

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleProceedToCheckout = () => {
    navigate("/shipping");
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center md:text-left">
        Order Summary
      </h2>

      <div className="flex flex-col md:flex-row justify-between text-gray-700">
        <span>Subtotal ({cart.length} items)</span>
        <span className="text-right md:text-left">Rs. {subTotal}</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-gray-700 mt-2">
        <span>Shipping Fee</span>
        <span className="text-right md:text-left">Rs. {shippingFee}</span>
      </div>

      <div className="flex flex-col md:flex-row mt-6 justify-between text-gray-700 mt-2">
        <span className="font-semibold text-xl">Total</span>
        <span className="font-semibold text-xl text-right md:text-left">
          Rs. {subTotal + shippingFee}
        </span>
      </div>

      <div className="mt-6 flex justify-center md:justify-start">
        <CustomButton
          title="Proceed To Checkout"
          onClick={handleProceedToCheckout}
          containerStyles="w-full md:w-auto text-base text-ascent-1 px-4 md:px-6 py-2 border border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
        />
      </div>
    </div>
  );
};

export default Checkout;
