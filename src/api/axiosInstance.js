import axios from "axios";

axios.defaults.baseURL = "https://drf-task-manager.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();

customAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      switch (error.response.status) {
        case 401 || 403:
          localStorage.clear("tmng-user");
          window.location = "/signin";
          break;
  
        default:
          return Promise.reject(error);
      }
    }
  );
  
  export default customAxios;