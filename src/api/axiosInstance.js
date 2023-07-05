import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

const customAxios = axios.create({
  baseURL: "https://drf-task-manager.herokuapp.com/",
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
