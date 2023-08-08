import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "isLogin",
  initialState: {
    value: false,
  },
  reducers: {
    toggleLogin: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleLogin } = loginSlice.actions;

export default loginSlice.reducer;
