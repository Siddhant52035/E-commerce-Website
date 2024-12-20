import React from "react";
import ProductCard from "../components/ProductCard";
import "E:/Portfolio-p1/SysQube/src/App.css";

import { categories, products } from "../Constants";
import Modal from "react-modal";

const Home = () => {
  return (
    <div className="root space-y-4 w-full px-0 2xl:px-10 pb-20 flex h-screen overflow-auto">
      <div className="w-[30%] h-full">
        <div className="mb-2 bg-div me-4 p-4 rounded-sm shadow-lg md:min-w-80 max-w-100">
          <div className="relative">
            <img
              src="/public/assets/category.svg"
              className="absolute
              top-2
              left-2 w-5 h-5"
            />

            <span className="font-semibold text-pretty text-2xl ps-12 mt-2">
              Categories
            </span>
            <hr className="mt-3" />
            <ul>
              {categories.map(({ category, id }) => (
                <li
                  key={id}
                  className="flex flex-col ps-12 h-10 pt-2 hover:bg-[#F0F0F0] hover:shadow-lg"
                >
                  <span className="text-pretty font-semibold text-base">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-[70%] h-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  mt-[-16px] sm:grid-cols-2 gap-4 h-full overflow-y-auto">
          {products.map(({ image, product, price, desc, id }) => (
            <ProductCard
              image={image}
              product={product}
              price={price}
              desc={desc}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
