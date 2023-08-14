import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

import loginReducer from "./loginSlice";
import usersReducer from "./usersSlice";

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);
const persistedUsersReducer = persistReducer(persistConfig, usersReducer);

const store = configureStore({
  reducer: {
    isLogin: persistedLoginReducer,
    users: persistedUsersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
export default store;
export const persistor = persistStore(store);
