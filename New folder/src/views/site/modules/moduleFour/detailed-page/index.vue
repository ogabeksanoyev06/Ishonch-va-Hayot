<template>
  <div class="detailed-page" style="padding-top: 30px">
    <div class="container-fluid">
      <button class="prevDetailed" @click="detailedPages"> {{ $t("orqaga") }}</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <div class="sidebar__title">
              <p>{{ $t("Text4") }}</p>
              <p style="margin-bottom: 10px">
                {{ Math.floor((filterReadModule.length / 4) * 100) }} %
              </p>
              <div class="sidebar__prgoress">
                <div
                  class="sidebar__prgoress-bg"
                  :style="{ width: (filterReadModule.length / 4) * 100 + '%' }"
                ></div>
              </div>
            </div>

            <div class="divider" />
            <!-- <p class="sidebar__title">Introduction</p> -->
            <div
              :class="sectionContentId === sectionContent.id ? 'active' : ''"
              v-for="(
                sectionContent, sectionContentIndex
              ) in sectionContentTree"
              :key="sectionContentIndex"
              @click="sectionContenActive(sectionContent.id)"
              style="cursor: pointer"
            >
              <!-- <template slot="accordion-trigger">
                  <div class="module__accordion-header">
                    <div class="module__accordion-numb">
                      4.{{ sectionContentIndex + 1 }}
                    </div>
                    <h4 class="module__accordion-text">
                      {{ $t(sectionContent.name) }}
                    </h4>
                  </div>
                </template> -->
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
        <div class="content__main">
          <tab-1 v-show="isActive(0)" />
          <tab-2 v-show="isActive(1)" />
          <tab-3 v-show="isActive(2)" />
          <tab-7 v-show="isActive(3)" />
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
                <span style="margin-left: 10px"> {{ $t("orqaga") }}</span>
              </button>
              <button
                class="content__main-next"
                v-if="activeTab !== 3"
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
import Tab1 from "@/views/site/modules/moduleFour/tab-content/tab-1.vue";
import Tab2 from "@/views/site/modules/moduleFour/tab-content/tab-2.vue";
import Tab3 from "@/views/site/modules/moduleFour/tab-content/tab-3.vue";
import Tab7 from "@/views/site/modules/moduleFour/tab-content/tab-7.vue";
import ReadModule from "@/service/readModule.service";
import TokenService from "@/service/TokenService";
import { mapState } from "vuex";
import "@/assets/styles/pages/detailed-page.css";

export default {
  name: "detailedPage",
  components: {
    Tab1,
    Tab2,
    Tab3,
    Tab7,
  },
  data() {
    return {
      contentId: 0,
      sectionContentId: 0,
      activeTab: 0,
      prevModule: true,
      sectionContentTree: [
        {
          id: 0,
          name: "Основная информация о COVID-19... ",
          contentList: [
            {
              id: 0,
              name: "Основная информация о COVID-19 и ВИЧ - инфекция ",
            },
            {
              id: 1,
              name: "АРВТ препараты и COVID-19 ",
            },
            {
              id: 2,
              name: "Беременные и дети с ВИЧ и COVID-19",
            },
            {
              id: 3,
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
              id: 0,
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
              id: 0,
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
              id: 0,
              title:
                "Даже вакцинированные люди могут заболеть гриппом. Это объясняется тем, что противогриппозная вакцина защищает не от всех вирусов гриппа, а только от тех типов вируса, циркуляция которых ожидается в данный сезон гриппа. Кроме того, индивидуальный иммунитет конкретного человека может сделать его более восприимчивым к определенному типу гриппа. Однако вакцинация приносит пользу даже при заболевании гриппом, так как у привитых людей симптомы заболевания будут менее выраженными и, следовательно, менее опасными. Вакцины против большинства возбудителей острых респираторных вирусных инфекций не разработаны.",
            },
          ],
        },
      ],
    };
  },
  methods: {
    detailedPages() {
      this.$router.push({ path: "/module-four" });
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    async selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      localStorage.setItem("activeTabFour", Number(this.activeTab));
      try {
        let data = {
          moduleId: 4,
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
      localStorage.setItem("activeTabFour", Number(tab));
      this.activeTab = Number.parseInt(localStorage.getItem("activeTabFour"));
      if (this.activeTab === tab) {
        this.isActive(true);
      }
    },
    readResultModul() {
      this.$store.dispatch("getReadModule", TokenService.headersToken());
    },
  },
  computed: {
    ...mapState(["readModule"]),
    filterReadModule() {
      if (this.readModule !== null) {
        let resultReadModule = this.readModule?.data?.result?.filter(
          (item) => item.modulId === 4
        );
        return resultReadModule;
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.readResultModul();
    console.log(this.readModule);
  },
  created() {
    this.activeTab = Number.parseInt(localStorage.getItem("activeTabFour"))
      ? Number.parseInt(localStorage.getItem("activeTabFour"))
      : 0;
  },
};
</script>
<style scoped></style>
