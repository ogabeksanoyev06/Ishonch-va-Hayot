<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="7"
        title="Конфиденциальность и информационная безопасность ЛЖВ"
        concepts="конфиденциальность, информационная безопасность"
        photo="moduleBanner1.png"
        :goals="goals"
        prev="6"
        prevTitle="COVID-19 и права человека"
        next="8"
        nextTitle="Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19"
        prevLink="module-six"
        nextLink="module-eight"
        detailedPageLink="detailed-seven"
      />
    </div>
    <div class="container-f">
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleSeven/detailed-page";
import "./style.css";
export default {
  name: "moduleFive",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "руководящие принципы обеспечения конфиденциальности и безопасности информации о пациентах.",
        },
        {
          id: 1,
          text: "концепции, влияющие на развитие, и реализацию защиты конфиденциальных данных. Неприкосновенность частной жизни, конфиденциальность и безопасность.",
        },
        {
          id: 2,
          text: "законы РУз, регулирующие права человека и безопасность ЛЖВ",
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
