import DeleteUserX from "../components/DeleteUserX";
const DeleteUsers = () => {
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
  const deleteHandler = (id) => {
    //console.log(id);
  };
  return list.length == 0 ? (
    <NoUserFound />
  ) : (
    <>
      <div className="h-full w-full flex flex-col space-y-2 bg-primary justify-center items-center">
        <div className="text-4xl text-secondary flex items-center justify-center mb-3">
          لیست کاربران
        </div>
        {list.map((user) => (
          <DeleteUserX
            key={Math.random()}
            name={user.name}
            lname={user.lname}
            username={user.username}
            onDelete={() => {
              deleteHandler(user.id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default DeleteUsers;
