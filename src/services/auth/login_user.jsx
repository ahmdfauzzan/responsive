// import { useMutation } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoints";
// import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import http3 from "../../utils/http3";

export const reduxLoginUser = async (input) => {
  return await http3.post(API_ENDPOINT.LOGIN_USER, input);
};
// const LoginUser = async (input) => {
//   return await http3
//     .post(API_ENDPOINT.LOGIN_USER, input)
//     .then((result) => {
//       CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
//       return result;
//     })
//     .catch((err) => {});
// };

// const useLoginUser = () => {
//   return useMutation(LoginUser);
// };

// export { LoginUser, useLoginUser };
