import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/cartSlice";
import CustomButton from "../components/CustomButton";
import Topbar from "../components/Topbar";
import { toast } from "react-toastify";

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const shippingData = useSelector((state) => state.shippingData);
  const paymentData = useSelector((state) => state.paymentData);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const shippingCost = 5.0; // Example value
  const taxes = subtotal * 0.1; // Example 10% tax
  const totalAmount = subtotal + shippingCost + taxes;

  const formatPaymentCard = (cardNumber) => {
    return `**** **** **** ${cardNumber.slice(-4)}`;
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const formatter = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return formatter.format(date);
  };

  const now = Date.now();
  const formattedDate = formatDate(now);

  const handlePlaceOrder = () => {
    dispatch(clearCart()); // Clear the cart after placing the order
    toast.success("Your order has been placed successfully");
  };

  return (
    <div className="app-container">
      <Topbar />
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg mt-10">
        <h2 className="text-2xl font-bold mb-6">Shipping Bill</h2>

        {/* Shipping and Payment Information */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          {/* Shipping Information */}
          <div className="w-full md:w-1/2 pr-0 md:pr-4 text-left">
            <p className="text-lg mt-2 mb-2">Date: {formattedDate}</p>
            <p className="text-lg mb-2">
              Name: {shippingData.firstName} {shippingData.lastName}
            </p>
            <p className="text-lg mb-2">Address: {shippingData.address}</p>
            <p className="text-lg mb-2">
              City: {shippingData.city}, {shippingData.state}{" "}
              {shippingData.zipCode}
            </p>
            <p className="text-lg mb-2">Country: {shippingData.country}</p>
            <p className="text-lg mb-2">
              Contact-Number: {shippingData.phoneNumber}
            </p>
          </div>

          {/* Payment Information */}
          <div className="w-full md:w-1/2 pl-0 md:pl-4 text-left">
            <h3 className="text-xl font-semibold mb-2">Payment Information</h3>
            <p className="text-lg mb-2">
              Cardholder Name: {paymentData.cardholderName}
            </p>
            <p className="text-lg mb-2">
              Card Number: {formatPaymentCard(paymentData.cardNumber)}
            </p>
            <p className="text-lg mb-2">
              Expiration Date: {paymentData.expirationDate}
            </p>
          </div>
        </div>

        {/* Item Details Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 mb-4">
            <thead className="bg-rblack ">
              <tr className="bg-gray-100">
                <th className="py-2 text-white px-4 border-b border-gray-200 text-left">
                  Item Name
                </th>
                <th className="py-2 text-white px-4 border-b border-gray-200 text-left">
                  Item Price
                </th>
                <th className="py-2 text-white px-4 border-b border-gray-200 text-left">
                  Quantity
                </th>
                <th className="py-2 text-white px-4 border-b border-gray-200 text-left">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-2 px-4">{item.product}</td>
                  <td className="py-2 px-4">Rs. {item.price.toFixed(2)}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cost Breakdown */}
        <div className="bg-gray-100 p-4 rounded-md">
          <div className="flex justify-between">
            <span className="font-semibold">Subtotal:</span>
            <span>Rs. {subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-semibold">Shipping Cost:</span>
            <span>Rs. {shippingCost.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span className="font-semibold">Taxes:</span>
            <span>Rs. {taxes.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mt-4 font-bold">
            <span>Total Amount:</span>
            <span>Rs. {totalAmount.toFixed(2)}</span>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="flex justify-center mt-6">
          <CustomButton
            type="button"
            title="Place Order"
            containerStyles="text-lg font-semibold flex items-center justify-center w-full md:w-1/2 text-ascent-1 px-4 md:px-6 py-2 md:py-3 border border-[#666] rounded-sm hover:bg-rblack hover:text-white hover:rounded-sm transition duration-300"
            onClick={handlePlaceOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Order;
