import { API_ENDPOINT } from "../utils/api-endpoints";
import http3 from "../utils/http3";

export const reduxPopularMovie = async (page) => {
  console.log(page, "page service");
  return await http3.get(`${API_ENDPOINT.POPULAR}?language=en-US&page=${page}`);
};
