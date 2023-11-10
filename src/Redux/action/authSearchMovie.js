import { searchMovie } from "../../services/search-movie";
import { setSearchError, setSearchLoading, setSearchResults } from "../reducers/Search/searchSlice";

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    dispatch(setSearchLoading());
    const results = await searchMovie(query);
    dispatch(setSearchResults(results));
    console.log(results);
  } catch (error) {
    dispatch(setSearchError(error.message));
  }
};
