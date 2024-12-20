import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
