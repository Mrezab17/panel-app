import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "isLogin",
  initialState: {
    value: false,
    admin: null,
  },
  reducers: {
    login: (state, payload) => {
      state.value = true;
      state.admin = payload;
    },
    logout: (state) => {
      state.value = false;
      state.admin = null;
    },
  },
});

export const { logout, login } = loginSlice.actions;

export default loginSlice.reducer;
