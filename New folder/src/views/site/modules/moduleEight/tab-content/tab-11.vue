<template>
  <div class="container">
    <AppModal v-if="closeDancing" @close="closeModalDancing">
      <div class="modal__wrap">
        <div>
          <div class="dancing__body">
            <p class="dancing__text">
              Давайте узнаем, какие у вас есть способности к эффективной
              коммуникации. Пройдите тест, и узнайте свой личный результат!
            </p>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button class="dancing__btn" @click="closeModalDancing">Ok</button>
        </div>
      </div>
    </AppModal>
    <div class="module_title" style="text-align: center">
      ТЕСТ НА ОЦЕНКУ САМОКОНТРОЛЯ В ОБЩЕНИИ
    </div>
    <div class="results">{{ filterModuleId }} балл</div>
    <div class="bgTab tab_content-text" style="text-align: center">
      Тест разработан американским психологом М. Снайдером. Внимательно прочтите
      десять предложений, описывающих реакции на некоторые ситуации. Каждое из
      них Вы должны оценить как верное или неверное применительно к себе. Если
      предложение кажется вам верным или преимущественно верным, поставьте рядом
      с порядковым номером букву "В", если неверным или преимущественно неверным
      - букву "Н".
    </div>
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
                  {{ $t(answers.suggestion) }}
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
          <div class="results">{{ filterModuleId }} балл</div>
          <div
            class="result_text"
            v-if="filterModuleId <= 30 && filterModuleId >= 0"
          >
            у Вас низкий коммуникативный контроль. Ваше поведение устойчиво, и
            Вы не считаете нужным изменяться в зависимости от ситуаций. Вы
            способны к искреннему самораскрытию в общении. Некоторые считают Вас
            "неудобным" в общении по причине вашей прямолинейности.
          </div>
          <div
            class="result_text"
            v-else-if="filterModuleId <= 60 && filterModuleId > 30"
          >
            у Вас средний коммуникативный контроль, вы искренни, но не сдержанны
            в своих эмоциональных проявлениях, считаетесь в своем поведении с
            окружающими людьми.
          </div>
          <div class="result_text" v-else>
            у Вас высокий коммуникативный контроль. Вы легко входите в любую
            роль, гибко реагируете на изменение ситуации, хорошо чувствуете и
            даже в состоянии предвидеть впечатление, которое вы производите на
            окружающих.
          </div>
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
              "Мне кажется трудным искусство подражать привычкам других людей",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 1,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 2,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question:
              "Я бы, пожалуй, мог свалять дурака, чтобы привлечь внимание или позабавить окружающих",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 5,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 6,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Из меня мог бы выйти неплохой актер",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 9,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 10,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Другим людям иногда кажется, что я переживаю что-то более глубоко, чем это есть на самом деле",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 13,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 14,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 4,
            question: "В компании я редко оказываюсь в центре внимания",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 17,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 18,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "В разных ситуациях и в общении с разными людьми я часто веду себя совершенно по-разному",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 21,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 22,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 6,
            question: "Я могу отстаивать только то, в чем я искренне убежден",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 25,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 26,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 7,
            question:
              "Чтобы преуспеть в делах и в отношениях с людьми, я стараюсь быть таким, каким меня ожидают видеть",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 29,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 30,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 8,
            question: "Я могу быть дружелюбным с людьми, которых я не выношу",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 9,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 9,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question: "Я не всегда такой, каким кажусь",
            suggestions: [
              {
                suggestion: "верно",
                res_number: 10,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 10,
                id: 1,
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 70,
        quesCount: 10,
        beginDate: this.beginDate,
        moduleId: 8,
        moduleName: "module-eight",
        moduleTestStart:
          "Давайте узнаем, какие у вас есть способности к эффективной коммуникации. Пройдите тест, и узнайте свой личный результат!",
        moduleTestEnd:
          "Поздравляем! Вы отлично справились! Давайте перейдем к изучению Модуля №9",
      },
      psychologistTest: [
        {
          id: 0,
          text: "Вас низкий коммуникативный контроль. Ваше поведение устойчиво, и Вы не считаете нужным изменяться в зависимости от ситуаций. Вы способны к искреннему самораскрытию в общении. Некоторые считают Вас `неудобным` в общении по причине вашей прямолинейности",
        },
        {
          id: 1,
          text: "Вас средний коммуникативный контроль, вы искренни, но не сдержанны в своих эмоциональных проявлениях, считаетесь в своем поведении с окружающими людьми",
        },
        {
          id: 2,
          text: "Вас высокий коммуникативный контроль. Вы легко входите в любую роль, гибко реагируете на изменение ситуации, хорошо чувствуете и даже в состоянии предвидеть впечатление, которое вы производите на окружающих",
        },
      ],
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
      this.quesCount = this.selectedAnswer.filter((answer) => answer.isTrue);
      this.quesCount = this.quesCount.length;
      this.testBall = Math.round(
        (this.quesCount / this.rawTests.questions.length) * 100
      );
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
              modulId: 8,
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
          (item) => item.modulId === 8
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
}
.test__options-name {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 148%;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  padding: 10px 16px;
  text-transform: uppercase;
  cursor: pointer;
}
.test__options-0 {
  background: #7cb500;
  margin-right: 10px;
}
.test__options-1 {
  background: #ec1b23;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px !important;
}
</style>
