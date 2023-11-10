import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popular: [],
};

const getMoviePopular = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setPopular: (state, action) => {
      state.popular = action.payload;
    },
  },
});

export const { setPopular, setCurrentPage } = getMoviePopular.actions;

export default getMoviePopular.reducer;
