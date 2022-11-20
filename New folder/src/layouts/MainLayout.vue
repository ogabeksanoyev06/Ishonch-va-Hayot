<template>
  <div>
    <AppHeader />
    <div class="page__wrap">
      <router-view />
    </div>
    <div class="footer__icons">
      <div class="footer__items">
        <div class="footer__item">
          <img src="/svg/icons1.svg" alt="" />
        </div>
        <div class="footer__item">
          <img src="/svg/icons2.svg" alt="" />
        </div>
        <div class="footer__item">
          <img src="/svg/icons3.svg" alt="" />
        </div>
        <div class="footer__item">
          <img src="/svg/icons4.svg" alt="" />
        </div>
      </div>
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
.footer__icons {
  display: flex;
  justify-content: center;
  background-color: #f2f7f2;
  padding: 30px 0;
  margin-top: 30px;
}
.footer__items {
  display: flex;
}
.footer__item {
  max-width: 120px;
  width: 100%;
  margin: 10px;
}
.footer__item img {
  width: 100%;
  object-fit: contain;
}
@media (max-width: 576px) {
  .footer__items {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
