import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import { BsSunFill } from "react-icons/bs";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const home = () => {
    navigate("/");
  };

  const cart = () => {
    navigate("/cart");
  };

  const bart = () => {
    navigate("/shipping");
  };
  const payment = () => {
    navigate("/payment");
  };
  const order = () => {
    navigate("/order");
  };

  const activeStyles = "bg-rblack text-white rounded-full";

  return (
    <div className="sticky topbar w-full flex items-center justify-between py-2 md:py-4 px-4 bg-primary rounded-2xl">
      <div className="flex flex-wrap gap-2 items-center">
        <Link to="/" className="flex gap-2 items-center">
          <span className="text-2xl text-[#065ad8] font-semibold">
            <img alt="SysQube" className="h-10 max-w-xs pt-3 items-start" />
          </span>
        </Link>

        <div>
          <CustomButton
            title="Home"
            onClick={home}
            containerStyles="text-base sm:text-lg md:text-xl rounded-full text-rblack font-semibold px-3 sm:px-4 md:px-6 py-1 md:py-2 transition duration-300 hover:bg-rblack hover:text-white hover:rounded-full"
          />
        </div>

        <div>
          <CustomButton
            title="Cart"
            onClick={cart}
            containerStyles={`text-base sm:text-lg md:text-xl rounded-full text-rblack font-semibold px-3 sm:px-4 md:px-6 py-1 md:py-2 transition duration-300 ${
              location.pathname === "/cart"
                ? activeStyles
                : "hover:bg-rblack hover:text-white hover:rounded-full"
            }`}
          />
        </div>

        <div>
          <CustomButton
            title="Shipping"
            onClick={bart}
            containerStyles={`text-base sm:text-lg md:text-xl rounded-full text-rblack font-semibold px-3 sm:px-4 md:px-6 py-1 md:py-2 transition duration-300 ${
              location.pathname === "/shipping"
                ? activeStyles
                : "hover:bg-rblack hover:text-white hover:rounded-full"
            }`}
          />
          <CustomButton
            title="Payment"
            onClick={payment}
            containerStyles={`text-base sm:text-lg md:text-xl rounded-full text-rblack font-semibold px-3 sm:px-4 md:px-6 py-1 md:py-2 transition duration-300 ${
              location.pathname === "/payment"
                ? activeStyles
                : "hover:bg-rblack hover:text-white hover:rounded-full"
            }`}
          />
          <CustomButton
            title="Order Details"
            onClick={order}
            containerStyles={`text-base sm:text-lg md:text-xl rounded-full text-rblack font-semibold px-3 sm:px-4 md:px-6 py-1 md:py-2 transition duration-300 ${
              location.pathname === "/order"
                ? activeStyles
                : "hover:bg-rblack hover:text-white hover:rounded-full"
            }`}
          />
        </div>
      </div>

      <div className="flex gap-3 sm:gap-4 items-center text-ascent-1 text-sm sm:text-md md:text-xl">
        <button>
          <BsSunFill />
        </button>

        <div>
          <CustomButton
            title="Log Out"
            containerStyles="text-xs sm:text-sm text-ascent-1 px-3 sm:px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
