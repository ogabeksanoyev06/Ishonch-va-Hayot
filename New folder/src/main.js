import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@/assets/styles/main.scss";
import "./plugins/directives/click-outside";
import i18n from "./locales/i18n";
import Vuelidate from "vuelidate";
import VueMask from "v-mask";
import Moment from "vue-moment";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import velocity from "velocity-animate";
import Notifications from "vue-notification";
import ImageUploader from "vue-image-upload-resize";
import ApiService from "@/service/apiService";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import YmapPlugin from "vue-yandex-maps";
// import TokenService from "./service/TokenService";
Vue.use(Toast, {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
});
Vue.config.productionTip = false;
ApiService.init(process.env.VUE_APP_ROOT_API);
ApiService.mount401Interceptor();
// if (TokenService.getToken()) {
//   ApiService.setHeader();
//   ApiService.mount401Interceptor();
// }
Vue.config.productionTip = false;
Vue.component("app-loading", Loading);
Vue.use(VueMask);
Vue.use(Moment);
Vue.use(Vuelidate);
Vue.use(Notifications, { velocity });
Vue.use(ImageUploader);
Vue.use(YmapPlugin);

// Vue.use(api);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
