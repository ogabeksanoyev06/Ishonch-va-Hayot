<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="6"
        title="ОКАЗАНИЕ ПОМОЩИ ЖЕНЩИНАМ С COVID-19 ВО ВРЕМЯ БЕРЕМЕННОСТИ И ПОСЛЕ РОДОВ"
        concepts="Права человека и COVID-19, медицинская этика"
        photo="moduleBanner1.png"
        :goals="goals"
        prev="5"
        prevTitle="ОКАЗАНИЕ ПОМОЩИ ЖЕНЩИНАМ С COVID-19 ВО ВРЕМЯ БЕРЕМЕННОСТИ И ПОСЛЕ РОДОВ"
        next="7"
        nextTitle="КОНФИДЕНЦИАЛЬНОСТЬ И ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ ЛЖВ"
        prevLink="module-five"
        nextLink="module-seven"
        detailedPageLink="detailed-six"
      />
    </div>
    <div class="container">
      <DetailedPage v-if="!showDetailedPage" @prevModules="prevModules" />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import DetailedPage from "@/views/site/modules/moduleSix/detailed-page";
import "./style.css";
export default {
  name: "moduleFive",
  components: { ModuleBanner, DetailedPage },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "руководящие принципы медицинской этики во время пандемии COVID- 19",
        },
        {
          id: 1,
          text: "о правах ЛЖВ в период пандемии COVID-19",
        },
        {
          id: 2,
          text: "почему равенство и недопущение дискриминации так важны при принятии мер реагирования на пандемию COVID-19",
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
