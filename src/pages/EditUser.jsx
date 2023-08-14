import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../store/usersSlice";
import EditForm from "../components/EditForm";

const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users.items);
  const user = users[id];
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
    //   {
    //   "id": 1,
    //   "name": "منوچهر ",
    //   "lname": "زارع",
    //   "username": "zare",
    //   "email": "test@example.com",
    //   "password": "123321",
    //   "isAdmin": false
    // }
    dispatch(
      editUser({
        id: users[id].id,
        name: newInfo.name,
        lname: newInfo.lname,
        username: newInfo.username,
        email: newInfo.email,
      })
    );
    navigate("/editusers");
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
