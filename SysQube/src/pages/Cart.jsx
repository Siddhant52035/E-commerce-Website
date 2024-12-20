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
    <div className="space-y-2 w-full px-0 pb-20 h-screen overflow-auto">
      <div className="flex w-full p-4">
        {/* Left Side Div */}
        <div className="bg-gray-300 p-4 w-2/3">
          {cart.length === 0 ? (
            <p className="text-center text-lg mt-11">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center bg-white p-4 rounded-lg shadow-md"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.product}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold">{item.product}</h3>
                    <p className="text-gray-500">{item.desc}</p>
                    <p className="text-gray-900 font-bold">Rs. {item.price}</p>

                    {/* Quantity Controls */}
                    <div className="flex items-center mt-2">
                      <CustomButton
                        title="-"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                        containerStyles="text-base text-ascent-1 px-4  py-1 border border-[#666] rounded-sm hover:bg-rblack hover:text-white hover:rounded-sm transition duration-300"
                      />
                      <span className="mx-4 text-lg">{item.quantity}</span>
                      <CustomButton
                        title="+"
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                        containerStyles="text-base text-ascent-1 px-4 py-1  border border-[#666] rounded-sm hover:bg-rblack hover:text-white hover:rounded-sm transition duration-300"
                      />
                    </div>
                  </div>

                  {/* Remove Button */}
                  <CustomButton
                    title="Remove"
                    onClick={() => dispatch(removeFromCart(item.id))}
                    containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Right Side Div */}
        <div className="bg-gray-300 p-4 w-1/3 ">
          <CustomButton
            title="Clear All"
            onClick={() => dispatch(clearCart())}
            containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 mb-20 border border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
          />
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
