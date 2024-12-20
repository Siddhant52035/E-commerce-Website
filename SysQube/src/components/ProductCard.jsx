import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import CustomButton from "./CustomButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ product, image, price, desc, id }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);
  const [isMobile, setIsMobile] = useState(false);
  const [btnName, setBtnName] = useState("Add to Cart");

  if (window.innerWidth < 900) {
    setIsMobile(true);
  }

  if (isMobile) {
    setBtnName("Add...");
  }

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
    <div className=" bg-div p-4 rounded-sm shadow-lg group">
      <div className="flex justify-center group-hover:shadow-lg">
        <img
          src={image}
          alt="Product Image"
          className="w-full h-40 object-cover rounded-lg "
        />
      </div>

      <div className="mt-4">
        <h2 className="font-medium text-lg text-black text-center">
          {product ?? "Product Name"}
        </h2>

        <p className="text-xl font-bold text-black mt-2 text-center">{`Rs. ${price}`}</p>

        {/* <p className="text-sm text-gray-500 mt-2 text-center">
          {desc ?? "Short description of the product goes here."}
        </p> */}
      </div>

      {/* <div className="mt-4 flex justify-between items-center">
        <CustomButton
          title={btnName}
          onClick={handleAddToCart}
          containerStyles="text-semibold text-ascent-1 whitespace-nowrap max-h-10  px-4 md:px-6 py-1 md:py-2 border-2 border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
        />
        <CustomButton
          title="Buy Now"
          containerStyles="text-semibold text-ascent-1 whitespace-nowrap max-h-10 px-4 md:px-6 py-1 md:py-2 border-2 border-[#666] rounded-lg hover:bg-rblack hover:text-white hover:rounded-lg transition duration-300"
        />
      </div> */}
    </div>
  );
};

export default ProductCard;
