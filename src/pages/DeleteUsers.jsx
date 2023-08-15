import DeleteUserX from "../components/DeleteUserX";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../store/usersSlice";

const DeleteUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.items);
  const deleteHandler = (id) => {
    dispatch(removeUser(id));
  };
  return (
    <>
      <div className="h-full w-full flex flex-col space-y-2 bg-primary justify-center items-center">
        <div className="text-4xl text-secondary flex items-center justify-center mb-3">
          لیست کاربران
        </div>
        {users.map(
          (user) =>
            !user.isAdmin && (
              <DeleteUserX
                key={user.id}
                name={user.name}
                lname={user.lname}
                username={user.username}
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

export default DeleteUsers;
