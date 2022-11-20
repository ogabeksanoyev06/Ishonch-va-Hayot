import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    accessToken: null,
    isLoggedOn: false,
    loading: false,
    testSolving: true,
    testResults: null,
    preTest: true,
    readModule: null,
    lang: true,
    sertificate: true,
  },
  getters: {
    user: (state) => state.user,
    accessToken: (state) => state.accessToken,
    isLoggedOn: (state) => state.isLoggedOn,
    loading: (state) => state.loading,
    testSolving: (state) => state.testSolving,
    testResults: (state) => state.testResults,
    preTest: (state) => state.preTest,
    setReadModule: (state) => state.readModule,
    sertificate: (state) => state.sertificate,
  },
  mutations: {
    setUser: (state, data) => (state.user = data),
    setAccessToken: (state, data) => (state.accessToken = data),
    setIsLoggedOn: (state, data) => (state.isLoggedOn = data),
    setLoading: (state, data) => (state.loading = data),
    setTestSolving: (state, data) => (state.testSolving = data),
    setTestResults: (state, data) => (state.testResults = data),
    setPreTest: (state, data) => (state.preTest = data),
    setReadModule: (state, data) => (state.readModule = data),
    setLang: (state, data) => (state.lang = data),
    setSertificate: (state, data) => (state.sertificate = data),
  },
  actions: {
    async getUser({ commit }, payload) {
      try {
        commit("setLoading", true);
        await axios
          .get("main/User/GetUserByToken", payload)
          .then((data) => {
            if (!data.error && data) {
              commit("setUser", data);
            }
          })
          .catch((error) => {
            commit("setLoading", false);
            console.log("Error on getting user by token" + ": " + error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      } catch (e) {
        commit("setLoading", false);
        console.log(e);
      }
    },
    async getTestResults({ commit }, payload) {
      try {
        commit("setLoading", true);
        await axios
          .get("main/Test/GetResult", payload)
          .then((res) => {
            if (!res.error && res) {
              commit("setTestResults", res.data);
            }
          })
          .catch((error) => {
            commit("setLoading", false);
            console.log("Error on getting test Results" + ": " + error);
          })
          .finally(() => {
            commit("setLoading", false);
          });
      } catch (error) {
        commit("setLoading", false);
        console.log(error);
      }
    },
    async getReadModule({ commit }, payload) {
      try {
        await axios.get("main/User/ReadModuleList", payload).then((res) => {
          if (!res.error && res) {
            commit("setReadModule", res);
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
  },

  modules: {},
  plugins: [createPersistedState()],
});
