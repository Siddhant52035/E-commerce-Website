import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardholderName: "",
  cardNumber: "",
  expirationDate: "",
  cvv: "",
};

const paymentSlice = createSlice({
  name: "paymentData",
  initialState,
  reducers: {
    getPaymentData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { getPaymentData } = paymentSlice.actions;
export default paymentSlice.reducer;
