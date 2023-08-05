import RegisterForm from "../components/RegisterForm";
const Login = () => {
  const submitHandler = () => {};
  return (
    <>
      <div className="h-full w-full flex bg-red-400">
        <RegisterForm />
        <div className="h-full w-1/2 hidden sm:flex sm:w-1/2  bg-register bg-cover bg-center px-10"></div>
      </div>
    </>
  );
};

export default Login;
