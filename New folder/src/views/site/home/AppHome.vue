<template>
  <div>
    <div class="home-page">
      <HeroBanner />
      <div class="container home__text">
        <p>
          {{ $t("HomeText") }}
        </p>
      </div>
      <div class="home_video container">
        <iframe
          v-if="lang"
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/GavlYY3pHmU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          v-else
          width="100%"
          height="600"
          src="https://www.youtube.com/embed/-tA38pvsJ0U"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <PreTest v-if="preTest" />
      <div class="mt-5">
        <div class="module__title container">{{ $t("Modules") }}</div>
        <app-modules />
      </div>
    </div>
  </div>
</template>
<script>
import HeroBanner from "@/components/pages/home/HeroBanner.vue";
import AppModules from "../modules/AppModules.vue";
import PreTest from "@/views/site/preTest/PreTest.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "app-home",
  components: { HeroBanner, AppModules, PreTest },
  data() {
    return {
      resultModuleId: [],
    };
  },
  methods: {
    ...mapActions(["getUser"]),

    closeModal() {
      this.resultTest = false;
    },
  },
  computed: {
    ...mapGetters([]),
    ...mapState(["user", "isLoggedOn", "testResults", "preTest", "lang"]),
  },
  mounted() {
    console.log(this.resultLang);
  },
  watch: {
    resultLang() {
      return localStorage.getItem("lang") === "ru";
    },
  },
};
</script>

<style scoped>
.home__text {
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  background-color: #598fdb;
  padding: 20px;
  border-radius: 10px;
}
.home__text p {
  max-width: 900px;
  width: 100%;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  color: #fff;
}
.home_video {
  margin: 20px auto;
  width: 100%;
}
.home_video video {
  width: 100%;
  height: 600px;
}

.module__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  text-transform: uppercase;
  color: #0f101d;
  margin-bottom: 40px;
}
@media (max-width: 768px) {
  .home_video video {
    height: auto;
  }
}
</style>
