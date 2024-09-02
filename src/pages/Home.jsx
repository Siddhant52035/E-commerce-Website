import React from "react";
import Topbar from "../components/Topbar";
import ProductCard from "../components/ProductCard";
import "E:/Portfolio-p1/SysQube/src/App.css";

import {
  img1,
  img10,
  img11,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../assets";
import Footer from "../components/Footer";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  return (
    <div className="app-container">
      <div className="home root space-y-4 w-full px-4 sm:px-6 md:px-8 2xl:px-10 pb-20 h-screen overflow-auto">
        <Topbar />

        {/* Center */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full overflow-y-auto">
          <ProductCard
            image={img1}
            product={"Millinium Watch"}
            price={1100}
            desc={"This is a Watch with 6 months gurantee"}
            id={uuidv4()}
          />
          <ProductCard
            image={img1}
            product={"Ultima Watch"}
            price={2250}
            desc={
              "This is an Ultima Watch. It is the best for it's price range"
            }
            id={uuidv4()}
          />
          <ProductCard
            image={img2}
            product={"Quartz Watch"}
            price={1600}
            desc={"This is a Quartz Watch. It's waterproof."}
            id={uuidv4()}
          />
          <ProductCard
            image={img3}
            product={"Nike Shoe"}
            price={2100}
            desc={"This is Nike Shoes with best grip and performance."}
            id={uuidv4()}
          />
          <ProductCard
            image={img4}
            product={" Puma Shoe"}
            price={11000}
            desc={"This is a Puma Shoe with top of the line product"}
            id={uuidv4()}
          />
          <ProductCard
            image={img5}
            product={"Stylish Shoe"}
            price={4600}
            desc={"With Style comes pride"}
            id={uuidv4()}
          />
          <ProductCard
            image={img6}
            product={"Watch"}
            price={800}
            desc={"This is an Ultima Watch"}
            id={uuidv4()}
          />
          <ProductCard
            image={img7}
            product={"Watch"}
            price={1000}
            desc={"This is an Ultima Watch"}
            id={uuidv4()}
          />
          <ProductCard
            image={img8}
            product={"Watch"}
            price={1000}
            desc={"This is an Ultima Watch"}
            id={uuidv4()}
          />
          <ProductCard
            image={img9}
            product={"Watch"}
            price={1000}
            desc={"This is an Ultima Watch"}
            id={uuidv4()}
          />
          <ProductCard
            image={img10}
            product={"Watch"}
            price={1000}
            desc={"This is an Ultima Watch"}
            id={uuidv4()}
          />
          <ProductCard
            image={img11}
            product={"Watch"}
            price={1000}
            desc={"This is an Ultima Watch"}
            id={uuidv4()}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
