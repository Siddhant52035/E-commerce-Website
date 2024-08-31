import React from "react";
import Topbar from "../components/Topbar";
import ProductCard from "../components/ProductCard";
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
    <div className="home space-y-4 w-full px-0 2xl:px-10 pb-20 h-screen overflow-auto">
      <Topbar />

      {/*Center*/}
      <div className="grid grid-cols-4 gap-4 h-full overflow-y-auto">
        <ProductCard
          image={img1}
          product={"Watch"}
          price={1000}
          desc={"This is an Ultima Watch"}
          id={uuidv4()}
        />

        <ProductCard
          image={img1}
          product={"Watch"}
          price={1000}
          desc={"This is an Ultima Watch"}
          id={uuidv4()}
        />
        <ProductCard
          image={img2}
          product={"Watch"}
          price={1000}
          desc={"This is an Ultima Watch"}
          id={uuidv4()}
        />
        <ProductCard
          image={img3}
          product={"Shoe"}
          price={1000}
          desc={"This is an Ultima Watch"}
          id={uuidv4()}
        />
        <ProductCard
          image={img4}
          product={"Shoe"}
          price={1000}
          desc={"This is an Ultima Watch"}
          id={uuidv4()}
        />
        <ProductCard
          image={img5}
          product={"Shoe"}
          price={1000}
          desc={"This is an Ultima Watch"}
          id={uuidv4()}
        />
        <ProductCard
          image={img6}
          product={"Watch"}
          price={1000}
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
  );
};

export default Home;
