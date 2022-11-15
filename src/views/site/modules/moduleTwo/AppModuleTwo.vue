<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="2"
        title="COVID-19 - новая респираторная инфекция"
        concepts="COVID-19, вакцинация от COVID-19"
        photo="moduleBanner1.png"
        photoTop="banner-top2.svg"
        photoBottom="banner-bottom2.svg"
        :goals="goals"
        prev="1"
        prevTitle="Острые респираторные вирусные инфекции"
        next="3"
        nextTitle="Общие способы защиты от острых респираторных инфекций"
        prevLink="module-one"
        nextLink="module-three"
        detailedPageLink="detailed-two"
      />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import "./style.css";
export default {
  name: "moduleTwo",
  components: { ModuleBanner },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "знать о возбудителе COVID-19, группах риска тяжелого течения болезни и основных симптомах заболевания",
        },
        {
          id: 1,
          text: "отличать основные симптомы COVID-19, гриппа и других ОРИ",
        },
        {
          id: 2,
          text: "знакомы с рекомендациями о вакцинации против COVID-19",
        },
      ],
      showDetailedPage: true,
    };
  },
  methods: {
    //  @showPage="showPage"
    // showPage(isBoolean) {
    //   this.showDetailedPage = isBoolean;
    // },
    prevModules(id) {
      this.showDetailedPage = id;
    },
  },
};
</script>
<style scoped></style>
