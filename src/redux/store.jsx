import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import shippingReducer from "./shippingSlice";
import paymentReducer from "./paymentSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shippingData: shippingReducer,
    paymentData: paymentReducer,
  },
});
