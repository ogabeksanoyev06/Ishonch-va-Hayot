<template>
  <div>
    <AppHeader />
    <div class="page__wrap">
      <router-view />
    </div>
    <AppFooter />
    <notifications group="admin" position="top right" :width="350" />
  </div>
</template>
<script>
import AppFooter from "../components/layouts/default/app-footer/AppFooter";
import AppHeader from "../components/layouts/default/app-header/AppHeader";
import TokenService from "@/service/TokenService";
import { mapMutations } from "vuex";
export default {
  name: "MainLayout",
  components: { AppHeader, AppFooter },
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    setToken() {
      let accessToken = TokenService.getToken();
      if (accessToken !== null) {
        this.setAccessToken(accessToken);
        this.setIsLoggedOn(true);
      } else {
        this.setAccessToken(null);
        this.setIsLoggedOn(false);
      }
    },
  },
  computed: {},
  mounted() {
    this.setToken();
    if (TokenService.getToken() !== null) {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    }
  },
};
</script>

<style lang="scss" scoped>
.page__wrap {
  min-height: calc(100vh - 102px);
}
</style>

<style>
.vue-notification {
  padding: 10px;
  margin: 5px 5px 5px;
  font-size: 16px;
  color: #ffffff;
  background: #44a4fc;
  border-left: 5px solid #187fe7;
}
</style>
