<template>
  <div class="detailed-page">
    <div class="container-fluid">
      <button class="prevDetailed" @click="detailedPages">{{$t("orqaga")}}</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <div class="sidebar__title">
              <p>{{$t("modul2")}}</p>
              <p style="margin-bottom: 10px">
                {{ (filterReadModule?.length / 3) * 100 }} %
              </p>
              <div class="sidebar__prgoress">
                <div
                  class="sidebar__prgoress-bg"
                  :style="{ width: (filterReadModule?.length / 3) * 100 + '%' }"
                ></div>
              </div>
            </div>

            <div class="divider" />
            <!-- <p class="sidebar__title">Introduction</p> -->
            <Accordion>
              <AccordionItem
                :class="sectionContentId === sectionContent.id ? 'active' : ''"
                v-for="(
                  sectionContent, sectionContentIndex
                ) in sectionContentTree"
                :key="sectionContentIndex"
                @click="sectionContenActive(sectionContent.id)"
              >
                <template slot="accordion-trigger">
                  <div class="module__accordion-header">
                    <div class="module__accordion-numb">
                      2.{{ sectionContentIndex + 1 }}
                    </div>
                    <h4 class="module__accordion-text">
                      {{ $t(sectionContent.name) }}
                    </h4>
                  </div>
                </template>
                <template slot="accordion-content">
                  <div
                    style="padding: 0 15px 15px"
                    v-for="(
                      content, contentIndex
                    ) in sectionContent.contentList"
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
                          filterReadModule[content.id]?.paragraphId ===
                          content.id
                        "
                        src="/icons/check.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </template>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div class="content__main">
          <tab-1 v-show="isActive(0)" />
          <tab-4 v-show="isActive(1)" />
          <tab-7 v-show="isActive(2)" />
          <div>
            <div style="margin: 30px 0" class="divider" />
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
                <span style="margin-left: 10px">Назад </span>
              </button>
              <button
                class="content__main-next"
                v-if="activeTab !== 2"
                @click="activeTabList(activeTab + 1)"
              >
                <span style="margin-right: 10px">Далее</span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Accordion from "@/components/shared-components/Accordion.vue";
import AccordionItem from "@/components/shared-components/AccordionItem.vue";
import Tab1 from "@/views/site/modules/moduleTwo/tab-content/tab-1.vue";
import Tab4 from "@/views/site/modules/moduleTwo/tab-content/tab-4.vue";
import Tab7 from "@/views/site/modules/moduleTwo/tab-content/tab-7.vue";
import ReadModule from "@/service/readModule.service";
import TokenService from "@/service/TokenService";
import { mapState } from "vuex";
import "@/assets/styles/pages/detailed-page.css";
export default {
  name: "detailedPage",
  components: {
    Accordion,
    AccordionItem,
    Tab1,
    Tab4,
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
          name: "Возбудитель - COVID-19, основные симптомы",
          contentList: [
            {
              id: 0,
              name: "К наиболее распространенным симптомам COVID-19 относятся",
              isActive: true,
            },
          ],
        },
        {
          id: 1,
          name: "Симптомы ОРВИ и гриппа",
          contentList: [
            {
              id: 1,
              name: "Обзор вакцин и новые рекомендации о вакцинации от COVID-19",
            },
          ],
        },
        {
          id: 2,
          name: "Упражнение",
          contentList: [
            {
              id: 2,
              name: "Упражнение",
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
      this.$router.push({ path: "/module-two" });
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    async selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      localStorage.setItem("activeTabTwo", Number(this.activeTab));
      try {
        let data = {
          moduleId: 2,
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
      localStorage.setItem("activeTabTwo", Number(tab));
      this.activeTab = Number.parseInt(localStorage.getItem("activeTabTwo"));
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
          (item) => item.modulId === 2
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
    this.activeTab = Number.parseInt(localStorage.getItem("activeTabTwo"))
      ? Number.parseInt(localStorage.getItem("activeTabTwo"))
      : 0;
  },
};
</script>
<style scoped></style>
