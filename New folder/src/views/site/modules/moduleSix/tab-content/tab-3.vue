<template>
  <div class="tab_content">
    <div class="module_title">{{ $t("module6.188") }}</div>
    <div
      class="tab_content-text bgTab w-100 text-center"
      style="font-size: 24px"
    >
      {{ $t("module6.188") }}
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">
        {{ $t("module6.199") }}
      </div>
      <div class="tab_content-text">
        {{ $t("module6.200") }}
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("module6.188") }}
        </div>
        <div class="tab_content-text">
          {{ $t("module6.199") }}
        </div>
        <div class="tab_content-text">
          {{ $t("module6.233") }}
        </div>
        <div class="tab_content-text">
          {{ $t("module6-2") }}
        </div>
        <div class="tab_content-text">
          {{ $t("module6-3") }}
        </div>
        <div class="tabImg" style="max-width: 700px">
          <img v-if="lang" src="/images/tabImg/166.png" alt="" />
          <img v-else src="/images/tabImg/166uz.png" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{ $t("module6-4") }}</div>
        <div class="tab_content-text">
          {{ $t("module6-5") }}
        </div>
        <div class="tab_content-text">
          {{ $t("module6-6") }}
        </div>
        <div class="tab_content-text">
          {{ $t("module6-7") }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import { mapState } from "vuex";
export default {
  name: "tab-3",
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
