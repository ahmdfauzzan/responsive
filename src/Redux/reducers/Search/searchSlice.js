// searchSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
      state.loading = false;
      state.error = null;
    },
    setSearchLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setSearchError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setSearchResults, setSearchLoading, setSearchError } = searchSlice.actions;

export default searchSlice.reducer;
