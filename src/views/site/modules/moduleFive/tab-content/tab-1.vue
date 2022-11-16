<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="module_title">COVID-19 и беременност</div>
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
        <img class="w-100" src="/images/tabImg/123.png" alt="wewe" />
      </div>
      <div class="tab_content-text">
        {{ $t("Text5-1-12") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text5-1-13") }}
      </div>
      <div class="module_title">Роды и COVID-19</div>
      <div class="tabImg" style="max-width: 800px">
        <img class="w-100" src="/images/tabImg/161.png" alt="wewe" />
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-1",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tab_content-text {
  margin-bottom: 10px;
}
</style>
