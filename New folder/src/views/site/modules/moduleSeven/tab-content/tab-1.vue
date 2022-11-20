<template>
  <div class="tab_content">
    <div class="ImportantInformation">
      <div class="module_title">
        {{ $t("Конфиденциальность и информационная безопасность ЛЖВ") }}
      </div>
      <div class="module_title bgTab">{{ $t("Основная информация") }}</div>
      <div class="content_flex">
        <div class="tab_content-text" style="flex: 1; margin-right: 20px">
          <strong class="strongColor">{{ $t("Конфиденциальность") }}</strong> —
          {{ $t("Text7-1-5") }}
        </div>
        <div class="content_flex-img" style="max-width: 300px">
          <img src="/images/tabImg/129.jpg" alt="" />
        </div>
      </div>
      <div class="tab_content-text">
        {{ $t("Text7-1-6") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text7-1-7") }}
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("Text7-1-8") }}
        </div>
        <div class="tabImg" style="max-width: 600px">
          <img v-if="lang" src="/images/tabImg/170.png" alt="" />
          <img v-else src="/images/tabImg/170uz.png" alt="" />
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">{{ $t("Text7-1-12") }}</div>
        <div class="tab_content-text">
          {{ $t("Text7-1-13") }}
        </div>
        <div class="tab_content-text">
          {{ $t("Text7-1-17") }}
        </div>
      </div>

      <div class="tabImg" style="max-width: 720px">
        <img v-if="lang" src="/images/tabImg/131.jpg" alt="" />
        <img v-else src="/images/tabImg/131uz.png" alt="" />
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{
            $t(
              "Руководящие принципы конфиденциальности и безопасности информации о ВИЧ"
            )
          }}
        </div>
        <div class="tab_content-text">{{ $t("Text7-1-19") }}</div>
        <div class="tab_content-text">
          {{ $t("Text7-1-20") }}
        </div>
      </div>
      <div class="tab_content-block">
        <div class="tab_content-title">
          {{ $t("Text7-1-21") }}
        </div>
        <div class="tab_content-text">
          <strong class="strongColor">
            {{ $t("Text7-1-22") }}
          </strong>
          {{ $t("Text7-1-23") }} <br />
          · {{ $t("Text7-1-24") }} <br />
          · {{ $t("Text7-1-25") }} <br />
          ·{{ $t("Text7-1-26") }} <br />
          {{ $t("Text7-1-27") }}
          <br />
        </div>
        <div class="tabImg" style="max-width: 820px">
          <img v-if="lang" src="/images/tabImg/171.png" alt="" />
          <img v-else src="/images/tabImg/171uz.png" alt="" />
        </div>
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
.tab_content-text {
  margin-bottom: 10px;
}
.content_flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.content_flex-info {
  width: 100%;
  margin: 0 auto;
}
.content_flex-img {
  max-width: 250px;
  width: 100%;
}
.content_flex-img img {
  width: 100%;
  object-fit: contain;
}
.tabImg {
  width: 100%;
  margin: 20px auto;
}
.tabImg img {
  width: 100%;
  object-fit: contain;
}
@media (max-width: 768px) {
  .content_flex {
    flex-wrap: wrap;
    justify-content: center;
  }
  .content_flex-img {
    order: 1;
  }
  .content_flex-info {
    max-width: 100%;
    order: 2;
  }
}
</style>
