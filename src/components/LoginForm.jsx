import React, { createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { Formik } from "formik";
import * as Yup from "yup";

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const LoginForm = (props) => {
  const initialValues = {
    username: "",
    password: "",
    recaptcha: "",
  };
  const reCaptchaRef = createRef();

  const LoginSchema = Yup.object().shape({
    username: Yup.string()
      .required("نام کاربری را وارد کنید")
      .min(3, "نام کاربری وارد شده معتبر نیست"),
    password: Yup.string()
      .required("رمز ورود را وارد کنید")
      .min(4, "رمز عبور وارد شده معتبر نیست"),
  });

  const submitForm = (values) => {
    props.submitHandler(values);
  };
  return (
    <div className="h-full w-full sm:w-1/2 bg-white flex flex-column items-center justify-center">
      <Formik
        initialValues={initialValues}
        onSubmit={submitForm}
        validationSchema={LoginSchema}
        validateOnChange={false}
        validateOnBlur={false}
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
                  className={`bg-white basis-5/12 pl-3 rounded `}
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
                  className={`bg-white basis-5/12 pl-3 rounded `}
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
                  ref={reCaptchaRef}
                  sitekey={TEST_SITE_KEY}
                  onChange={(value) => {
                    props.setFieldValue("recaptcha", value);
                    props.setSubmitting(false);
                  }}
                />
              </div>

              <div className="w-full flex flex-row h-20 justify-center pt-0">
                <input
                  type="submit"
                  disabled={props.isSubmitting}
                  className="h-10 w-6/12 border-2 text-center bg-transparent border-green-600 rounded-lg px-3 py-2 text-green-800 cursor-pointer hover:bg-green-600 hover:text-green-200 transition-all duration-500"
                  value={"ورود"}
                ></input>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
