import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Suspense, lazy } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../store/usersActions";

import Navbar from "./Navbar";
import Loading from "./Loading";
import { useEffect } from "react";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const EditUsers = lazy(() => import("../pages/EditUsers"));
const EditUser = lazy(() => import("../pages/EditUser"));

const Content = () => {
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.isLogin.value);
  const isFetched = useSelector((state) => state.users.isFetched);

  useEffect(() => {
    if (!isFetched) dispatch(fetchUsersData());
  }, [dispatch, isFetched]);

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="w-screen h-screen bg-secondary ">
          <Navbar />
          <Routes>
            {!isLogin ? (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate to="/login" replace />}
                />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/register" element={<Register />} />
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate to="/editusers" replace />}
                />
                <Route exact path="/editusers" element={<EditUsers />} />
                <Route exact path="/edituser/:id" element={<EditUser />} />
              </>
            )}
            <Route path="/*" element={<ErrorPage error={404} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Content;
