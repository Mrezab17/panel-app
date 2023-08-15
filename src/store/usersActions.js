import { replaceUsers, setFetched } from "./usersSlice";
import { fetchData } from "../api/fetchData";

const baseUrl = "/users.json";

export const fetchUsersData = () => {
  return async (dispatch) => {
    try {
      const fetchedUsersList = await fetchData(baseUrl);
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
