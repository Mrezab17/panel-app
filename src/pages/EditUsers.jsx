import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/usersSlice";

import { useNavigate } from "react-router-dom";

import EditUserX from "../components/EditUserX";

const EditUsers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);

  const editHandler = (index) => {
    navigate(`/edituser/${index}`);
  };
  const deleteHandler = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      <div className="h-full w-full flex flex-col space-y-2 bg-primary justify-center items-center">
        <div className="w-full sm:w-3/4 flex flex-row h-12  rounded pt-0">
          <div className="w-1/6 h-full flex items-center justify-center text-secondary">
            نام
          </div>
          <div className="w-1/6 h-full flex items-center justify-center text-secondary">
            نام خانوادگی
          </div>
          <div className="w-1/6 h-full flex items-center justify-center text-secondary">
            نام کاربری
          </div>
          <div className="w-2/6 h-full flex items-center justify-center text-secondary">
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
                onDelete={() => {
                  deleteHandler(user.id);
                }}
              />
            )
        )}
      </div>
    </>
  );
};

export default EditUsers;
