import { createSlice } from "@reduxjs/toolkit";

const INITIAL_LOGIN = {
  value: false,
};

export const counterSlice = createSlice({
  name: "isLogin",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = counterSlice.actions;

export default counterSlice.reducer;
