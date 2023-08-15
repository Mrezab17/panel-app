import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import EditUserX from "../components/EditUserX";

const EditUsers = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.items);

  // const list = [
  //   {
  //     id: 1,
  //     name: "منوچهر ",
  //     lname: "زارع",
  //     username: "zare",
  //     email: "test@example.com",
  //   },
  //   {
  //     id: 2,
  //     name: "شاهپور",
  //     lname: "محمودیه",
  //     username: "shah",
  //     email: "omid.kadivar@example.net",
  //   },
  // ];
  const editHandler = (index) => {
    navigate(`/edituser/${index}`);
  };
  return (
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
        {users.map(
          (user, index) =>
            !user.isAdmin && (
              <EditUserX
                key={user.id}
                name={user.name}
                lname={user.lname}
                username={user.username}
                email={user.email}
                onEdit={() => {
                  editHandler(index);
                }}
              />
            )
        )}
      </div>
    </>
  );
};

export default EditUsers;
