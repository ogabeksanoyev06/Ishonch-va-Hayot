<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="5"
        title="ОКАЗАНИЕ ПОМОЩИ ЖЕНЩИНАМ С COVID-19 ВО ВРЕМЯ БЕРЕМЕННОСТИ И ПОСЛЕ РОДОВ"
        concepts="Беременность и COVID-19, роды и COVID-19"
        photo="moduleBanner1.png"
        :goals="goals"
        prev="4"
        prevTitle="ОБЩИЕ СПОСОБЫ ЗАЩИТЫ ОТ ОСТРЫХ РЕСПИРАТОРНЫХ ИНФЕКЦИЙ (ОРИ) и COVID-19"
        next="6"
        nextTitle="COVID-19 И ПРАВА ЧЕЛОВЕКА"
        prevLink="module-four"
        nextLink="module-six"
        detailedPageLink="detailed-five"
        :showDetailedPage="showDetailedPage"
      />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import "./style.css";
export default {
  name: "moduleFive",
  components: { ModuleBanner },
  data() {
    return {
      showDetailedPage: true,
      goals: [
        {
          id: 0,
          text: "информацию о беременности и COVID-19",
        },
        {
          id: 1,
          text: "о способах защиты для беременных и кормящих матерей и их детей от COVID-19",
        },
        {
          id: 2,
          text: "особенности ведения родов в период COVID-19",
        },
        {
          id: 3,
          text: "об уходе за новорожденными, матери которых болеют COVID-19",
        },
      ],
    };
  },
  methods: {
    prevModules(id) {
      this.showDetailedPage = id;
    },
  },
};
</script>
<style scoped></style>
