import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import adminsReducer from "./adminsSlice";
import usersReducer from "./usersSlice";

export default configureStore({
  reducer: {
    isLogin: loginReducer,
    users: usersReducer,
    admins: adminsReducer,
  },
});
