import { createSlice } from "@reduxjs/toolkit";
import { CookieStorage, CookiesKeys } from "../../../utils/cookies";

const tokenFromCookie = CookieStorage.get(CookiesKeys.AuthToken);

const initialState = {
  token: tokenFromCookie ? tokenFromCookie : undefined,
  isLogin: "",
  user: "",
};

const authLoginSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      //   state = { ...state, isLogin: action.payload };
      state.isLogin = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, setIsLoggedIn, setUser } = authLoginSlice.actions;

export default authLoginSlice.reducer;
