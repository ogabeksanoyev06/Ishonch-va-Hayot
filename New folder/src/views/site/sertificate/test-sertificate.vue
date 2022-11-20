<template>
  <div class="sertificate_page container">
    <button
      class="btn__download"
      id="sertificate_down"
      @click="generateReport"
      v-if="filterModuleId"
    >
      {{ $t("Download") }}
    </button>
    <div v-if="sertificate" class="setficate_text">
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        voluptatum rem nesciunt voluptate nemo nihil non autem, quidem minima in
        unde rerum quis cum praesentium. Qui quo laborum asperiores sequi?
      </div>
      <button @click="goSertificate" style="background: black">Начать</button>
    </div>
    <div v-else>
      <Test_solving :questions-prop="rawTests"></Test_solving>
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
              <div class="img" style="max-width: 150px">
                <img src="/images/ser1.png" alt="img" />
              </div>
              <div class="img" style="max-width: 100px">
                <img src="/images/ser2.png" alt="img" />
              </div>
              <div class="img" style="max-width: 100px">
                <img src="/images/ser3.png" alt="img" />
              </div>
            </div>
            <img
              class="back"
              src="@/assets/sertificate_background.png"
              alt=""
            />
            <p class="certificate__title">СЕРТИФИКАТ</p>
            <p style="font-size: 20px; margin-bottom: 12px">
              {{ user.data.result.firstName + " " + user.data.result.lastName }}
            </p>
            <p style="font-size: 18px; margin-bottom: 8px; font-weight: 500">
              COVID-19: КЛИНИЧЕСКИЕ И ЭТИЧЕСКИЕ АСПЕКТЫ ОКАЗАНИЯ ПОМОЩИ
            </p>
            <div class="certificate__footer">
              <p>Дата выпуска: {{ new Date() | moment("DD.MM.YY") }}</p>
              <div class="certificate_img" style="max-width: 50px">
                <img src="/images/certificate_img.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </VueHtml2pdf>
  </div>
</template>
<script>
import Test_solving from "@/components/test-solving/Test_solving";
import VueHtml2pdf from "vue-html2pdf";
import { mapMutations, mapState } from "vuex";
export default {
  name: "setificate-test",
  components: { Test_solving, VueHtml2pdf },
  data() {
    return {
      rawTests: {
        questions: [
          {
            id: 0,
            question:
              "Укажите основные возбудители респираторных инфекций (ОРИ)?",
            suggestions: [
              {
                suggestion: "Бактерии, вирусы и грибки",
                res_number: 1,
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion: "Только бактерии",
                res_number: 2,
                id: "emaple2",
                isTrue: false,
              },
              {
                suggestion: "Только вирусы",
                res_number: 3,
                id: "emaple3",
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Укажите наиболее частые симптомы COVID-19?",
            suggestions: [
              {
                suggestion: "Повышение температуры, слабость, сухой кашель",
                res_number: 5,
                id: "emaple5",
                isTrue: true,
              },
              {
                suggestion: "Тошнота, диарея, боль в животе",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
              {
                suggestion: "Головная боль, повышение температуры, сыпь.",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Для каких категорий ЛЖВ особенно опасны COVID-19 и ОРИ?",
            suggestions: [
              {
                suggestion:
                  "для пожилых, лиц с хроническими заболеваниями, ослабленным иммунитетом, для лиц, не принимающих АРВТ",
                res_number: 9,
                id: "emaple9",
                isTrue: true,
              },
              {
                suggestion: "для детей и подростков",
                res_number: 10,
                id: "emaple10",
                isTrue: false,
              },
              {
                suggestion: "для беременных женщин",
                res_number: 10,
                id: "emaple10",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Какие меры защиты и профилактики от COVID-19 и ОРИ являются наиболее эффективными?",
            suggestions: [
              {
                suggestion: "Вакцинация",
                res_number: 13,
                id: "emaple13",
                isTrue: false,
              },
              {
                suggestion: "Носить маску, хорошо проветривать помещения",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
              {
                suggestion: "Все ответы верны",
                res_number: 14,
                id: "emaple14",
                isTrue: true,
              },
            ],
          },
          {
            id: 4,
            question:
              "Могут ли беременные женщины пройти полный курс вакцинации от COVID-19?",
            suggestions: [
              {
                suggestion: "Исследования еще не завершены",
                res_number: 17,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion: "Да, могут, согласно рекомендациям ВОЗ",
                res_number: 18,
                id: "emaple18",
                isTrue: true,
              },
              {
                suggestion:
                  "Нет, только определенные группы беременных с высоким риском заражения",
                res_number: 18,
                id: "emaple18",
                isTrue: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "Как обеспечить защиту прав человека и сокращение уровня стигмы и дискриминации во время пандемии COVID-19?",
            suggestions: [
              {
                suggestion:
                  "Обеспечить надлежащий доступ к медицинским услугам для ЛЖ",
                res_number: 21,
                id: "emaple21",
                isTrue: false,
              },
              {
                suggestion:
                  "Обеспечить конфиденциальность ВИЧ-статуса при обследовании и прохождении лечения от COVID-19",
                res_number: 22,
                id: "emaple22",
                isTrue: false,
              },
              {
                suggestion: "Все ответы верны",
                res_number: 22,
                id: "emaple22",
                isTrue: true,
              },
            ],
          },
          {
            id: 6,
            question:
              "Есть ли какие-либо особые рекомендации для людей, живущих с ВИЧ, на время пандемии COVID-19?",
            suggestions: [
              {
                suggestion:
                  "Запас АРВТ препаратов минимум на 30 дней, в идеале на 3 месяца",
                res_number: 25,
                id: "emaple25",
                isTrue: false,
              },
              {
                suggestion:
                  "Избегать походов в общественные места, медицинские учреждения при отсутствии экстренной ситуации",
                res_number: 26,
                id: "emaple26",
                isTrue: false,
              },
              {
                suggestion: "Верны оба утверждения",
                res_number: 26,
                id: "emaple26",
                isTrue: true,
              },
            ],
          },
          {
            id: 7,
            question:
              "Что из перечисленного ниже можно отнести к предвестникам профессионального выгорания?",
            suggestions: [
              {
                suggestion:
                  "отказ от потребностей в других сферах жизни, не связанных с работой",
                res_number: 29,
                id: "emaple29",
                isTrue: true,
              },
              {
                suggestion:
                  "сокращение общения с родственниками, друзьями и коллегами",
                res_number: 30,
                id: "emaple30",
                isTrue: false,
              },
              {
                suggestion:
                  "нарастающее чувство усталости, которое обычно игнорируется",
                res_number: 30,
                id: "emaple30",
                isTrue: false,
              },
              {
                suggestion: "все ответы верны",
                res_number: 30,
                id: "emaple30",
                isTrue: true,
              },
            ],
          },
          {
            id: 8,
            question:
              "Какое одно из самых первых средств следует использовать, если случилась кризисная ситуация и Вы сильно понервничали?",
            suggestions: [
              {
                suggestion:
                  "рассказать о том, что случилось, о чувствах, которые испытываете в данный момент, коллеге или руководителю или человеку, которому Вы доверяете",
                res_number: 9,
                id: "emaple33",
                isTrue: true,
              },
              {
                suggestion: "отдохнуть, поспать или расслабиться",
                res_number: 9,
                id: "emaple34",
                isTrue: false,
              },
              {
                suggestion:
                  "принять душ, сделать дыхательные или физические упражнения",
                res_number: 9,
                id: "emaple34",
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question:
              "Синдром, являющийся результатом хронического стресса, возникающего на рабочем месте, и не преодоленный успешно, называется",
            suggestions: [
              {
                suggestion: "апатией",
                res_number: 10,
                id: "emaple37",
                isTrue: false,
              },
              {
                suggestion: "тревогой",
                res_number: 10,
                id: "emaple38",
                isTrue: false,
              },
              {
                suggestion: "выгоранием",
                res_number: 10,
                id: "emaple37",
                isTrue: true,
              },
              {
                suggestion: "депрессией",
                res_number: 10,
                id: "emaple38",
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 70,
        quesCount: 10,
        moduleId: 11,
        moduleName: "sertificate",
        moduleTestStart:
          "Перед тем, как приступить к изучению материала модуля, попробуйте ответить на следующие вопросы.",
        moduleTestEnd: "Очень хорошо!",
      },
    };
  },
  methods: {
    ...mapMutations(["setSertificate"]),
    goSertificate() {
      this.setSertificate(false);
    },
    generateReport() {
      this.$emit(this.$refs.html2Pdf.generatePdf());
    },
  },
  computed: {
    ...mapState(["user", "sertificate", "testResults"]),
    filterModuleId() {
      if (this.testResults !== null) {
        let resultModuleId = this.testResults?.result?.filter(
          (item) => item.modulId === this.rawTests.moduleId
        );
        return resultModuleId[0]?.testBall >= this.rawTests.maxBall;
      } else {
        return null;
      }
    },
  },
};
</script>
<style scoped>
.setficate_text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}
.certificate__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 50px;
}
.certificate_img .img {
  width: 100%;
  margin: 10px;
}
.certificate_img .img img {
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
.sertificate_page {
  min-height: calc(100vh - 102px);
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
  margin-bottom: 20px;
}
</style>
