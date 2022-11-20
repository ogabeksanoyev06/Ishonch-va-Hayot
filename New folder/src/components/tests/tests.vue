<template>
  <div class="container">
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
      v-for="(item, idx) in questionsProp.questions"
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
    <AppModal
      v-if="onlineTestAnswers"
      @close="closeModal(questionsProp.questions)"
    >
      <div class="modal__wrap">
        <div class="modal__body">
          <div class="results">{{ filterModuleId }}</div>
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

          <button
            class="result__btn"
            @click="closeModal(questionsProp.questions)"
          >
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
      selectedAnswer: [],
      quesCount: null,
      testBall: null,
      testCount: this.questionsProp.quesCount,
      maxBall: this.questionsProp.maxBall,
      moduleId: this.questionsProp.moduleId,
    };
  },
  props: {
    questionsProp: {
      id: Number,
      maxBall: Number,
      quesCount: Number,
      moduleId: Number,
      moduleName: String,
      moduleTestStart: String,
      moduleTestEnd: String,
      questions: [],
    },
    psychologistTest: {
      psychologistTest: [],
    },
  },
  methods: {
    async testFinish() {
      this.onlineTestAnswers = true;
      this.quesCount = this.selectedAnswer.filter((answer) => answer.isTrue);
      this.quesCount = this.quesCount.length;
      this.testBall = Math.round(
        (this.quesCount / this.questionsProp.questions.length) * 100
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
</style>
