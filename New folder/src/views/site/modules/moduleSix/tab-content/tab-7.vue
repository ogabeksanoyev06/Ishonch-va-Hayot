<template>
  <div class="tab_content">
    <div class="module_title" style="max-width: 800px; width: 100%">
      {{ $t("module6-8") }}
    </div>
    <div class="tab_content-text">
      {{ $t("module6-9") }}
    </div>
    <div class="tab_content-text">
      {{ $t("module6-10") }}
    </div>
    <div class="tabImg" style="max-width: 600px">
      <img v-if="lang" src="/images/tabImg/167.png" alt="" />
      <img v-else src="/images/tabImg/167uz.png" alt="" />
    </div>
    <div class="tab_content-text">
      {{ $t("module6-11") }}
    </div>
    <div class="tab_content-text">
      {{ $t("module6-12") }}
    </div>
    <div class="tab_content-text">
      {{ $t("module6-13") }}
    </div>
    <div class="tabImg" style="max-width: 600px">
      <img v-if="lang" src="/images/tabImg/168.png" alt="" />
      <img v-else src="/images/tabImg/168uz.png" alt="" />
    </div>
    <div class="tab_content-title">{{ $t("Неоставление без помощи") }}:</div>
    <div class="tab_content-text">
      {{ $t("module6-14") }}
    </div>
    <div class="tab_content-text">
      {{ $t("module6-15") }}
    </div>
    <div class="tabImg" style="max-width: 600px">
      <img v-if="lang" src="/images/tabImg/169.png" alt="" />
      <img v-else src="/images/tabImg/169uz.png" alt="" />
    </div>
    <div class="tab_content-title">{{ $t("module6-16") }}</div>
    <div class="tab_content-text">
      {{ $t("module6-17") }}
    </div>
    <div class="tab_content-title">{{ $t("Конфиденциальность") }}</div>
    <div class="tab_content-text">
      {{ $t("module6-18") }}
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import { mapState } from "vuex";
export default {
  name: "tab-7",
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
.tab_content-text {
  margin-bottom: 10px;
}
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
</style>
