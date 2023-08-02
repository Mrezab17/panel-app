import React, { useState, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
    recaptcha: "",
  };
  const reCaptchaRef = createRef();
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required("نام کاربری را وارد کنید"),
    password: Yup.string().required("رمز ورود را وارد کنید"),
    recaptcha: Yup.string().required("عدد مقابل را وارد کنید"),
  });

  const submitForm = (values) => {
    reCaptchaRef.current.execute();
    console.log("Form Sub");
  };
  return (
    <div className="h-full w-full sm:w-1/2 bg-white flex flex-column items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={LoginSchema}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <form
              className="w-3/4 h-2/4 flex flex-col rounded-md bg-opacity-50  pt-10"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-row row-span-1 h-10 justify-center">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="نام کاربری خود را وارد کنید"
                  className={`bg-secondary basis-5/12 pl-3 rounded `}
                />
              </div>
              <div className="w-full flex flex-row row-span-1 h-10 justify-center">
                {errors.username && touched.username && (
                  <div className=" w-5/12 pl-3 text-red-600 float-left inline-block">
                    {errors.username}
                  </div>
                )}
                {errors.lname && touched.lname && (
                  <div className=" w-6/12 text-red-600 float-right inline-block ">
                    {errors.lname}
                  </div>
                )}
              </div>
              <div className="w-full flex flex-row row-span-1 h-10 justify-center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="رمز عبور خود را وارد کنید"
                  className={`bg-secondary basis-5/12 pl-3 rounded `}
                />
              </div>
              <div className="w-full flex flex-row row-span-1 h-10 justify-center">
                {errors.password && touched.password && (
                  <div className=" w-5/12 pl-3 text-red-600 float-left inline-block">
                    {errors.password}
                  </div>
                )}
              </div>
              <div className="w-full flex flex-row row-span-1 h-20 justify-center">
                <ReCAPTCHA
                  className=" basis-5/12 pl-3 rounded"
                  sitekey="6Le2nREUAAAAALYuOv7X9Fe3ysDmOmghtj0dbCKW"
                  render="explicit"
                  theme="light"
                />
              </div>
              <div className="w-full flex flex-row row-span-1 h-10 justify-center">
                {errors.recaptcha && touched.recaptcha && (
                  <div className=" w-5/12 pl-3 text-red-600 float-left inline-block">
                    {errors.recaptcha}
                  </div>
                )}
              </div>

              <div className="w-full flex flex-row row-span-1 h-10 justify-center">
                <input
                  type="submit"
                  className="bg-green-500 basis-2/12 rounded-md cursor-pointer hover:bg-green-700 hover:basis-3/12"
                  disabled={!(dirty && isValid)}
                  value={"وارد شو"}
                />
              </div>
            </form>
          );
        }}
      </Formik>
      {/* 
      <form action="" onSubmit={submitHandler} >
        <input type="text" />
        <input type="password" />
        <input type="submit" className={`cursor-pointer`} />
      </form> */}
    </div>
  );
};

export default LoginForm;
