import { API_ENDPOINT } from "../utils/api-endpoints";
import http3 from "../utils/http3";

const baseURL = process.env.REACT_APP_SERVER;
const searchURL = API_ENDPOINT.SEARCH_MOVIE;

export const searchMovie = async (q) => {
  console.log(q, "query movie service");
  const search = await http3.get(`${baseURL}${searchURL}?page=${1}&query=${q}`);
  return search.data;
};
