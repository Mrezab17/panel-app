import EditUserX from "../components/EditUserX";
import NoUserFound from "../components/NoUserFound";
import { useNavigate } from "react-router-dom";

const EditUsers = () => {
  const navigate = useNavigate();
  const list = [
    {
      id: 1,
      name: "منوچهر ",
      lname: "زارع",
      username: "zare",
      email: "test@example.com",
    },
    {
      id: 2,
      name: "شاهپور",
      lname: "محمودیه",
      username: "shah",
      email: "omid.kadivar@example.net",
    },
  ];
  const editHandler = (id) => {
    console.log("Edit" + id);
    navigate(`/edituser/${id}`);
  };
  return list.length == 0 ? (
    <NoUserFound />
  ) : (
    <>
      <div className="h-full w-full flex flex-col space-y-2 bg-primary justify-center items-center">
        <div className="w-full sm:w-3/4 flex flex-row h-12  rounded pt-0">
          <div className="w-1/6 h-full flex items-center justify-center text-green-400">
            نام
          </div>
          <div className="w-1/6 h-full flex items-center justify-center text-green-400">
            نام خانوادگی
          </div>
          <div className="w-1/6 h-full flex items-center justify-center text-green-400">
            نام کاربری
          </div>
          <div className="w-2/6 h-full flex items-center justify-center text-green-400">
            ایمیل کاربر
          </div>
        </div>
        {list.map((user) => (
          <EditUserX
            key={Math.random()}
            name={user.name}
            lname={user.lname}
            username={user.username}
            email={user.email}
            onEdit={() => {
              editHandler(user.id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default EditUsers;
