import { reduxPopularMovie } from "../../services/get-data-movie-popular";
import { setPopular } from "../reducers/movie/authMovieSlice";

// Redux action (getMoviePopular)
export const getMoviePopular = (page) => (dispatch) => {
  reduxPopularMovie(page) // Panggil fungsi dengan nomor halaman yang diberikan
    .then((result) => {
      dispatch(setPopular(result?.data));
      console.log(result);
    })
    .catch((err) => {
      return err;
    });
};
