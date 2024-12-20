import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import shippingReducer from "./shippingSlice";
import paymentReducer from "./paymentSlice";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    shippingData: shippingReducer,
    paymentData: paymentReducer,
    theme: themeReducer,
    user: userReducer,
  },
});
