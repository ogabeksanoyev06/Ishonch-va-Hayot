<template>
  <div class="tab_content">
    <div class="module_title">
      {{ $t("Text8") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text8-1") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text8-2") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text8-3") }}
    </div>
    <div class="tab_content-block">
      <div class="tab_content-text">
        <strong class="strongColor">{{ $t("Text8-51") }}</strong> -
        {{ $t("Text8-4") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor"> {{ $t("Text8-5") }} </strong> –
        {{ $t("Text8-6") }}
      </div>
    </div>
    <div class="tabImg" style="max-width: 600px">
      <img v-if="lang" src="/images/tabImg/134.jpg" alt="" />
      <img v-else src="/images/tabImg/134uz.jpg" alt="" />
    </div>
    <div class="tab_content-block">
      <div class="tab_content-text">
        {{ $t("Text8-7") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-8") }}
      </div>
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">{{ $t("Text8-9") }}</div>
      <div class="tab_content-text">
        {{ $t("Text8-10") }}
      </div>
      <div class="tab_content-text">
        {{ $t("Text8-11") }}
      </div>
    </div>
    <div class="tabImg" style="max-width: 640px">
      <img v-if="lang" src="/images/tabImg/135.jpg" alt="" />
      <img v-else src="/images/tabImg/135uz.jpg" alt="" />
    </div>
    <div class="tab_content-text">
      <strong class="strongColor">{{ $t("Text8-12") }}</strong> -
      {{ $t("Text8-13") }}
    </div>
    <div class="tab_content-text">
      <strong class="strongColor">{{ $t("Text8-14") }}</strong>
      {{ $t("Text8-15") }}
    </div>
    <div class="tab_content-block">
      <div class="tab_content-title">
        {{ $t("Text8-16") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor">1.</strong> {{ $t("Text8-17") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor">2.</strong> {{ $t("Text8-18") }}
      </div>
      <div class="tab_content-text">
        <strong class="strongColor">3.</strong> {{ $t("Text8-19") }}
      </div>
    </div>
    <div class="tabImg" style="max-width: 670px">
      <img v-if="lang" src="/images/tabImg/136.jpg" alt="" />
      <img v-else src="/images/tabImg/136uz.jpg" alt="" />
    </div>
    <div class="tab_content-title">
      {{ $t("Text8-20") }}
    </div>
    <ul class="tab-content_ul">
      <div>
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <img data-v-459d7600="" src="/svg/virusIcon.svg" alt="" />
          <span>{{ $t(item.name) }}</span>
        </li>
      </div>
    </ul>
    <div class="tabImg" style="max-width: 720px">
      <img class="w-100" src="/images/tabImg/137.jpg" alt="wewe" />
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
    return {
      items: [
        {
          id: 0,
          name: "Доверительный контакт с клиентом.",
        },
        {
          id: 1,
          name: "Активная невербальная связь (открытые жесты, позы, мимика).",
        },
        {
          id: 2,
          name: "Создание максимально возможной благоприятной внешней среды для общения (спокойное, тихое помещение с комфортными условиями)",
        },
        {
          id: 3,
          name: "Уважительное и понимающее отношение к позиции клиента.",
        },
        {
          id: 4,
          name: "Работа с ложными убеждениями и страхами в отношении коронавирусной инфекции.",
        },
        {
          id: 5,
          name: "Активное слушание.",
        },
        {
          id: 6,
          name: "Создание и поддержание чувства безопасности.",
        },
        {
          id: 7,
          name: "Регулярный мониторинг обратной связи",
        },
      ],
    };
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
.tab_content-title {
  margin-bottom: 20px;
  text-transform: uppercase;
  max-width: 600px;
  width: 100%;
}
</style>
