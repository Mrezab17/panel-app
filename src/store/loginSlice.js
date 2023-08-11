import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "isLogin",
  initialState: {
    value: false,
    admin: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = true;
      state.admin = action.payload;
    },
    logout: (state) => {
      state.value = false;
      state.admin = null;
    },
  },
});

export const { logout, login } = loginSlice.actions;

export default loginSlice.reducer;
