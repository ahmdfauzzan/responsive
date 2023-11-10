import { useMutation, useQuery } from "@tanstack/react-query";
import http3 from "../../utils/http3";
import { API_ENDPOINT } from "../../utils/api-endpoints";
// import http from "../utils/http";
// import { API_ENDPOINT } from "../utils/api-endpoints";

//untuk hit API
const RegisterUser = async (input) => {
  return await http3
    .post(API_ENDPOINT.REGISTER_USER, input)
    .then((result) => {
      window.location.href = "/login";
    })
    .catch((err) => {
      alert(err.response.data.message);
      console.log(err.response.data.message);
    });
};

//untuk Dinamis handle
const useCreateUser = () => {
  return useMutation(RegisterUser);
};

export { RegisterUser, useCreateUser };
