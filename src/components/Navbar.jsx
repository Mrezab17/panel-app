"use client";

import { Dropdown } from "flowbite-react";
const Navbar = () => {
  const isLogin = true;
  const name = "محمدرضا";
  return (
    <div className="w-screen h-16 sm:h-20 bg-primary py-3 space-x-5 fixed ">
      {(isLogin && (
        <>
          <div className="text-secondary h-full w-2/12 text-sm sm:text-base px-2 py-2.5 text-center  float-left cursor-none">
            {""}
            پنل مدیریت {""}
          </div>
          <div className="text-secondary w-0 sm:w-2/12 h-full sm:text-base px-5 py-2.5 text-center float-right cursor-none hidden sm:block ">
            {" "}
            {name}{" "}
          </div>
          <button
            type="button"
            className="text-secondary h-full w-2/12 bg-gradient-to-r from-primary to-tertiary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-primary  rounded-lg text-base px-5 py-2.5 text-center   float-right"
          >
            {" "}
            خروج{" "}
          </button>
          <button
            type="button"
            className="text-secondary h-full  w-3/12 sm:w-2/12 bg-gradient-to-r from-primary to-tertiary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-primary  rounded-lg text-xs sm:text-base px-5 py-2.5 text-center  float-right"
          >
            {" "}
            ویرایش کاربران{" "}
          </button>
          <button
            type="button"
            className="text-secondary h-full w-3/12 sm:w-2/12 bg-gradient-to-r from-primary to-tertiary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-primary  rounded-lg test-xs sm:text-base px-5 py-2.5 text-center mx-2  float-right"
          >
            {" "}
            حذف کاربران{" "}
          </button>
        </>
      )) ||
        (!isLogin && (
          <>
            <button
              type="button"
              className="text-secondary w-2/12 bg-gradient-to-r from-primary to-tertiary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-primary  rounded-lg text-sm px-5 py-2.5 text-center mx-2  float-right"
            >
              {" "}
              ثبت نام{" "}
            </button>

            <button
              type="button"
              className="text-secondary w-2/12 bg-gradient-to-r from-primary to-tertiary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-primary  rounded-lg text-sm px-5 py-2.5 text-center mx-2  float-right"
            >
              {" "}
              ورود{" "}
            </button>
          </>
        ))}
    </div>
  );
};

export default Navbar;
