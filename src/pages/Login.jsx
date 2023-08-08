import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { toggleLogin } from "../store/loginSlice";

const adminList = [];
const Login = () => {
  const isLogin = useSelector((state) => state.isLogin.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formIsValid = (form) => {
    for (let i = 0; i < adminList.length; i++) {
      const element = adminList[i];
      if (
        element.username === form.username &&
        element.password === form.password
      ) {
        return true;
      }
    }
    return false;
  };
  const submitHandler = (form) => {
    if (formIsValid(form)) {
    }
    if (true || formIsValid(form)) {
      dispatch(toggleLogin());
      navigate("/");
    }
  };
  return (
    <>
      <div className="h-full w-full flex">
        <LoginForm submitHandler={submitHandler} />
        <div className="h-full w-1/2 hidden sm:flex sm:w-1/2  bg-login bg-cover bg-center px-10"></div>
      </div>
    </>
  );
};

export default Login;
