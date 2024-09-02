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
  initialState,
  reducers: {
    getShippingData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { getShippingData } = shippingSlice.actions;
export default shippingSlice.reducer;
