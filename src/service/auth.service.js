import ApiService from "./apiService";
// import TokenService from "./TokenService";
const auth = "auth";
const main = "main";
// .post("auth/Login/GetToken", {
//     login: this.request.login,
//     password: this.request.password,
//     device_id: "1",
//   })
export default {
  login(data) {
    return ApiService.post(`${auth}/Login/GetToken`, data);
  },
  register(data) {
    return ApiService.post(`${main}/User/UserRegistration`, data);
  },
};
