import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

const EditForm = (props) => {
  const initialValues = {
    username: props.user.username,
    email: props.user.email,
    name: props.user.name,
    lname: props.user.lname,
  };

  const LoginSchema = Yup.object().shape({
    name: Yup.string()
      .required("وارد کردن نام الزامیست")
      .min(3, "نام باید حداقل 3 حرف داشته باشد"),
    lname: Yup.string()
      .required("وارد کردن نام خانوادگی الزامیست")
      .min(4, "نام خانوادگی باید حداقل 4 حرف داشته باشد"),
    username: Yup.string().required("وارد کردن نام کاربری الزامیست"),

    email: Yup.string().email("ایمیل وارد شده معتبر نیست"),
  });

  const submitForm = (values) => {
    props.onEdit({
      username: values.username,
      email: values.email,
      name: values.name,
      lname: values.lname,
    });
  };
  return (
    <div className="h-full w-full sm:w-1/2 flex pt-36">
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
              className="w-full h-full flex flex-col rounded-md space-y-3  "
              onSubmit={handleSubmit}
            >
              <div className="w-full flex flex-row h-10 justify-center">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="نام جدید را وارد کنید"
                  className={`bg-white basis-5/12 pl-3 rounded `}
                />
              </div>

              {errors.name && touched.name && (
                <div className="w-full flex flex-row h-6 justify-center text-red-600 text-sm">
                  {errors.name}
                </div>
              )}

              <div className="w-full flex flex-row  h-10 justify-center">
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  value={values.lname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="نام خانوادگی را وارد کنید"
                  className={`bg-white basis-5/12 pl-3 rounded `}
                />
              </div>

              {errors.lname && touched.lname && (
                <div className="w-full flex flex-row h-6 justify-center text-red-600 text-sm">
                  {errors.lname}
                </div>
              )}

              <div className="w-full flex flex-row  h-10 justify-center">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="نام کاربری جدید را وارد کنید"
                  className={`bg-white basis-5/12 pl-3 rounded `}
                />
              </div>

              {errors.username && touched.username && (
                <div className="w-full flex flex-row h-6 justify-center text-red-600 text-sm">
                  {errors.username}
                </div>
              )}

              <div className="w-full flex flex-row  h-10 justify-center">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="ایمیل جدید را وارد کنید"
                  className={`bg-white basis-5/12 pl-3 rounded `}
                />
              </div>

              {errors.email && touched.email && (
                <div className="w-full flex flex-row h-6 justify-center text-red-600 text-sm">
                  {errors.email}
                </div>
              )}

              <div className="w-full flex flex-row h-10 justify-center bg-primary"></div>

              <div className="w-full flex flex-row h-20 justify-center pt-0">
                <input
                  type="submit"
                  disabled={!(dirty && isValid)}
                  className="h-10 w-6/12 border-2 text-center bg-transparent border-green-600 rounded-lg px-3 py-2 text-green-400 cursor-pointer hover:bg-green-600 hover:text-green-200 transition-all duration-500"
                  value={"ثبت تغییرات"}
                ></input>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditForm;
