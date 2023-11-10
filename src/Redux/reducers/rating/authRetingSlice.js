import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogin: "",
  user: "",
};

const authRetingSlice = createSlice({
  name: "loginAuth",
  initialState,
  reducers: {},
});

export default authRetingSlice.reducer;
