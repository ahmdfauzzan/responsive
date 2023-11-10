import http3 from "../utils/http3";
import { API_ENDPOINT } from "../utils/api-endpoints";

export const reduxDetailMovie = async (id) => {
  console.log(id, "id film service");
  return await http3.get(API_ENDPOINT.DETAIL + id);
};
