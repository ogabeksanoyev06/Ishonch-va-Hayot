<template>
  <div class="detailed-page">
    <div class="container-fluid">
      <button class="prevDetailed" @click="detailedPages">
        {{ $t("orqaga") }}
      </button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <div class="sidebar__title">
              <p>
                {{ $t("Module") }} 8:
                {{
                  $t(
                    "Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19"
                  )
                }}
              </p>
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
            <div
              v-for="(
                sectionContent, sectionContentIndex
              ) in sectionContentTree"
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
          <tab-5 v-show="isActive(1)" />
          <tab-11 v-show="isActive(2)" />
          <tab-4 v-show="isActive(3)" />
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
                <span style="margin-left: 10px"> {{ $t("orqaga") }} </span>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab1 from "@/views/site/modules/moduleEight/tab-content/tab-1.vue";
import Tab5 from "@/views/site/modules/moduleEight/tab-content/tab-5.vue";
import Tab11 from "@/views/site/modules/moduleEight/tab-content/tab-11.vue";
import Tab4 from "@/views/site/modules/moduleEight/tab-content/tab-4.vue";
import ReadModule from "@/service/readModule.service";
import TokenService from "@/service/TokenService";
import { mapState } from "vuex";
import "@/assets/styles/pages/detailed-page.css";
export default {
  name: "detailedPage",
  components: {
    Tab1,
    Tab5,
    Tab11,
    Tab4,
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
          name: "Введение. Определение и основные принципы эффективной...",
          contentList: [
            {
              id: 0,
              name: "Введение. Определение и основные принципы эффективной коммуникации в условиях пандемии COVID-19 ",
            },
            {
              id: 1,
              name: "Основные навыки эффективного общения: коммуникативные барьеры, невербальное общение, активное слушание, сопереживание и преодоление стигмы, открытые и закрытые вопросы, влияние факторов внешней среды.",
            },
            {
              id: 2,
              name: "Тест - 1",
            },
            {
              id: 3,
              name: "Тест - 2",
            },
          ],
        },
      ],
    };
  },
  methods: {
    detailedPages() {
      this.$router.push({ path: "/module-eight" });
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    async selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      localStorage.setItem("activeTabEight", Number(this.activeTab));
      try {
        let data = {
          moduleId: 8,
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
      localStorage.setItem("activeTabEight", Number(tab));
      this.activeTab = Number.parseInt(localStorage.getItem("activeTabEight"));
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
          (item) => item.modulId === 8 || item.modulId === 10
        );
        return resultReadModule;
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.readResultModul();
  },
  created() {
    this.activeTab = Number.parseInt(localStorage.getItem("activeTabEight"))
      ? Number.parseInt(localStorage.getItem("activeTabEight"))
      : 0;
  },
};
</script>
<style scoped>
.module__accordion-item {
  justify-content: space-between;
}
</style>
