import React from "react";
import TextInput from "../components/TextInput";
import CustomButton from "../components/CustomButton";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const nav = useNavigate();

  const submit = async (data) => {
    try {
      const res = await axios.post("http://localhost:3005/signup", data);
      if (res == 200) {
        toast.success(res.data.message);

        dispatch(setUser(res.data.user));
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="bg-bgColor w-full h-[100vh] flex items-center justify-center p-6">
      <div className="w-full md:w-[50%] h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-sm overflow-hidden shadow-xl">
        <div className="w-full lg:w-[90%] mx-auto h-full p-10 2xl:px-20 flex flex-col justify-center ">
          <p className="text-ascent-1 text-lg font-semibold">
            Create your account
          </p>

          <form
            className="py-8 flex flex-col gap-5"
            onClick={handleSubmit(submit)}
          >
            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="firstName"
                label="First Name"
                placeholder="First Name"
                type="text"
                styles="w-full"
                register={register("firstName", {
                  required: "First Name is required!",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />

              <TextInput
                name="lastName"
                label="Last Name"
                placeholder="Last Name"
                type="lastName"
                styles="w-full"
                register={register("lastName", {
                  required: "Last Name is required",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>

            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={register("email", {
                required: "Email Address is required",
              })}
              styles="w-full"
              error={errors.email ? errors.email?.message : ""}
            />

            <div className="w-full flex flex-col lg:flex-row gap-1 md:gap-2">
              <TextInput
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />

              <TextInput
                label="Confirm Password"
                placeholder="Password"
                type="password"
                styles="w-full"
                register={register("cPassword", {
                  validate: (value) => {
                    const { password } = getValues();

                    if (password != value) {
                      return "Passwords do no match";
                    }
                  },
                })}
                error={errors.cPassword ? errors.cPassword?.message : ""}
              />
            </div>

            <CustomButton
              type="submit"
              containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
              title="Create Account"
            />
          </form>

          <p className="text-ascent-2 text-base text-center">
            Already has an account?{" "}
            <Link
              to="/login"
              className="text-[#065ad8] font-semibold ml-2 cursor-pointer"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
