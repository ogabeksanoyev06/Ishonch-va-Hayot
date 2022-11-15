<template>
  <div class="app-card" :class="filterModuleId ? 'active' : ''" id="app-card">
    <div class="Success_bage" v-if="filterModuleId"><span>Успешно</span></div>
    <div class="app-card__content">
      <div>
        <div class="app-card__title">{{ $t("Module") }} {{ id }}</div>
        <div class="app-card__text">{{ $t(text) }}</div>
      </div>

      <div>
        <p style="margin-bottom: 10px">
          {{ (filterReadModule?.length / tabCount) * 100 }} %
        </p>
        <div class="sidebar__prgoress">
          <div
            class="sidebar__prgoress-bg"
            :style="{
              width: (filterReadModule?.length / tabCount) * 100 + '%',
            }"
          ></div>
        </div>
        <button
          class="app-card__btn"
          :class="(isLoggedOn ? 'active' : '', preTest ? 'disabled' : '')"
          @click="goToLink"
        >
          {{ $t("Details") }}
        </button>
      </div>
    </div>
    <div class="app-card__photo">
      <img :src="`/images/${photo}`" alt="" />
    </div>
  </div>
</template>
<script>
import "@/assets/styles/components/app-modules-card.css";
import { mapMutations, mapState } from "vuex";
import TokenService from "@/service/TokenService";
export default {
  name: "ModulesCard",
  components: {},
  data() {
    return {};
  },
  props: {
    id: Number,
    title: String,
    text: String,
    link: String,
    photo: String,
    maxBall: Number,
    tabCount: Number,
  },
  methods: {
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    goToLink() {
      if (this.isLoggedOn) {
        this.$router.push({
          name: this.link,
        });
      } else {
        this.$router.push({ name: "login" });
      }
      this.setToken();
    },
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
    getTest() {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    },
    readResultModul() {
      this.$store.dispatch("getReadModule", TokenService.headersToken());
    },
  },
  computed: {
    ...mapState([
      "isLoggedOn",
      "loading",
      "testResults",
      "preTest",
      "readModule",
    ]),
    filterModuleId() {
      if (this.testResults !== null) {
        let resultModuleId = this.testResults?.result?.filter(
          (item) => item.modulId === this.id
        );
        return resultModuleId[0]?.testBall > this.maxBall;
      } else {
        return false;
      }
    },
    filterReadModule() {
      if (this.readModule !== null) {
        let resultReadModule = this.readModule?.data?.result?.filter(
          (item) => item.modulId === this.id
        );
        return resultReadModule;
      } else {
        return null;
      }
    },
  },
  mounted() {
    if (TokenService.getToken() !== null) {
      this.getTest();
    }
    this.readResultModul();
  },
  created() {},
};
</script>
<style scoped></style>
