import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product, image, price, desc, id }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  const handleAddToCart = () => {
    const productToAdd = { image, product, price, desc, id, quantity: 1 };

    const itemIndex = cart.findIndex((item) => item.id === id);

    if (itemIndex >= 0) {
      toast.info("Product already exists!!");
    } else {
      dispatch(addToCart(productToAdd));
      toast.success("Product added successfully");
    }
  };

  return (
    <div className="mb-4 bg-primary p-4 rounded-xl shadow-lg max-w-xs sm:max-w-sm lg:max-w-md">
      {/* Product Image */}
      <div className="flex justify-center">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        {/* Product Name */}
        <h2 className="font-medium text-md sm:text-lg lg:text-xl text-gray-800">
          {product ?? "Product Name"}
        </h2>

        {/* Product Price */}
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mt-2">{`Rs. ${price}`}</p>

        {/* Product Description */}
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          {desc ?? "Short description of the product goes here."}
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex justify-between items-center">
        <CustomButton
          title="Add to Cart"
          onClick={handleAddToCart}
          containerStyles="text-xs sm:text-sm md:text-base text-ascent-1 px-2 sm:px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
        />
        <CustomButton
          title="Buy Now"
          containerStyles="text-xs sm:text-sm md:text-base text-ascent-1 px-2 sm:px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
        />
      </div>
    </div>
  );
};

export default ProductCard;
