<template>
  <div class="tab_content container">
    <div class="module_title">
      {{ $t("Безопасное грудное вскармливание в период COVID-19") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text5-2-5") }}
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img v-if="lang" src="/images/tabImg/162.png" alt="" />
      <img v-else src="/images/tabImg/162uz.png" alt="" />
    </div>
    <div class="tab_content-text" style="margin-bottom: 20px">
      {{ $t("Text5-2-6") }}
    </div>
    <div class="tab_content-text">
      <strong class="strongColor">{{ $t("Меры предосторожности") }}</strong>
      {{ $t("Text5-2-8") }}
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img v-if="lang" src="/images/tabImg/163.png" alt="" />
      <img v-else src="/images/tabImg/163uz.png" alt="" />
    </div>
    <div class="tab_content-text">
      {{ $t("Text5-2-9") }}
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img v-if="lang" src="/images/tabImg/164.png" alt="" />
      <img v-else src="/images/tabImg/164uz.png" alt="" />
    </div>
    <div class="tabImg" style="max-width: 800px">
      <img v-if="lang" src="/images/tabImg/165.png" alt="" />
      <img v-else src="/images/tabImg/165uz.png" alt="" />
    </div>
    <div class="tab_content-text">
      {{ $t("Text5-2-3") }}
    </div>
    <div class="tab_content-text bgTab" style="max-width: 800px; width: 100%">
      {{ $t("Text5-2-11") }}
    </div>
    <div class="video-player-wrap">
      <div class="video-player">
        <iframe
          style="width: 100%; height: 400px; object-fit: contain"
          src="https://www.youtube.com/embed/_tMIZn4qmKw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <router-link :to="{ name: 'module-six' }">
      <button data-v-4cc884a4="" class="prevDetailed">
        {{ $t("Module") }} 6
      </button>
    </router-link>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import { mapState } from "vuex";
export default {
  name: "tab-4",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["lang"]),
  },
};
</script>
<style scoped>
.content_flex-img {
  max-width: 250px;
  width: 100%;
}
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tab_content-text {
  margin-bottom: 10px;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_flex-info {
  max-width: 500px;
  width: 100%;
}
.tab_content-text {
  margin-bottom: 10px;
}
.video-player-wrap {
  margin: 20px 0;
}
.video-player {
  width: 100%;
}
@media (max-width: 768px) {
  .content_flex {
    flex-wrap: wrap;
  }
  .content_flex-img {
    order: 1;
  }
  .content_flex-info {
    order: 2;
  }
}
</style>
