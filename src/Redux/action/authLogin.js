import { CookieStorage, CookiesKeys } from "../../utils/cookies";
import { setToken } from "../reducers/auth/authLogin";
import { reduxLoginUser } from "../../services/auth/login_user";

//untuk login action
export const LoginUser = (input) => async (dispatch) => {
  try {
    const result = await reduxLoginUser(input);
    CookieStorage.set(CookiesKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token));
    return true;
  } catch (err) {
    alert(err.response.data.message);
    console.log(err.response.data.message);
    return false;
  }
};

//untuk logout
export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookiesKeys.AuthToken);
};
