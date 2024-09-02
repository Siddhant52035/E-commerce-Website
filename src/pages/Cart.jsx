import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../redux/cartSlice";
import CustomButton from "../components/CustomButton";
import Topbar from "../components/Topbar";
import Checkout from "../components/Checkout";
import "E:/Portfolio-p1/SysQube/src/App.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  return (
    <div className="app-container">
      <div className="space-y-2 w-full px-4 sm:px-6 md:px-8 pb-20 h-screen overflow-auto">
        <Topbar />
        <div className="flex flex-col md:flex-row w-full p-4 space-y-4 md:space-y-0">
          {/* Left Side Div */}
          <div className="bg-gray-300 p-4 w-full md:w-2/3 rounded-lg">
            {cart.length === 0 ? (
              <p className="text-center text-lg mt-11">Your cart is empty</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-lg shadow-md space-y-4 sm:space-y-0"
                  >
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.product}
                      className="w-24 h-24 object-cover rounded-lg sm:mr-4"
                    />

                    {/* Product Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="text-xl font-semibold">{item.product}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                      <p className="text-gray-900 font-bold">
                        Rs. {item.price}
                      </p>

                      <div className="flex justify-center sm:justify-start items-center mt-2">
                        <CustomButton
                          title="-"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity - 1)
                          }
                          containerStyles="text-base text-ascent-1 px-4 py-1 border border-[#666] rounded-sm hover:bg-rblack hover:text-white hover:rounded-sm transition duration-300"
                        />
                        <span className="mx-4 text-lg">{item.quantity}</span>
                        <CustomButton
                          title="+"
                          onClick={() =>
                            handleQuantityChange(item.id, item.quantity + 1)
                          }
                          containerStyles="text-base text-ascent-1 px-4 py-1 border border-[#666] rounded-sm hover:bg-rblack hover:text-white hover:rounded-sm transition duration-300"
                        />
                      </div>
                    </div>

                    {/* Remove Button */}
                    <div className="flex justify-center sm:justify-end mt-4 sm:mt-0">
                      <CustomButton
                        title="Remove"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Side Div */}
          <div className="bg-gray-300 p-4 w-full md:w-1/3 rounded-lg">
            <div className="mb-4 flex justify-center md:justify-start">
              <CustomButton
                title="Clear All"
                onClick={() => dispatch(clearCart())}
                containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 mb-4 border border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
              />
            </div>
            <Checkout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
