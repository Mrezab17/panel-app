import { replaceUsers } from "./usersSlice";
import axios from "axios";
const baseUrl = "/users.json";

export const fetchUsersData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = axios
        .get(baseUrl)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));

      return response;
    };

    try {
      const fetchedUsersList = await fetchData();
      dispatch(
        replaceCart({
          items: usersList || [],
        })
      );
    } catch (error) {
      console.log("Error Fetching at fetchUsersData");
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
