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
    editUser(state, action) {
      const newUser = action.payload;
      state.changed = true;
      state.items = state.items.map((item) => {
        if (item.id === newUser.id) {
          return {
            id: item.id,
            name: newUser.name,
            lname: newUser.lname,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            isAdmin: item.isAdmin,
          };
        }
        return item;
      });
    },
  },
});

export const { addUser, editUser, removeUser, replaceUsers } =
  usersSlice.actions;

export default usersSlice.reducer;
