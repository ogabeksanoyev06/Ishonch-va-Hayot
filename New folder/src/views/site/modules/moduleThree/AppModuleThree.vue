<template>
  <div>
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="3"
        title="Общие способы защиты от острых респираторных инфекций"
        concepts="респираторный этикет, мытье рук, медицинская маска"
        photo="moduleBanner1.png"
        photoTop="banner-top3.svg"
        photoBottom="banner-bottom3.svg"
        :goals="goals"
        prev="2"
        prevTitle="COVID-19 - новая респираторная инфекция"
        next="4"
        nextTitle="COVID-19 и ВИЧ-инфекция"
        prevLink="module-two"
        nextLink="module-four"
        detailedPageLink="detailed-three"
        :showDetailedPage="showDetailedPage"
      />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";

import "./style.css";
export default {
  name: "moduleThree",
  components: { ModuleBanner },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "Повысите свой уровень знаний по вопросам снижения риска заражения и распространения ОРИ и COVID-19",
        },
        {
          id: 1,
          text: "Узнаете об основных правилах респираторного этикета",
        },
        {
          id: 2,
          text: "Научитесь применять технику мытья рук для профилактики заражения респираторными инфекциями и COVID-19",
        },
        {
          id: 3,
          text: "Научитесь правильно надевать медицинскую маску",
        },
      ],
      showDetailedPage: true,
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
