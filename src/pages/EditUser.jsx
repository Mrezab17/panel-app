import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";

const EditUser = (props) => {
  const { id } = useParams();
  const list = [
    {
      id: 1,
      name: "منوچهر ",
      lname: "زارع",
      username: "zare",
      email: "test@example.com",
      password: "123321",
    },
    {
      id: 2,
      name: "شاهپور",
      lname: "محمودیه",
      username: "shah",
      email: "omid.kadivar@example.net",
    },
  ];

  return (
    <>
      <div className="h-full w-full flex bg-primary justify-center ">
        <EditForm user={list[id - 1]} />
      </div>
    </>
  );
};

export default EditUser;
