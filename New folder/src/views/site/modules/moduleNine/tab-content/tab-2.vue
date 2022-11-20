<template>
  <div class="container">
    <AppModal v-if="closeDancing" @close="closeModalDancing">
      <div class="modal__wrap">
        <div>
          <div class="dancing__body">
            <p class="dancing__text">
              Давайте заполним анкету – опросник для определения эмоционального
              выгорания. Отвечайте на вопросы не задумываясь, ориентируясь на
              первое впечатление. После теста вы узнаете свой личный результат
            </p>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button class="dancing__btn" @click="closeModalDancing">Ok</button>
        </div>
      </div>
    </AppModal>
    <div class="results">{{ filterModuleId }} балл</div>
    <div class="module_title" style="margin: 30px 0">Варианты ситуаций</div>
    <div
      class="test__items"
      v-for="(item, idx) in rawTests.questions"
      :key="idx"
    >
      <div id="test_question">{{ idx + 1 }}. {{ $t(item.question) }}</div>
      <div class="test__answers">
        <div class="test__options">
          <div v-for="(answers, i) in item.suggestions" :key="i">
            <label class="test__options-item">
              <div class="d-flex">
                <input
                  class="form_check_input"
                  type="radio"
                  :id="answers.id"
                  :value="answers"
                  v-model="selectedAnswer[idx]"
                />
                <span
                  class="test__options-name"
                  :class="`test__options-${answers.id}`"
                >
                  {{ answers.suggestion }}
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="test__details">
      <div class="test__details-left"></div>
      <div class="test__details-right">
        <div
          @click="testFinish"
          class="test__details-item"
          :class="selectedAnswer.length === 0 ? 'disabled' : ''"
        >
          <img src="/icons/finish.svg" alt="" />
          <p>{{ $t("Send") }}</p>
        </div>
      </div>
    </div>
    <router-link :to="{ name: 'module-nine' }">
      <button class="prevDetailed">{{ $t("Module") }} 9</button>
    </router-link>

    <AppModal v-if="onlineTestAnswers" @close="closeModal(rawTests.questions)">
      <div class="modal__wrap">
        <div class="modal__body">
          <div
            v-if="filterModuleId <= 10 && filterModuleId >= 0"
            style="background: #7cb500; border-radius: 10px; padding: 8px 10px"
          >
            <img src="/svg/smile1.svg" alt="" />
          </div>
          <div class="results">{{ filterModuleId }} балл</div>
          <div
            class="result_text"
            v-if="filterModuleId <= 23 && filterModuleId >= 0"
          >
            крайне низкий
          </div>
          <div
            class="result_text"
            v-else-if="filterModuleId <= 49 && filterModuleId > 24"
          >
            низкое значение
          </div>
          <div
            class="result_text"
            v-else-if="filterModuleId <= 75 && filterModuleId > 49"
          >
            среднее значение
          </div>
          <div
            class="result_text"
            v-else-if="filterModuleId <= 101 && filterModuleId > 75"
          >
            высокое значение
          </div>
          <div class="result_text" v-else>крайне высокое</div>
          <button class="result__btn" @click="closeModal(rawTests.questions)">
            Ok
          </button>
        </div>
      </div>
    </AppModal>
  </div>
</template>
<script>
import AppModal from "@/components/shared-components/AppModal.vue";
import "@/assets/styles/pages/detailed-tab.css";
import axios from "axios";
import TokenService from "@/service/TokenService";
import { mapState } from "vuex";
export default {
  name: "tab-11",
  components: { AppModal },
  data() {
    return {
      onlineTestAnswers: false,
      closeDancing: true,
      selectedAnswer: [],
      maxBall: 70,
      quesCount: null,
      testCount: 10,
      moduleName: "module-eight",
      moduleTestStart: "String",
      moduleTestEnd: "String",
      rawTests: {
        questions: [
          {
            id: 0,
            question:
              "Я чувствую себя эмоционально опустошенным(ой), без ярких эмоций и чувств",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 1,
            question: "К концу рабочего дня я чувствую себя как выжатый лимон.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 2,
            question:
              "По утрам в рабочие дни у меня плохое настроение, я считаю дни и часы до выходных",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 3,
            question:
              "Я хорошо понимаю, что чувствуют мои пациенты, и использую это для более успешного лечения.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 4,
            question:
              "Я общаюсь с моими пациентами (больными) только формально, без лишних эмоций и стремлюсь свести время общения с ними до минимума.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 5,
            question:
              "Я чувствую себя энергичным(ой) и эмоционально приподнятым(ой).",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 6,
            question:
              "Я умею находить правильное решение в конфликтных ситуациях с больными и коллегами",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 7,
            question:
              "Я чувствую неудовлетворенность и потерю интереса к моей работе",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 8,
            question:
              "Я могу позитивно влиять на самочувствие и настроение больных (пациентов).",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 9,
            question:
              "В последнее время я предпочитаю быть более отстраненным (ой) и бесчувственным (ой) по отношению к тем, с кем мне приходится работать",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 10,
            question:
              "Как правило, окружающие меня люди слишком много требуют от меня. Они скорее утомляют, чем радуют меня.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 11,
            question:
              "Я работаю с удовольствием, и у меня много планов на будущее, связанных с моим профессиональным развитием. Я верю в их осуществление",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 12,
            question: "Я испытываю все больше жизненных разочарований.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 13,
            question:
              "Я чувствую равнодушие и потерю интереса ко многому, что радовало меня раньше.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 14,
            question:
              "Я стараюсь эмоционально не реагировать на «трудных» (конфликтных) пацинетов.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 15,
            question: "Мне хочется уединиться и отдохнуть от всего и всех",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 16,
            question:
              "Я легко могу создать атмосферу доброжелательности и оптимизма в отношениях с моими коллегами и в отношениях с моими больными.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 17,
            question:
              "Я легко общаюсь с больными и их родственниками независимо от их социального статуса и характера.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 18,
            question: "Я многое успеваю сделать за день.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 19,
            question: "Я чувствую себя на пределе возможностей.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 0,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 1,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 2,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 4,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 5,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 6,
                id: 6,
              },
            ],
          },
          {
            id: 20,
            question: "Я многого еще смогу достичь в своей жизни.",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
          {
            id: 21,
            question:
              "Я проявляю к другим людям больше внимания и заботы, чем получаю от них в ответ признательности и благодарности",
            suggestions: [
              {
                suggestion: "Никогда",
                value: 6,
                id: 0,
              },
              {
                suggestion: "Очень редко",
                value: 5,
                id: 1,
              },
              {
                suggestion: "Редко",
                value: 4,
                id: 2,
              },
              {
                suggestion: "Иногда",
                value: 3,
                id: 3,
              },
              {
                suggestion: "Часто",
                value: 2,
                id: 4,
              },
              {
                suggestion: "Очень часто",
                value: 1,
                id: 5,
              },
              {
                suggestion: "Каждый день",
                value: 0,
                id: 6,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 102,
        quesCount: 22,
        beginDate: this.beginDate,
        moduleId: 9,
        moduleName: "module-nine",
      },
    };
  },
  props: {
    beginDate: {
      type: Date,
    },
  },
  methods: {
    async testFinish() {
      this.onlineTestAnswers = true;
      this.selectedAnswer.forEach((item) => {
        this.quesCount = this.quesCount + item.value;
      });
      this.testBall = this.quesCount;
      try {
        await axios
          .post(
            "main/Test/PostResult",
            {
              testCount: this.testCount,
              ansCount: this.quesCount,
              maxBall: this.maxBall,
              testBall: this.testBall,
              beginDate: this.beginDate,
              endDate: this.endDate,
              modulId: 9,
            },
            TokenService.headersToken()
          )
          .then((data) => {
            if (!data.error && data) {
              this.getTest();
              this.selectedAnswer = [];
            }
          })
          .catch((error) => {
            console.log("Error" + ": " + error);
          });
      } catch (error) {
        console.log(error);
      }
    },
    closeModal(array) {
      this.onlineTestAnswers = false;
      array.sort(() => Math.random() - 0.5);
    },
    closeModalDancing() {
      this.closeDancing = false;
    },
    getTest() {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    },
  },
  computed: {
    ...mapState(["testResults", "loading"]),
    filterModuleId() {
      if (this.testResults !== null) {
        let resultModuleId = this.testResults?.result?.filter(
          (item) => item.modulId === 9
        );
        return resultModuleId[0]?.testBall;
      } else {
        return null;
      }
    },
  },
  mounted() {
    if (TokenService.getToken() !== null) {
      this.getTest();
    }
  },
};
</script>
<style scoped>
.dancing__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}
.dancing__text {
  max-width: 503px;
  width: 100%;
  font-weight: 600;
  font-size: 30px;
  line-height: 130%;
  text-align: center;
  color: #00419e;
}
.dancing__img {
  max-width: 160px;
  width: 100%;
}
.dancing__img img {
  width: 100%;
  object-fit: contain;
}
.dancing__btn {
  min-width: 65px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00419e;
  margin: 0 auto;
}
#test_question {
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 130%;
  color: #1f2136;
  margin-bottom: 8px;
}
.test__items {
  margin-bottom: 35px;
}
.test__options {
  display: flex;
  flex-wrap: wrap;
}
.test__options-name {
  width: 100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  background-color: #53719c;
  margin: 10px;
}

.form_check_input {
  display: none;
}
.test__details {
  display: flex;
  justify-content: space-between;
}
.test__details-item {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.test__details-item p {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #0f101d;
  margin-left: 10px;
}
.modal__body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.results {
  font-weight: 700;
  font-size: 20px;
  line-height: 148%;
  text-align: center;
  color: #00419e;
}
.result_text {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 148%;
  text-align: center;
  color: #1f2136;
}
.result__btn {
  background: #00419e;
  border-radius: 10px;
  margin-top: 20px;
}
.form_check_input:checked + .test__options-name {
  background-color: #7cb500;
}
</style>
