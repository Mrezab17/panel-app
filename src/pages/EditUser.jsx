import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserById, editUser } from "../store/usersSlice";
import EditForm from "../components/EditForm";

const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.items);
  const user = users[id];
  // const list = [
  //   {
  //     id: 1,
  //     name: "منوچهر ",
  //     lname: "زارع",
  //     username: "zare",
  //     email: "test@example.com",
  //     password: "123321",
  //   },
  //   {
  //     id: 2,
  //     name: "شاهپور",
  //     lname: "محمودیه",
  //     username: "shah",
  //     email: "omid.kadivar@example.net",
  //   },
  // ];
  const editHandler = (newInfo) => {
    editUser({ ...newInfo, id: id });
  };
  return (
    <>
      <div className="h-full w-full flex bg-primary justify-center ">
        <EditForm user={user} onEdit={editHandler} />
      </div>
    </>
  );
};

export default EditUser;
