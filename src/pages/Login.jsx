import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.items);

  const findAdmin = (form) => {
    //console.log("Function findAdmin");
    //console.log("users : " + users);
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      console.log("Element:" + element.username);
      if (
        element.username === form.username &&
        element.password === form.password &&
        element.isAdmin
      ) {
        return users[i];
      }
    }
    return -1;
  };

  const submitHandler = (form) => {
    const admin = findAdmin(form);
    if (admin == -1) {
    } else {
      dispatch(login(admin));
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
