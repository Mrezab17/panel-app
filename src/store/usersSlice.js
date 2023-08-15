import { createSlice, nanoid } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isFetched: false,
  },
  reducers: {
    setFetched(state) {
      state.isFetched = true;
    },
    replaceUsers(state, action) {
      state.items = action.payload.items;
    },
    addUser(state, action) {
      const newItem = action.payload.newUser;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: nanoid(),
          name: newItem.name,
          lname: newItem.lname,
          username: newItem.username,
          email: newItem.email,
          password: newItem.password,
          isAdmin: false,
        });
      }
    },
    removeUser(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
      }
    },
    editUser(state, action) {
      const newUser = action.payload;
      state.items = state.items.map((item) => {
        if (item.id === newUser.id) {
          return {
            id: item.id,
            name: newUser.name,
            lname: newUser.lname,
            username: newUser.username,
            email: newUser.email,
            password: item.password,
            isAdmin: item.isAdmin,
          };
        }
        return item;
      });
    },
  },
});

export const { addUser, editUser, removeUser, replaceUsers, setFetched } =
  usersSlice.actions;

export const getIsFetched = (state) => state.users.isFetched;
export default usersSlice.reducer;
