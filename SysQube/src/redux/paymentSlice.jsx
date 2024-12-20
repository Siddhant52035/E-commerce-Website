import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardholderName: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

const paymentSlice = createSlice({
  name: "paymentData",
  initialState, // Set initial state explicitly
  reducers: {
    getPaymentData(state, action) {
      // Merge payload into state
      return { ...state, ...action.payload };
    },
  },
});

export const { getPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;
