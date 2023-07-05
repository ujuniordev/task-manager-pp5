import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

const customAxios = axios.create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === "development"
      ? "/"
      : "https://drf-task-manager.herokuapp.com/",
  headers: {
    "X-Custom-Header": "foobar",
  },
});

customAxios.withCredentials = true;

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