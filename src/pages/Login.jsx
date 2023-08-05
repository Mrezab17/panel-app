import LoginForm from "../components/LoginForm";
const Login = () => {
  const submitHandler = () => {};
  return (
    <>
      <div className="h-full w-full flex">
        <LoginForm />
        <div className="h-full w-1/2 hidden sm:flex sm:w-1/2  bg-login bg-cover bg-center px-10"></div>
      </div>
    </>
  );
};

export default Login;
