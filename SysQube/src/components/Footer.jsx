import React from "react";

const Footer = () => {
  return (
    <section className="px-5  pt-7 pb-8 w-[95%] mx-auto mt-8 border-t border-black flex justify-between items-center flex-wrap gap-5 ">
      <div className="text-black flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-3 ">
        <div className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </div>
        <div className="social-icon">
          <img
            src="/assets/Facebook.svg"
            alt="twitter"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/instagram.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div>
        <div className="social-icon">
          <img
            src="/assets/LinkedIn.svg"
            alt="instagram"
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
      <p className="text-black"> 2024 Siddhant All rights reserved.</p>
    </section>
  );
};

export default Footer;
