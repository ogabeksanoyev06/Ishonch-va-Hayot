<template>
  <div class="detailed-page">
    <div class="container-fluid">
      <button class="prevDetailed" @click="detailedPages">Hазад</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <div class="sidebar__title">
              <p>МОДУЛЬ 6: COVID-19 И ПРАВА ЧЕЛОВЕКА</p>
              <p style="margin-bottom: 10px">
                {{ (filterReadModule.length / 5) * 100 }} %
              </p>
              <div class="sidebar__prgoress">
                <div
                  class="sidebar__prgoress-bg"
                  :style="{ width: (filterReadModule.length / 5) * 100 + '%' }"
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
                      6.{{ sectionContentIndex + 1 }}
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
          <tab-3 v-show="isActive(1)" />
          <tab-6 v-show="isActive(2)" />
          <tab-7 v-show="isActive(3)" />
          <tab-10 v-show="isActive(4)" />
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
                <span style="margin-left: 10px"> Назад </span>
              </button>
              <button
                class="content__main-next"
                v-if="activeTab !== 4"
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
import "@/assets/styles/pages/detailed-page.css";
import Tab1 from "@/views/site/modules/moduleSix/tab-content/tab-1.vue";
import Tab3 from "@/views/site/modules/moduleSix/tab-content/tab-3.vue";
import Tab6 from "@/views/site/modules/moduleSix/tab-content/tab-6.vue";
import Tab7 from "@/views/site/modules/moduleSix/tab-content/tab-7.vue";
import Tab10 from "@/views/site/modules/moduleSix/tab-content/tab-10.vue";
import ReadModule from "@/service/readModule.service";
import TokenService from "@/service/TokenService";
import { mapState } from "vuex";
export default {
  name: "detailedPage",
  components: {
    Accordion,
    AccordionItem,
    Tab1,
    Tab3,
    Tab6,
    Tab7,
    Tab10,
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
          name: "Основные принципы медицинской этики.",
          contentList: [
            {
              id: 0,
              name: "Основная информация",
            },
          ],
        },
        {
          id: 1,
          name: "Права человека и COVID-19",
          contentList: [
            {
              id: 1,
              name: "Право на жизнь и обязанность защищать жизнь",
            },
          ],
        },
        {
          id: 2,
          name: "Этические принципы оптимального оказания медицинской помощи во время пандемии COVID-19",
          contentList: [
            {
              id: 2,
              name: "Этические принципы оптимального оказания медицинской помощи во время пандемии COVID-19",
            },
            {
              id: 3,
              name: "Неоставление без помощи",
            },
          ],
        },
        {
          id: 3,
          name: "Тест",
          contentList: [
            {
              id: 4,
              name: "Тест",
            },
          ],
        },
      ],
    };
  },
  methods: {
    detailedPages() {
      this.$router.push({ path: "/module-six" });
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    async selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      localStorage.setItem("activeTabSix", Number(this.activeTab));
      try {
        let data = {
          moduleId: 6,
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
      localStorage.setItem("activeTabSix", Number(tab));
      this.activeTab = Number.parseInt(localStorage.getItem("activeTabSix"));
      if (this.activeTab === tab) {
        this.isActive(true);
      }
    },
  },
  computed: {
    ...mapState(["readModule"]),
    filterReadModule() {
      if (this.readModule !== null) {
        let resultReadModule = this.readModule?.data?.result?.filter(
          (item) => item.modulId === 6
        );
        return resultReadModule;
      } else {
        return null;
      }
    },
  },
  created() {
    this.activeTab = Number.parseInt(localStorage.getItem("activeTabSix"))
      ? Number.parseInt(localStorage.getItem("activeTabSix"))
      : 0;
  },
  mounted() {
    this.readResultModul();
    this.isActive();
  },
};
</script>
