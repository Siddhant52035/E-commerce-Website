import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  phoneNumber: "",
};

const shippingSlice = createSlice({
  name: "shippingData",
  initialState, // Set initial state explicitly
  reducers: {
    getShippingData(state, action) {
      // Merge payload into state
      return { ...state, ...action.payload };
    },
  },
});

export const { getShippingData } = shippingSlice.actions;
export default shippingSlice.reducer;
