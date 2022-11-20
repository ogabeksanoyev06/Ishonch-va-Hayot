<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="8"
        title="Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19"
        concepts="эффективная коммуникация, эффективное консультирование"
        photo="moduleBanner1.png"
        :goals="goals"
        prev="7"
        prevTitle="Конфиденциальность и информационная безопасность ЛЖВ"
        next="9"
        nextTitle="Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19"
        prevLink="module-seven"
        nextLink="module-nine"
        detailedPageLink="detailed-eight"
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
import DetailedPage from "@/views/site/modules/moduleEight/detailed-page";
import "./style.css";
export default {
  name: "moduleFive",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "Ознакомитесь с руководящими принципами эффективного общения в условиях пандемии COVID-19",
        },
        {
          id: 1,
          text: "Узнаете о эффективной межличностной коммуникации в условиях повышенного стресса",
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
