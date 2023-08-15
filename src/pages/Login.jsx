import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.items);

  const findAdmin = (form) => {
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (
        element.username === form.username &&
        element.password === form.password &&
        element.isAdmin
      ) {
        return users[i];
      }
    }
    return null;
  };

  const submitHandler = (form) => {
    const admin = findAdmin(form);
    if (admin) {
      dispatch(login(admin));
      navigate("/");
    }
  };
  return (
    <>
      <div className="h-full w-full flex">
        <LoginForm submitHandler={submitHandler} />
        <div className=" h-full w-1/2 hidden sm:flex sm:w-1/2  sm:bg-login sm:bg-contain sm:bg-no-repeat sm:bg-white sm:bg-center px-10"></div>
      </div>
    </>
  );
};

export default Login;
