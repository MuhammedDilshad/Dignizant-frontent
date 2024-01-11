import axios from "axios";

// export const Axios = axios.create({
//   baseURL: "http://localhost:3400/",
// });
// export const AxiosAdmin = axios.create({
//   baseURL: "http://localhost:3400/admin/",
// });
export const Axios = axios.create({
  baseURL: "https://dignizant-backend.onrender.com/",
});

export const AxiosAdmin = axios.create({
  baseURL: "https://dignizant-backend.onrender.com/admin/",
});
