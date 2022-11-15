<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="4"
        title="COVID-19 и ВИЧ-инфекция"
        concepts="COVID-19 и ВИЧ, COVID-19 и АРВТ"
        photo="moduleBanner1.png"
        :goals="goals"
        prev="3"
        prevTitle="Общие способы защиты от острых респираторных инфекций"
        next="5"
        nextTitle="ОКАЗАНИЕ ПОМОЩИ ЖЕНЩИНАМ С COVID-19 ВО ВРЕМЯ БЕРЕМЕННОСТИ И ПОСЛЕ РОДОВ"
        prevLink="module-three"
        nextLink="module-five"
        detailedPageLink="detailed-four"
        :showDetailedPage="showDetailedPage"
      />
    </div>
    <div class="container-fluid">
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleFour/detailed-page";
import "./style.css";
export default {
  name: "moduleFour",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "о некоторых особенностях COVID-19 в сочетании с ВИЧ-инфекцией",
        },
        {
          id: 1,
          text: "как АРВТ препараты сочетаются с COVID-19",
        },
        {
          id: 2,
          text: "особенности ухода и поддержки беременных женщин и детей с ВИЧ во время пандемии COVID-19",
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
