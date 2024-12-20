import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CustomButton from "./CustomButton";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/themeSlice";
import PostModal from "./PostModal";

const Topbar = () => {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleTheme = () => {
    const themeValue = theme === "Light" ? "Dark" : "Light";
    dispatch(setTheme(themeValue));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="topbar  w-[97%] mx-auto py-4  px-4 bg-div rounded-sm shadow-lg shadow-gray-400">
      <div className="flex gap-2 items-center justify-between">
        <Link to="/">
          <span className="text-4xl text-pretty font-bold text-[#800020]">
            Q
            <span className="font-semibold text-pretty text-xl text-rblack">
              uickSell
            </span>
          </span>
        </Link>

        <form className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            required
            className="w-[400px] h-10 border border-[#666] rounded-lg px-4 mt-2  "
          />
          <button>
            <img
              src="/public/assets/search.svg"
              className="w-6 h-6 absolute top-4 right-2"
            />
          </button>
        </form>

        <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
          <div className="relative  me-8 mt-2">
            <CustomButton
              title="Post for Free"
              onClick={openModal}
              containerStyles="text-sm  font-semibold text-ascent-1 ps-10 pe-2  py-1 md:py-2 border-2 border-[#666] rounded-md hover:bg-rblack hover:text-white hover:rounded-md transition duration-500"
            />
            <img
              src="/public/assets/plus-sign-icon.svg"
              className="absolute left-2 top-2 w-6 h-6"
            />
          </div>
          <PostModal isOpen={isModalOpen} closeModal={closeModal} />
          <button className="mt-2 me-2" onClick={handleTheme}>
            {theme == "Light" ? (
              <img
                src="/public/assets/light-mode-toggle.svg"
                className="w-12 h-12"
              />
            ) : (
              <img
                src="/public/assets/dark-mode-toggle.svg"
                className="w-12 h-12"
              />
            )}
          </button>

          <Link to="/cart">
            <img
              src="/public/assets/cart.svg"
              alt="cart"
              className="w-8 h-8 mx-2 mt-2"
            />
          </Link>

          <div>
            <Link to="/login">
              <span className="font-normal text-pretty text-lg ps-4  hover:shadow-lg">
                Login
              </span>
            </Link>
            <span className="font-thin text-3xl"> | </span>
            <Link to="/signup">
              <span className="font-normal text-pretty text-lg  pe-2   hover:shadow-lg">
                Sign Up
              </span>
            </Link>
          </div>

          {/* <div>
            <CustomButton
              title="Log Out"
              containerStyles="text-sm font-semibold text-ascent-1 px-4 md:px-6 py-1 md:py-2 border-2 border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-500"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
