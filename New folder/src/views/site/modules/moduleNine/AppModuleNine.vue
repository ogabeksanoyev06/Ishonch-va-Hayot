<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="9"
        title="ПРОФИЛАКТИКА ЭМОЦИОНАЛЬНОГО ВЫГОРАНИЯ У СОТРУДНИКОВ ННО, РАБОТАЮЩИХ С УЯЗВИМЫМИ ГРУППАМИ"
        concepts="эмоциональное выгорание, стресс"
        photo="moduleBanner1.png"
        :goals="goals"
        prev="8"
        prevTitle="НАВЫКИ ЭФФЕКТИВНОГО ОБЩЕНИЯ В ДЕЯТЕЛЬНОСТИ СОЦИАЛЬНОГО РАБОТНИКА В УСЛОВИЯХ ПАНДЕМИИ COVID-19"
        next="1"
        nextTitle="Острые респираторные вирусные инфекции"
        prevLink="module-eight"
        nextLink="module-one"
        detailedPageLink="detailed-nine"
      />
    </div>
    <div class="container-fluid">
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleNine/detailed-page";
import "./style.css";
export default {
  name: "moduleNine",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "причины и признаки эмоционального выгорания",
        },
        {
          id: 1,
          text: "как выявлять у себя признаки эмоционального выгорания",
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
