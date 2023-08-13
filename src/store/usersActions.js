import { replaceUsers } from "./usersSlice";
import axios from "axios";
const baseUrl = "/users.json";

export const fetchUsersData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios
        .get(baseUrl)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      return response;
    };

    try {
      const fetchedUsersList = await fetchData();
      console.log("Fetched : " + fetchedUsersList);
      dispatch(
        replaceUsers({
          items: fetchedUsersList || [],
        })
      );
    } catch (error) {
      console.log("Error Fetching at fetchUsersData" + error);
    }
  };
};

export const sendUsers = (users) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      axios.post(baseUrl, { users, items });
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Error sending at fetchUsersData");
    }
  };
};
