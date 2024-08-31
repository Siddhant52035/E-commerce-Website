import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { BsMoon, BsSunFill } from "react-icons/bs";

const Topbar = () => {
  const { register, handleSubmit } = useForm({ mode: "onBlur" });
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };

  const cart = () => {
    navigate("/cart");
  };

  return (
    <div className="sticky topbar w-full flex items-center justify-between py-1 md:py-6 px-4 bg-[#E3E3E3] rounded-2xl ">
      <div className="flex gap-2 items-center ">
        <Link to="/" className="flex gap-2 items-center">
          <span className="text-2xl text-[#065ad8] font-semibold">
            <img alt="SysQube" className="h-12 max-w-xs pt-3 items-start" />
          </span>
        </Link>

        <div>
          <CustomButton
            title="Home"
            onClick={home}
            containerStyles=" text-xl rounded-full  text-rblack font-semibold px-4 md:px-6 py-1 md:py-2 hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
        </div>

        <div>
          <CustomButton
            title="Cart"
            onClick={cart}
            containerStyles=" text-xl rounded-full text-rblack font-semibold px-4 md:px-6 py-1 md:py-2 hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
        </div>

        <div>
          <CustomButton
            title="Shipping Details"
            containerStyles=" text-xl rounded-full text-rblack font-semibold px-4 md:px-6 py-1 md:py-2 hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
        </div>
      </div>

      {/* ICONS */}
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <button>
          <BsSunFill />
        </button>

        <div>
          <CustomButton
            title="Log Out"
            containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
