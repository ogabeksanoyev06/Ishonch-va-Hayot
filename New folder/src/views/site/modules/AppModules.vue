<template>
  <transition name="slide">
    
    <div class="module">
      <!-- <img class="module__bg" src="/images/moduleBg.png" alt="" />
      <img class="module__bg2" src="/images/moduleBg2.png" alt="" /> -->
      <div v-for="(item, index) in modules" :key="index" class="module__items">
        <modules-card
          :link="item.link"
          :title="item.title"
          :sertificate="item.sertificate"
          :text="item.text"
          :photo="item.photo"
          :id="item.id"
          :maxBall="item.maxBall"
          :tabCount="item.tabCount"
        />
      </div>
    </div>
  </transition>
</template>
<script>
import ModulesCard from "@/components/shared-components/ModulesCard.vue";

export default {
  name: "app-modules",
  components: { ModulesCard },
  data() {
    return {
      modules: [
        {
          id: 1,
          title: "Модуль",
          text: "Острые респираторные вирусные инфекции",
          link: "module-one",
          photo: "moduleImg1.png",
          maxBall: 80,
          tabCount: 6,
        },
        {
          id: 2,
          title: "Модуль",
          text: "COVID-19 - новая респираторная инфекция",
          link: "module-two",
          photo: "moduleImg2.png",
          maxBall: 60,
          tabCount: 3,
        },
        {
          id: 3,
          title: "Модуль",
          text: "Общие способы защиты от острых респираторных инфекций",
          link: "module-three",
          photo: "moduleImg3.png",
          maxBall: 60,
          tabCount: 3,
        },
        {
          id: 4,
          title: "Модуль",
          text: "COVID-19 и ВИЧ-инфекция",
          link: "module-four",
          photo: "moduleImg4.png",
          maxBall: 60,
          tabCount: 4,
        },
        {
          id: 5,
          title: "Модуль",
          text: "Оказание помощи женщинам с COVID-19 во время беременности и родов",
          link: "module-five",
          photo: "moduleImg5.png",
          tabCount: 2,
        },
        {
          id: 6,
          title: "Модуль",
          text: "COVID-19 и права человека",
          link: "module-six",
          photo: "moduleImg6.png",
          maxBall: 60,
          tabCount: 5,
        },
        {
          id: 7,
          title: "Модуль",
          text: "Конфиденциальность и информационная безопасность ЛЖВ",
          link: "module-seven",
          photo: "moduleImg7.png",
          tabCount: 2,
        },
        {
          id: 8,
          title: "Модуль",
          text: "Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19",
          link: "module-eight",
          photo: "moduleImg8.png",
          maxBall: 70,
          tabCount: 4,
        },
        {
          id: 9,
          title: "Модуль",
          text: "Профилактика эмоционального выгорания у сотрудников ННО, работающих с уязвимыми группами",
          link: "module-nine",
          photo: "moduleImg9.png",
          maxBall: 102,
          tabCount: 2,
        },
        {
          id: 10,
          sertificate: "СЕРТИФИКАТ",
          photo: "moduleImg10.png",
          link: "sertificate-test",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  mounted() {},
};
</script>
<style scoped>
.module {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.module__items {
  margin-bottom: 24px;
  margin-left: 24px;
  max-width: 550px;
  width: 100%;
  min-height: 250px;
}
.module__bg {
  position: absolute;
  bottom: 52px;
  left: 0;
}
.module__bg2 {
  position: absolute;
  right: 0;
  top: 145px;
  width: 300px;
  height: 500px;
}
@media (max-width: 576px) {
  .module__items {
    margin-left: 0px;
  }
}
</style>
