import { useNavigate } from "react-router-dom";

import LoginForm from "../components/LoginForm";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.item);

  const findAdmin = (form) => {
    //console.log("Function findAdmin");
    //console.log("users : " + users);
    for (let i = 0; i < users.length; i++) {
      const element = users[i];
      if (
        element.username === form.username &&
        element.password === form.password &&
        element.isAdmin
      ) {
        return users[i].id;
      }
    }
    return -1;
  };

  const submitHandler = (form) => {
    const adminId = findAdmin(form);
    if (adminId == -1) {
    } else {
      dispatch(login(users[adminId]));
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
