import axios from "axios";
export const fetchData = async (baseUrl) => {
  const response = await axios
    .get(baseUrl)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));

  return response;
};
