<template>
  <div class="tab_content">
    <div class="tab_content-title text-center">{{$t("Text5-2")}}</div>
    <div class="tab_content-text">
      {{$t("Text5-2-1")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text5-2-2")}}
    </div>
    <div>{{$t("Text5-2")}}</div>
    <ul class="tab-content_ul">
      <div style="max-width: 550px; width: 100%">
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <img src="/svg/virusIcon.svg" alt="" />
          <span>{{ $t(item.name) }}</span>
        </li>
      </div>
    </ul>
    <div class="tabImg mb-3" style="max-width: 650px; width: 100%">
      <img class="w-100" src="/images/tabImg/124.jpg" alt="wewe" />
    </div>
    <div class="tab_content-text">
      {{$t("Text5-2-3")}}
    </div>
    <div class="tabImg" style="max-width: 450px; width: 100%">
      <img class="w-100" src="/images/tabImg/125.jpg" alt="wewe" />
    </div>
    <div class="tab_content-title">
      {{$t("Text5-2-4")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text5-2-5")}}
    </div>
    <div class="content_flex mb-3">
      <div class="content_flex-info">
        <div class="tab_content-text" style="margin-bottom: 20px">
          {{$t("Text5-2-6")}}
        </div>
      </div>
      <div class="content_flex-img">
        <img src="images/tabImg/image 177.png" alt="" />
      </div>
    </div>
    <div class="tab_content-text">
      <strong class="strongColor">{{$t("Text5-2-7")}}</strong> {{$t("Text5-2-8")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text5-2-9")}}
    </div>
    <div class="tab_content-text">
      {{$t("Text5-2-10")}}
    </div>
    <div class="impInfo_content">
      <img src="/svg/ImportantInfo.svg" alt="" />
      <p style="max-width: 550px; width: 100%">
        {{$t("Text5-2-11")}}
      </p>
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
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
export default {
  name: "tab-3",
  components: {},
  data() {
    return {
      items: [
        {
          id: 0,
          name: "ВОЗ рекомендует кесарево сечение только по медицинским показаниям.",
        },
        {
          id: 1,
          name: "Способ родоразрешения – вопрос индивидуального выбора.",
        },
        {
          id: 2,
          name: "Решение о срочном родоразрешении принимается после медицинского консилиума.",
        },
        {
          id: 3,
          name: "Партнерские роды в период COVID - 19 не рекомендованы.",
        },
        {
          id: 4,
          name: "Минимум медицинского персонала.",
        },
      ],
    };
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
