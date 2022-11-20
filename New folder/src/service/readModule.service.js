import ApiService from "./apiService";
const main = "main";
export default {
  readModule(data) {
    return ApiService.post(`${main}/User/ReadModule`, data);
  },
};
