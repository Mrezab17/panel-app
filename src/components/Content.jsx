import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData, sendUsers } from "../store/usersActions";

import Navbar from "./Navbar";
import Loading from "./Loading";
import { useEffect } from "react";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const DeleteUsers = lazy(() => import("../pages/DeleteUsers"));
const EditUsers = lazy(() => import("../pages/EditUsers"));
const EditUser = lazy(() => import("../pages/EditUser"));

const Content = () => {
  const isLogin = useSelector((state) => state.isLogin.value);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  //runs only Once
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
  //every time users Change posts new users
  useEffect(() => {
    if (users.changed) {
      dispatch(sendUsers(users));
    }
  }, [users, dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="w-screen h-screen bg-secondary ">
          <Navbar />
          {!isLogin ? (
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate to="/login" replace />}
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/*" element={<ErrorPage error={404} />} />
            </Routes>
          ) : (
            <Routes>
              <Route
                exact
                path="/"
                element={<Navigate to="/editusers" replace />}
              />
              <Route exact path="/deleteusers" element={<DeleteUsers />} />
              <Route exact path="/editusers" element={<EditUsers />} />
              <Route exact path="/edituser/:id" element={<EditUser />} />
              <Route path="/*" element={<ErrorPage error={404} />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Content;
