import axios from "axios";

const FRONT_TOKEN_KEY = "AuthorizationFront";
const FRONT_REFRESH_TOKEN_KEY = "RefreshFront";

const TokenService = {
  getToken() {
    return localStorage.getItem(FRONT_TOKEN_KEY);
  },
  saveToken(token) {
    localStorage.setItem(FRONT_TOKEN_KEY, token);
    axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  headersToken() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem(FRONT_TOKEN_KEY);
    return;
  },
  saveRefreshToken(token) {
    localStorage.setItem(FRONT_REFRESH_TOKEN_KEY, token);
  },
  removeToken() {
    localStorage.removeItem(FRONT_TOKEN_KEY);
  },
  removeRefreshToken() {
    localStorage.removeItem(FRONT_REFRESH_TOKEN_KEY);
  },
  getRefreshToken() {
    return localStorage.getItem(FRONT_REFRESH_TOKEN_KEY);
  },
};

export default TokenService;
