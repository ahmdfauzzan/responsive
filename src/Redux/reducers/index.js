import { combineReducers } from "@reduxjs/toolkit";
import authLogin from "./auth/authLogin";
// import authRetingSlice from "./rating/authRetingSlice";
// import authLogin from "./auth/authLogin";
import authMovieSlice from "./movie/authMovieSlice";
import authGetUser from "./GetMe/authGetUserSlice";
import authDetailMovieSlice from "./movie/authDetailMovieSlice";
import searchSlice from "./Search/searchSlice";

// import authRetingSlice from "./rating/authRetingSlice";

// combine reducer adalah tempat dimana kita men setup
// apa saja reducer yang kita gunakan dalam aplikasi
export default combineReducers({
  auth: authLogin,
  movies: authMovieSlice,
  user: authGetUser,
  detailMovie: authDetailMovieSlice,
  search: searchSlice,
});
