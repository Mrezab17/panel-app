import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Suspense, lazy, useState, useEffect } from "react";

import Navbar from "./Navbar";
import Loading from "./Loading";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));
const isLogin = false;

const Content = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className="w-screen h-screen bg-secondary ">
          <Navbar />
          {isLogin ? (
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
                element={<Navigate to="/login" replace />}
              />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route path="/*" element={<ErrorPage error={404} />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Content;
