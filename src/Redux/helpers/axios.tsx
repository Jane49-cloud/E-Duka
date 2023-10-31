import axios from "axios";

export const axiosService = axios.create({
  baseURL: "http://13.245.28.232:8000",
});

axiosService.interceptors.request.use(async (req) => {
  let token = localStorage.getItem("userToken");
  if (token) {
    req.headers["x-access-token"] = token;
  }
  return req;
});
