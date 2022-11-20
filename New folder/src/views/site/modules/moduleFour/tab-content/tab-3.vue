<template>
  <div class="tab_content">
    <div class="module_title">{{ $t("Text4-3") }}</div>
    <div class="tab_content-text">
      {{ $t("Text4-3-1") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text4-3-2") }}
    </div>

    <div class="tabImg" style="max-width: 900px">
      <img v-if="lang" src="/images/tabImg/151.png" alt="" />
      <img v-else src="/images/tabImg/151uz.png" alt="" />
    </div>
    <div class="tab_content-text">
      {{ $t("Text4-3-4") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text4-3-5") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text4-3-6") }}
    </div>
    <div class="tab_content-text">
      {{ $t("Text4-3-7") }}
    </div>
    <div class="module_title bgTab" style="text-align: center">
      {{ $t("Text4-3-8") }}
    </div>
    <ul class="tab-content_ul">
      <div>
        <li v-for="(item, i) in items" :key="i" class="tab-content_li">
          <img src="/svg/virusIcon.svg" alt="" />
          <span>{{ $t(item.name) }}</span>
        </li>
      </div>
    </ul>
    <div class="impInfo_content">
      <img src="/svg/ImportantInfo.svg" alt="" />
      <p style="max-width: 550px; width: 100%">
        Для закрепления знаний, ответьте на вопросы по теме модуля
      </p>
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
    return {
      items: [
        {
          id: 0,
          name: " Продолжать прием АРВТ",
        },
        {
          id: 1,
          name: " Поддерживать связь с лечащим врачом ",
        },
        {
          id: 2,
          name: " Купировать симптомы дома с помощью поддерживающей терапии – по назначению врача",
        },
        {
          id: 3,
          name: " При симптомах ухудшения состояния- высокая температура, не снижающаяся в течение 48 часов, одышка, чувство нехватки воздуха – вызвать скорую медицинскую помощь (103).",
        },
        {
          id: 4,
          name: " Следует избегать смены или замены АРВТ",
        },
        {
          id: 5,
          name: "	Для пациентов в критическом состоянии требующих кормление через трубку, необходимо заменить АРВТ на доступные жидкие формы, либо АВТ таблетки давать в виде порошка",
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
