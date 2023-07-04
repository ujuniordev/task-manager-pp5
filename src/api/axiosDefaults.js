import axios from "axios";

axios.defaults.baseURL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "/"
    : "https://drf-task-manager.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
