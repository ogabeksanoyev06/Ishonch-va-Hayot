<template>
  <div class="tests-results">
    <div class="tests__results-title">{{ $t("MyModules") }}</div>
    <div class="tests__results-items">
      <div
        class="tests__results-item"
        v-for="(item, idx) in modules"
        :key="idx"
        :class="filterModuleId !== null ? 'active' : ''"
      >
        <div class="tests__module-title">
          {{ $t("Module") }} {{ item.id }}: {{ item.text }}
        </div>
        <div class="d-flex align-items-center">
          <router-link to="/" class="">
            <div class="d-flex align-items-center">
              <img class="me-2" src="icons/video.svg" alt="" />
              <span style="font-size: 14px; color: #333333; font-weight: 700">
                Начало урока
              </span>
            </div>
          </router-link>
          <div class="tests__module-result">
            <div class="text-center" v-if="loading">
              <div
                class="spinner-border spinner-border-sm text-dark"
                role="status"
              ></div>
            </div>
            <div v-if="!loading">{{ filterModuleId(item.id) }}</div>
            <div v-else>null</div>
          </div>
        </div>
      </div>
    </div>
    <div class="tests__results-title">{{ $t("MySertificate") }}</div>
    <div class="serteficate__wrap">
      <div class="certificate">
        <div class="content_certificate">
          <div class="certificate_img">
            <img src="/images/certificate_img1.png" alt="img" />
          </div>
          <img class="back" src="@/assets/sertificate_background.png" alt="" />
          <p class="certificate__title">СЕРТИФИКАТ</p>
          <p style="font-size: 20px; margin-bottom: 12px">
            {{ user.data.result.firstName + " " + user.data.result.lastName }}
          </p>
          <p style="font-size: 18px; margin-bottom: 8px; font-weight: 500">
            COVID-19: КЛИНИЧЕСКИЕ И ЭТИЧЕСКИЕ АСПЕКТЫ ОКАЗАНИЯ ПОМОЩИ
          </p>
          <div class="certificate__footer">
            <p>Дата выпуска: {{ new Date() | moment("Do MM YY") }}</p>
            <div class="certificate_img" style="max-width: 50px">
              <img src="/images/certificate_img.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :paginate-elements-by-height="1200"
        :filename="user.data.result.firstName + user.data.result.lastName"
        :pdf-quality="2"
        pdf-format="a4"
        pdf-orientation="portrait"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
          <div class="certificate">
            <div class="content_certificate">
              <div class="certificate_img">
                <img src="/images/certificate_img1.png" alt="img" />
              </div>
              <img
                class="back"
                src="@/assets/sertificate_background.png"
                alt=""
              />
              <p class="certificate__title">CERTIFICATE</p>
              <p style="font-size: 16px; margin-bottom: 10px">
                OFF APPRECIATION
              </p>
              <p style="font-size: 18px; margin-bottom: 8px; font-weight: 500">
                THIS CERTIFICATE IS PROUDLY PRESENTED TO
              </p>
              <p style="font-size: 20px; margin-bottom: 12px">
                {{
                  user.data.result.firstName + " " + user.data.result.lastName
                }}
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </p>
              <div class="certificate__footer">
                <p>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</p>
                <div class="certificate_img" style="max-width: 50px">
                  <img src="/images/certificate_img.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </VueHtml2pdf>
      <button class="btn__download" @click="generateReport">
        {{ $t("Download") }}
      </button>
    </div>
  </div>
</template>

<script>
import TokenService from "@/service/TokenService";
import VueHtml2pdf from "vue-html2pdf";
import { mapGetters } from "vuex";
export default {
  name: "tests-results",
  components: { VueHtml2pdf },
  data() {
    return {
      modules: [
        {
          id: 1,
          title: "Модуль",
          text: "Острые респираторные вирусные инфекции",
          link: "module-one",
          photo: "moduleImg1.png",
          maxBall: 70,
        },
        {
          id: 2,
          title: "Модуль",
          text: "COVID-19 - новая респираторная инфекция",
          link: "module-two",
          photo: "moduleImg2.png",
        },
        {
          id: 3,
          title: "Модуль",
          text: "Общие способы защиты от острых респираторных инфекций",
          link: "module-three",
          photo: "moduleImg3.png",
        },
        {
          id: 4,
          title: "Модуль",
          text: "COVID-19 и ВИЧ-инфекция",
          link: "module-four",
          photo: "moduleImg4.png",
        },
        {
          id: 5,
          title: "Модуль",
          text: "Оказание помощи женщинам с COVID-19 во время беременности и родов",
          link: "module-five",
          photo: "moduleImg5.png",
        },
        {
          id: 6,
          title: "Модуль",
          text: "COVID-19 и права человека",
          link: "module-six",
          photo: "moduleImg6.png",
        },
        {
          id: 7,
          title: "Модуль",
          text: "Конфиденциальность и информационная безопасность ЛЖВ",
          link: "module-seven",
          photo: "moduleImg7.png",
        },
        {
          id: 8,
          title: "Модуль",
          text: "Навыки эффективного общения в деятельности социального работника в условиях пандемии COVID-19",
          link: "module-eight",
          photo: "moduleImg8.png",
        },
        {
          id: 9,
          title: "Модуль",
          text: "Профилактика эмоционального выгорания у сотрудников ННО, работающих с уязвимыми группами",
          link: "module-nine",
          photo: "moduleImg9.png",
        },
      ],
    };
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
    filterModuleId(id) {
      if (this.testResults.result.length > 0) {
        let resultModuleId = this.testResults?.result?.filter(
          (item) => item.modulId === id
        );
        return resultModuleId[0]?.testBall;
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
    ...mapGetters(["testResults", "loading"]),
  },
  mounted() {
    this.$store.dispatch("getTestResults", TokenService.headersToken());
    console.log();
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
.pdf-content {
  min-height: 100vh;
}
.certificate {
  max-width: 1200px;
  width: 100%;
  background-color: #f2f7f2;
  padding: 12px;
}
.content_certificate {
  background-color: #fff;
  position: relative;
  z-index: 1;
  padding: 10px 40px;
  overflow: hidden;
}
.certificate__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content_certificate p {
  color: #1f2136;
  line-height: 130%;
  text-align: center;
}
.certificate__title {
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 30px;
}
.certificate_img {
  max-width: 30px;
  width: 100%;
  overflow: hidden;
}
.certificate_img img {
  width: 100%;
  object-fit: contain;
}
.back {
  position: absolute;
  bottom: -20px;
  right: -0px;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
.serteficate__wrap {
}
.btn__download {
  min-width: 113px;
  height: 48px;
  background: #edf5ff;
  font-weight: 600;
  font-size: 18px;
  color: #95abc6;
  border-radius: 10px;
  margin-top: 20px;
}
.tests__results-title {
  font-size: 20px;
  line-height: 26px;
  font-weight: 700;
  color: #95abc6;
  margin-bottom: 20px;
}
.tests__results-items {
  margin-bottom: 30px;
}
.tests__results-item {
  display: none;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e5ecf5;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 20px;
}
.tests__results-item.active {
  display: flex;
}
.tests__module-title {
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
  max-width: 350px;
  width: 100%;
}
.tests__module-result {
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
  color: #7cb500;
  margin-left: 20px;
}
@media (max-width: 800px) {
  .tests__results-item {
    flex-wrap: wrap;
    padding: 10px;
  }
  .tests__module-title {
    margin-bottom: 10px;
    line-height: 20px;
    font-weight: 500;
  }
}
</style>
