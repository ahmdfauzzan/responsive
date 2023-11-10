import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

const getDetailMovie = createSlice({
  name: "detail",
  initialState,
  reducers: {
    setDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setDetail } = getDetailMovie.actions;

export default getDetailMovie.reducer;
