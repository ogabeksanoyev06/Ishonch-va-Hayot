<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="module_title">{{ $t("Text5-1-8") }}</div>
      <div class="bgTab">{{ $t("Text5-1-6") }}</div>
      <div class="tab_content-text">
        {{ $t("Text5-1-7") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text5-1-9") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text5-1-11") }}
      </div>
      <div class="tabImg" style="max-width: 750px">
        <img v-if="lang" src="/images/tabImg/123.png" alt="" />
        <img v-else src="/images/tabImg/123uz.png" alt="" />
      </div>
      <div class="tab_content-text">
        {{ $t("Text5-1-12") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text5-1-13") }}
      </div>
      <div class="module_title">{{ $t("Text5-2") }}</div>
      <div class="tabImg" style="max-width: 800px">
        <img v-if="lang" src="/images/tabImg/161.png" alt="" />
        <img v-else src="/images/tabImg/161uz.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import { mapState } from "vuex";
export default {
  name: "tab-1",
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
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
.tab_content-text {
  margin-bottom: 10px;
}
</style>
