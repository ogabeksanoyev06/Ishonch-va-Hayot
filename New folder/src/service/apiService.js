import axios from "axios";
import TokenService from "./TokenService";
const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },
  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${TokenService.getToken()}`;
  },
  get(resource, config = {}) {
    return axios.get(resource, config);
  },
  post(resource, data, config = {}) {
    return axios.post(resource, data, config);
  },
  mount401Interceptor() {
    this._401interceptor = axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        console.log("INTERSEPTOR ICHIDA ERROR", error.response.status);
        // shuni qaresiz hoz
        this.i++;
        if (this.i == 1) {
          if (error.response.status === 401) {
            console.log("401");
            throw error;
          } else {
            if (error.response.status === 406) {
              this.$toast.error("Xatolik sodir bo'ldi");
            }
          }
        }
        this.i = 0;
        throw error;
      }
    );
  },

  unmount401Interceptor() {
    // Eject the interceptor
    axios.interceptors.response.eject(this._401interceptor);
  },
};

export default ApiService;
