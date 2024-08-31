import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import TextInput from "../components/TextInput";

const PaymentInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("Payment Info Submitted:", data);
    navigate("/review"); // Redirect to review order page
  };

  const handleBackToShipping = () => {
    navigate("/shippingInfo"); // Navigate back to shipping page
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Payment Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextInput
          label="Cardholder Name"
          placeholder="Cardholder Name"
          type="text"
          register={register("cardholderName", {
            required: "Cardholder Name is required!",
          })}
          errors={errors.cardholderName}
        />

        <TextInput
          label="Card Number"
          placeholder="1234 5678 9012 3456"
          type="text"
          register={register("cardNumber", {
            required: "Card Number is required!",
            pattern: {
              value: /^[0-9]{16}$/,
              message: "Invalid Card Number. Must be 16 digits.",
            },
          })}
          errors={errors.cardNumber}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <TextInput
            label="Expiration Date (MM/YY)"
            placeholder="MM/YY"
            type="text"
            register={register("expirationDate", {
              required: "Expiration Date is required!",
              pattern: {
                value: /^(0[1-9]|1[0-2])\/?([0-9]{2})$/,
                message: "Invalid Expiration Date. Format should be MM/YY.",
              },
            })}
            errors={errors.expirationDate}
          />
          <TextInput
            label="CVV"
            placeholder="123"
            type="text"
            register={register("cvv", {
              required: "CVV is required!",
              pattern: {
                value: /^[0-9]{3,4}$/,
                message: "Invalid CVV. Must be 3 or 4 digits.",
              },
            })}
            errors={errors.cvv}
          />
        </div>

        <div className="flex justify-between">
          <CustomButton
            title="Back to Shipping"
            onClick={handleBackToShipping}
            containerStyles="text-base  text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
          <CustomButton
            type="submit"
            title="Review Order"
            containerStyles="text-base  text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full hover:bg-rblack hover:text-white hover:rounded-full transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentInfo;
