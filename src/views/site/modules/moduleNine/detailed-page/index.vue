<template>
  <div class="detailed-page">
    <div class="container-fluid">
      <button class="prevDetailed" @click="detailedPages">Hазад</button>
      <div class="content">
        <div class="sidebar">
          <div class="module__accordion">
            <div class="sidebar__title">
              <p>{{ $t("Module") }} 9: {{ $t("TextModule9") }}</p>
              <p style="margin-bottom: 10px">
                {{ Math.floor((filterReadModule.length / 1) * 100) }} %
              </p>
              <div class="sidebar__prgoress">
                <div
                  class="sidebar__prgoress-bg"
                  :style="{ width: (filterReadModule.length / 1) * 100 + '%' }"
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
                    <h4 class="module__accordion-text">
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
                      {{ $t(content.name) }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content__main">
          <tab-1 v-show="isActive(0)" />
          <!-- <div>
            <div style="margin: 30px 0" class="divider" />
            <div class="content__main-btn">
              <button class="content__main-prev">
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
                v-if="activeTab !== 5"
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
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-page.css";
import Tab1 from "@/views/site/modules/moduleNine/tab-content/tab-1.vue";
import ReadModule from "@/service/readModule.service";
import TokenService from "@/service/TokenService";
import { mapState } from "vuex";
export default {
  name: "detailedPage",
  components: {
    Tab1,
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
          name: "Определение, причины и признаки эмоционального выгорания",
          contentList: [
            {
              id: 0,
              name: "Определение, причины и признаки эмоционального выгорания",
            },
          ],
        },
      ],
    };
  },
  methods: {
    detailedPages() {
      this.$router.push({ path: "/module-nine" });
    },
    sectionContenActive(id) {
      this.sectionContentId = id;
    },
    async selectContent(sectionContentId, contentId) {
      this.sectionContentId = sectionContentId;
      this.contentId = contentId;
      this.activeTab = contentId;
      localStorage.setItem("activeTabNine", Number(this.activeTab));
      try {
        let data = {
          moduleId: 9,
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
      if (Number.parseInt(localStorage.getItem("activeTabNine"))) {
        return Number.parseInt(localStorage.getItem("activeTabNine")) === tab;
      } else {
        return tab === 0;
      }
    },
    readResultModul() {
      this.$store.dispatch("getReadModule", TokenService.headersToken());
    },
    activeTabList(tab) {
      console.log(tab);
      this.contentId = tab;
      if (this.contentId >= 7) {
        this.contentId = 0;
      }
      if (this.contentId < 0) {
        this.contentId = 2;
      }
    },
  },
  computed: {
    ...mapState(["readModule"]),
    filterReadModule() {
      if (this.readModule !== null) {
        let resultReadModule = this.readModule?.data?.result?.filter(
          (item) => item.modulId === 9
        );
        return resultReadModule;
      } else {
        return null;
      }
    },
  },
  mounted() {
    this.readResultModul();
    console.log(this.filterReadModule);
  },
  created() {
    this.activeTab = Number.parseInt(localStorage.getItem("activeTabNine"))
      ? Number.parseInt(localStorage.getItem("activeTabNine"))
      : 0;
  },
};
</script>
