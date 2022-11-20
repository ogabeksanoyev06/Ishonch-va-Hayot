<template>
  <div class="app-card" id="app-card">
    <!-- <div class="app-card" :class="filterModuleId ? 'active' : ''" id="app-card"> -->
    <!-- <div class="Success_bage" v-if="filterModuleId"><span>Успешно</span></div> -->
    <div class="app-card__content">
      {{ filterModuleId }}
      <div>
        <div class="app-card__title" v-if="title">
          {{ $t("Module") }} {{ id }}
        </div>
        <div class="app-card__title" v-else>{{ sertificate }}</div>
        <div class="app-card__text">{{ $t(text) }}</div>
      </div>

      <div>
        <p v-if="tabCount" style="margin-bottom: 10px">
          {{ (filterReadModule?.length / tabCount) * 100 }} %
        </p>
        <div class="sidebar__prgoress" v-if="tabCount">
          <div
            class="sidebar__prgoress-bg"
            :style="{
              width: (filterReadModule?.length / tabCount) * 100 + '%',
            }"
          ></div>
        </div>
        <button
          v-if="tabCount"
          class="app-card__btn"
          :class="(isLoggedOn ? 'active' : '', preTest ? 'disabled' : '')"
          @click="goToLink"
        >
          {{ $t("Details") }}
        </button>
        <button
          v-else
          class="sertificate__btn"
          @click="goToSertificate"
          :class="isActiveSertificate && filterModuleId ? '' : 'disabled'"
        >
          Sertificate
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
    return {
      modules: [
        {
          id: 1,
          title: "Модуль",
          text: "Острые респираторные вирусные инфекции",
          link: "module-one",
          photo: "moduleImg1.png",
          maxBall: 80,
          tabCount: 6,
        },
        {
          id: 2,
          title: "Модуль",
          text: "COVID-19 - новая респираторная инфекция",
          link: "module-two",
          photo: "moduleImg2.png",
          maxBall: 60,
          tabCount: 3,
        },
        {
          id: 3,
          title: "Модуль",
          text: "Общие способы защиты от острых респираторных инфекций",
          link: "module-three",
          photo: "moduleImg3.png",
          maxBall: 60,
          tabCount: 3,
        },
        {
          id: 4,
          title: "Модуль",
          text: "COVID-19 и ВИЧ-инфекция",
          link: "module-four",
          photo: "moduleImg4.png",
          maxBall: 60,
          tabCount: 4,
        },
        {
          id: 5,
          title: "Модуль",
          text: "Оказание помощи женщинам с COVID-19 во время беременности и родов",
          link: "module-five",
          photo: "moduleImg5.png",
          tabCount: 2,
        },
        {
          id: 6,
          title: "Модуль",
          text: "COVID-19 и права человека",
          link: "module-six",
          photo: "moduleImg6.png",
          maxBall: 60,
          tabCount: 5,
        },
        {
          id: 7,
          title: "Модуль",
          text: "Конфиденциальность и информационная безопасность ЛЖВ",
          link: "module-seven",
          photo: "moduleImg7.png",
          tabCount: 2,
        },
        {
          id: 8,
          title: "Модуль",
          text: "Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19",
          link: "module-eight",
          photo: "moduleImg8.png",
          maxBall: 70,
          tabCount: 4,
        },
        {
          id: 9,
          title: "Модуль",
          text: "Профилактика эмоционального выгорания у сотрудников ННО, работающих с уязвимыми группами",
          link: "module-nine",
          photo: "moduleImg9.png",
          maxBall: 102,
          tabCount: 2,
        },
        {
          id: 10,
          sertificate: "СЕРТИФИКАТ",
          photo: "moduleImg10.png",
          link: "sertificate-test",
        },
      ],
    };
  },
  props: {
    id: Number,
    title: String,
    sertificate: String,
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
    goToSertificate() {
      this.$router.push({
        name: this.link,
      });
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
        return this.maxBall
          ? resultModuleId[0]?.testBall >= this.maxBall
          : true;
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
    isActiveSertificate() {
      return this.readModule.data.result.length === 30;
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
<style scoped>
.sertificate__btn {
  max-width: 150px;
  width: 100%;
  font-size: 18px;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #032b75 !important;
  border-radius: 40px;
  margin-top: 12px;
  transition: background-color 0.15s ease-in;
}
.sertificate__btn.disabled {
  opacity: 0.55;
  pointer-events: none;
}
</style>
