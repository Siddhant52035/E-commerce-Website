import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPaymentData } from "../redux/paymentSlice"; // Adjust path
import CustomButton from "./CustomButton";
import TextInput from "./TextInput";

const PaymentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(getPaymentData(data));
    navigate("/order");
  };

  const handleBackToShipping = () => {
    navigate("/shippingInfo");
  };

  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto bg-white p-4 sm:p-6 shadow-lg rounded-lg mt-6 sm:mt-10">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
        Payment Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextInput
          name="cardholderName"
          label="Cardholder Name"
          placeholder="Cardholder Name"
          type="text"
          register={register("cardholderName", {
            required: "Cardholder Name is required!",
          })}
          error={errors.cardholderName?.message}
        />

        <TextInput
          name="cardNumber"
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          type="text"
          register={register("cardNumber", {
            required: "Card Number is required!",
          })}
          error={errors.cardNumber?.message}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextInput
            name="expirationDate"
            label="Expiration Date (MM/YY)"
            placeholder="MM/YY"
            type="text"
            register={register("expirationDate", {
              required: "Expiration Date is required!",
            })}
            error={errors.expirationDate?.message}
          />
          <TextInput
            name="cvv"
            label="CVV"
            placeholder="123"
            type="text"
            register={register("cvv", {
              required: "CVV is required!",
            })}
            error={errors.cvv?.message}
          />
        </div>

        <div className="flex justify-between">
          <CustomButton
            title="Back to Shipping"
            onClick={handleBackToShipping}
            containerStyles="text-sm sm:text-base text-ascent-1 px-3 sm:px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
          <CustomButton
            type="submit"
            title="Review Order"
            containerStyles="text-sm sm:text-base text-ascent-1 px-3 sm:px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
