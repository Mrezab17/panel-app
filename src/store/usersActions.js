import { replaceUsers, setFetched, getIsFetched } from "./usersSlice";

import axios from "axios";
const baseUrl = "/users.json";

export const fetchUsersData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await axios
        .get(baseUrl)
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err));

      return response;
    };
    try {
      const fetchedUsersList = await fetchData();
      dispatch(
        replaceUsers({
          items: fetchedUsersList || [],
        })
      );
      dispatch(setFetched());
    } catch (error) {
      console.log("Error Fetching at fetchUsersData" + error);
    }
  };
};

export const sendUsers = (users) => {
  return async (dispatch, usersList) => {
    const sendRequest = async () => {
      const response = await axios.post(baseUrl, usersList).then((response) => {
        if (!response.ok) {
          throw new Error("Sending users data failed.");
        }
      });
    };

    try {
      const usersList = users.items;
      await sendRequest(usersList);
    } catch (error) {
      console.log("Error sending at fetchUsersData : \n" + error);
    }
  };
};
