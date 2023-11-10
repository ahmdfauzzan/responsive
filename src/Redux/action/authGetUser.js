import { reduxGetUser } from "../../services/auth/get_user";
import { fetchUserStart, fetchUserSuccess, setUser } from "../reducers/GetMe/authGetUserSlice";

export const getUser = () => (dispatch) => {
  reduxGetUser()
    .then((result) => {
      dispatch(setUser(result?.data));
      console.log(result);
      //   return result.data.data;
    })
    .catch((err) => {
      console.log(err.response.data.message);
      return err;
    });
};
