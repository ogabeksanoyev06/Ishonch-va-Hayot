<template>
  <div class="detailed-page">
    <div class="container-fluid">
      <button class="prevDetailed" @click="detailedPages">
        {{ $t("orqaga") }}
      </button>
      <div class="sidebar">
        <div class="module__accordion">
          <div class="sidebar__title">
            <p>
              {{ $t("infeksiya") }}
            </p>
            <p style="margin-bottom: 10px">
              {{ Math.floor((filterReadModule.length / 6) * 100) }} %
            </p>
            <div class="sidebar__prgoress">
              <div
                class="sidebar__prgoress-bg"
                :style="{ width: (filterReadModule.length / 6) * 100 + '%' }"
              ></div>
            </div>
          </div>
          <div class="divider" />
          <!-- <p class="sidebar__title">Introduction</p> -->

          <div
            v-for="(sectionContent, sectionContentIndex) in sectionContentTree"
            :key="sectionContentIndex"
            :class="sectionContentId === sectionContent.id ? 'active' : ''"
            @click="sectionContenActive(sectionContent.id)"
            style="cursor: pointer"
          >
            <div>
              <div
                style="padding: 15px 15px 15px"
                v-for="(content, contentIndex) in sectionContent.contentList"
                :key="contentIndex"
                @click="selectContent(sectionContent.id, content.id)"
              >
                <div
                  style="justify-content: space-between"
                  class="module__accordion-item"
                  :class="contentId === content.id ? 'active' : ''"
                >
                  <div class="d-flex">
                    <img
                      class="module__accordion-img"
                      src="/icons/vajni.svg"
                      alt=""
                      v-if="content.name == 'Bажная информация'"
                    />
                    <img
                      class="module__accordion-img"
                      src="/icons/test.svg"
                      alt=""
                      v-else-if="content.name == 'Тест'"
                    />
                    <img
                      class="module__accordion-img"
                      src="/icons/book.svg"
                      alt=""
                      v-else
                    />
                    <h4 class="module__accordion-text">
                      {{ $t(content.name) }}
                    </h4>
                  </div>
                  <img
                    v-if="
                      filterReadModule[content.id]?.paragraphId === content.id
                    "
                    src="/icons/check.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content__main">
          <tab-1 v-show="isActive(0)" />
          <tab-6 v-show="isActive(1)" />
          <tab-7 v-show="isActive(2)" />
          <tab-8 v-show="isActive(3)" />
          <tab-11 v-show="isActive(4)" />
          <tab-12 v-show="isActive(5)" @newDate="newDate" />
          <div>
            <div class="content__main-btn">
              <button
                class="content__main-prev"
                v-if="activeTab !== 0"
                @click="activeTabList(activeTab - 1)"
              >
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.47773 0L8 1.41L3.05533 6L8 10.59L6.47773 12L0 6L6.47773 0Z"
                    fill="#0F101D"
                  />
                </svg>
                <span style="margin-left: 10px">{{ $t("orqaga") }} </span>
              </button>
              <button
                class="content__main-next"
                v-if="activeTab !== 5"
                @click="activeTabList(activeTab + 1)"
              >
                <span style="margin-right: 10px">{{ $t("keyi") }}</span>
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z"
                    fill="#0F101D"
                  />
                </svg>
              </button>
            </div>
            <div style="margin: 30px 0" class="divider" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab1 from "../tab-content/tab-1.vue";
import Tab6 from "../tab-content/tab-6.vue";
import Tab7 from "../tab-content/tab-7.vue";
import Tab8 from "../tab-content/tab-8.vue";
import Tab11 from "../tab-content/tab-11.vue";
import Tab12 from "../tab-content/tab-12.vue";
import "@/assets/styles/pages/detailed-page.css";
import ReadModule from "@/service/readModule.service";
import TokenService from "@/service/TokenService";
import { mapMutations, mapState } from "vuex";

export default {
  name: "detailedPage",
  components: {
    Tab1,
    Tab6,
    Tab7,
    Tab8,
    Tab11,
    Tab12,
  },
  data() {
    return {
      contentId: 0,
      sectionContentId: 0,
      activeTab: 0,
      date: null,
      prevModule: true,
      sectionContentTree: [
        {
          id: 0,
          name: "Острые респираторные вирусные инфекции",
          contentList: [
            {
              id: 0,
              name: "Основная информация",
              isActive: true,
            },
            {
              id: 1,
              name: "Типичные симптомы ОРВИ и Гриппа",
              isActive: false,
            },
            {
              id: 2,
              name: "Упражнение",
              isActive: true,
            },
            {
              id: 3,
              name: "Меры профилактики ОРВИ и гриппа",
              isActive: true,
            },
            {
              id: 4,
              name: "Bажная информация",
              isActive: true,
            },
            {
              id: 5,
              name: "Тест",
            },
          ],
        },
      ],
      ImportantInformation: [
        {
          id: 0,
          name: "Как вакцина защищает нас?",
          text: [
            {
              id: 0,
              title:
                "Вакцина против гриппа содержит вирусные белки, после попадания которых в организм, он воспринимает их как чужеродные и начинается выработка специфических антител. Если после этого произойдет заражение настоящим вирусом, эти антитела прикрепляются к частицам проникшего вируса гриппа и ликвидируют его до того, как будут повреждены ткани; в результате люди не заболевают или болезнь протекает в менее тяжелой форме.",
            },
          ],
        },
        {
          id: 1,
          name: "Как часто нужно вакцинироваться?",
          text: [
            {
              id: 1,
              title:
                "Важно делать прививки от гриппа каждый год. Это объясняется тем, что вирусы гриппа постоянно меняются, вследствие чего каждый год могут циркулировать другие штаммы, а также, что иммунитет от вакцинации против гриппа со временем снижается. Вакцины против сезонного гриппа обновляются каждый год, чтобы обеспечить максимально возможную защиту путем подбора такого состава вакцин, который бы наиболее соответствовал тем штаммам, которые циркулируют.",
            },
          ],
        },
        {
          id: 2,
          name: "Безопасны ли вакцины от гриппа?",
          text: [
            {
              id: 2,
              title:
                "Вакцины против гриппа безопасны и не вызывают грипп. Вакцинированный человек может испытать реакцию на вакцинацию, но такая реакция не будет гриппом, а симптомы будут мягче, чем при заболевании гриппом.",
            },
          ],
        },
        {
          id: 2,
          name: "Может ли вакцинированный человек заразиться гриппом?",
          text: [
            {
              id: 3,
              title:
                "Даже вакцинированные люди могут заболеть гриппом. Это объясняется тем, что противогриппозная вакцина защищает не от всех вирусов гриппа, а только от тех типов вируса, циркуляция которых ожидается в данный сезон гриппа. Кроме того, индивидуальный иммунитет конкретного человека может сделать его более восприимчивым к определенному типу гриппа. Однако вакцинация приносит пользу даже при заболевании гриппом, так как у привитых людей симптомы заболевания будут менее выраженными и, следовательно, менее опасными. Вакцины против большинства возбудителей острых респираторных вирусных инфекций не разработаны.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    ...mapMutations([""]),
    detailedPages() {
      this.$router.push({ path: "/module-one" });
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    async selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      console.log(this.contentId);
      localStorage.setItem("activeTabOne", Number(this.activeTab));
      try {
        let data = {
          moduleId: 1,
          paragraphId: contentId,
        };
        let res = await ReadModule.readModule(
          data,
          TokenService.headersToken()
        );
        if (res.data.error) {
          console.log(res.data.error);
        } else {
          console.log(res.data);
        }
      } catch (error) {
        console.log(error);
      }
      this.readResultModul();
    },
    isActive(tab) {
      return this.activeTab === tab;
    },
    activeTabList(tab) {
      localStorage.setItem("activeTabOne", Number(tab));
      this.activeTab = Number.parseInt(localStorage.getItem("activeTabOne"));
      if (this.activeTab === tab) {
        this.isActive(true);
      }
    },
    readResultModul() {
      this.$store.dispatch("getReadModule", TokenService.headersToken());
    },
    getTest() {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    },
  },
  computed: {
    ...mapState(["readModule", "testResults"]),
    filterReadModule() {
      if (this.readModule !== null) {
        let resultReadModule = this.readModule?.data?.result?.filter(
          (item) => item.modulId === 1
        );
        return resultReadModule;
      } else {
        return null;
      }
    },
    filterModuleId() {
      if (this.testResults !== null) {
        let resultModuleId = this.testResults?.result?.filter(
          (item) => item.modulId === 1
        );
        return resultModuleId[0]?.testBall;
      } else {
        return null;
      }
    },
  },
  watch: {},
  mounted() {
    this.readResultModul();
    if (TokenService.getToken() !== null) {
      this.getTest();
    }
  },
  created() {
    this.activeTab = Number.parseInt(localStorage.getItem("activeTabOne"))
      ? Number.parseInt(localStorage.getItem("activeTabOne"))
      : 0;
  },
};
</script>
<style scoped></style>
