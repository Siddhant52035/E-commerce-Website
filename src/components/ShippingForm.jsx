import React from "react";
import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getShippingData } from "../redux/shippingSlice";
import "E:/Portfolio-p1/SysQube/src/App.css";

const ShippingForm = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(getShippingData(data));
    nav("/payment");
  };

  const backToCart = () => {
    nav("/cart");
  };
  return (
    <div className="inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white w-full max-w-lg p-6 md:p-8 rounded-lg shadow-lg z-10">
        <h2 className="text-lg md:text-2xl font-bold text-center text-gray-800 mb-4 md:mb-6">
          Shipping Information
        </h2>
        <form
          className="space-y-4 md:space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <TextInput
              name="firstName"
              label="First Name"
              placeholder="First Name"
              type="text"
              styles="w-full text-left"
              register={register("firstName", {
                required: "First Name is required!",
              })}
              error={errors.firstName?.message}
            />
            <TextInput
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              type="text"
              styles="w-full text-left"
              register={register("lastName", {
                required: "Last Name is required!",
              })}
              error={errors.lastName?.message}
            />
          </div>

          <TextInput
            name="address"
            label="Address"
            placeholder="Street Address"
            type="text"
            styles="w-full text-left"
            register={register("address", {
              required: "Address is required!",
            })}
            error={errors.address?.message}
          />

          <div className="flex flex-col lg:flex-row gap-4">
            <TextInput
              name="city"
              label="City"
              placeholder="City"
              type="text"
              styles="w-full text-left"
              register={register("city", {
                required: "City is required!",
              })}
              error={errors.city?.message}
            />
            <TextInput
              name="state"
              label="State/Province"
              placeholder="State/Province"
              type="text"
              styles="w-full text-left"
              register={register("state", {
                required: "State/Province is required!",
              })}
              error={errors.state?.message}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <TextInput
              name="zipCode"
              label="Zip Code"
              placeholder="Zip Code"
              type="text"
              styles="w-full text-left"
              register={register("zipCode", {
                required: "Zip Code is required!",
              })}
              error={errors.zipCode?.message}
            />
            <TextInput
              name="country"
              label="Country"
              placeholder="Country"
              type="text"
              styles="w-full text-left"
              register={register("country", {
                required: "Country is required!",
              })}
              error={errors.country?.message}
            />
          </div>

          <TextInput
            name="phoneNumber"
            label="Phone Number"
            placeholder="Phone Number"
            type="text"
            styles="w-full text-left"
            register={register("phoneNumber", {
              required: "Phone Number is required!",
            })}
            error={errors.phoneNumber?.message}
          />

          <div className="flex flex-col md:flex-row justify-between w-full gap-4">
            <div className="p-2 md:p-4 w-full md:w-2/5">
              <CustomButton
                type="button"
                containerStyles="text-sm md:text-base text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
                title="Back to Cart"
                onClick={backToCart}
              />
            </div>
            <div className="p-2 md:p-4 w-full md:w-3/5">
              <CustomButton
                type="submit"
                containerStyles="text-sm md:text-base text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
                title="Proceed to Payment"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingForm;
