import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceUsers(state, action) {
      state.items = action.payload.items;
    },
    addUser(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          lname: newItem.lname,
          username: newItem.username,
          email: newItem.email,
          password: newItem.password,
          isAdmin: newItem.isAdmin,
        });
      }
    },
    removeUser(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.changed = true;
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
      }
    },
    editUser: (state, action) => {
      const id = action.payload.id;
      state.items = state.items.map((item) => {
        if (item.id == id) return action.payload;
        return item;
      });
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice.reducer;
