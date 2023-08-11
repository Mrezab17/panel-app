import RegisterForm from "../components/RegisterForm";

import { useDispatch } from "react-redux";
import { addUser } from "../store/usersSlice";

const Register = () => {
  const dispatch = useDispatch();
  const submitHandler = (newUser) => {
    dispatch(addUser({ ...newUser, id: Math.random, isAdmin: false }));
  };
  return (
    <>
      <div className="h-full w-full flex bg-red-400">
        <RegisterForm onSubmit={submitHandler} />
        <div className="h-full w-1/2 hidden sm:flex sm:w-1/2  bg-register bg-cover bg-center px-10"></div>
      </div>
    </>
  );
};

export default Register;
