import axios from "axios";
const servalUrl = "http://localhost:8000/api";

const postRequest = async (endpoint, body) => {
  const response = await axios.post(`${servalUrl}${endpoint}`, body);
  if (response.statusText === "OK") {
    return response.data;
  } else {
    return false;
  }
};

// export const getRequest = async (endpoint,token) => {
//   const response = await axios.post(`${servalUrl}${endpoint}`,{Headers:{ "Authorization":token}});
//   if (response === "OK") {
//     return true;
//   } else {
//     return false;
//   }
// };

export default postRequest;
