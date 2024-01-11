import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:3400/",
});
export const AxiosAdmin = axios.create({
  baseURL: "http://localhost:3400/admin/",
});
