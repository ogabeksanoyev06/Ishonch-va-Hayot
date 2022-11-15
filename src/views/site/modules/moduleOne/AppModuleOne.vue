<template>
  <div style="margin-top: 30px">
    <div class="container">
      <ModuleBanner
        v-if="showDetailedPage"
        moduleId="1"
        title="Острые респираторные вирусные инфекции"
        concepts="ОРИ, грипп, вакцинация"
        photo="moduleBanner1.png"
        photoTop="banner-top.svg"
        photoBottom="banner-bottom.svg"
        :goals="goals"
        prev="1"
        prevTitle="Острые респираторные вирусные инфекции"
        next="2"
        nextTitle="COVID-19 - новая респираторная инфекция"
        prevLink=""
        nextLink="module-two"
        detailedPageLink="detailed-one"
        :showDetailedPage="showDetailedPage"
      />
    </div>
  </div>
</template>
<script>
import ModuleBanner from "@/components/shared-components/ModuleBanner.vue";
import "./style.css";
export default {
  name: "moduleOne",
  components: { ModuleBanner },
  data() {
    return {
      goals: [
        {
          id: 0,
          text: "о возбудителях основных острых респираторных инфекций",
        },
        {
          id: 1,
          text: "о симптомах острых респираторных инфекций",
        },
        {
          id: 2,
          text: "о том, какая категория населения входит в группу риска тяжелого течения и осложнений острых респираторных инфекций",
        },
        {
          id: 3,
          text: "об основных мерах профилактики острых респираторных инфекций",
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
