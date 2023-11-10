import { useQuery } from "@tanstack/react-query";
import http3 from "../../utils/http3";
import { API_ENDPOINT } from "../../utils/api-endpoints";
import { toast } from "react-toastify";

// const fetchUserData = async ({ queryKey }) => {
//   const [_key] = queryKey;
//   return await http3
//     .get(_key)
//     .then((result) => {
//       const resultMe = result.data.data;
//       return resultMe;
//     })
//     .catch((err) => {
//       // toast.error(err.response.data.message);

//       alert(err.response.data.message);
//       if (err.response.status === 401) {
//         window.location.href = "/login";
//       }
//     });
// };

// //untuk Dinamis handle
// const useGetDataUser = (options) => {
//   return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
// };

// export { fetchUserData, useGetDataUser };

export const reduxGetUser = async () => {
  return await http3.get(API_ENDPOINT.GET_USER);
};
