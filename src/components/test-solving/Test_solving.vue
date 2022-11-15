<template>
  <div class="test__body" id="test_solving_component">
    <AppModal v-if="closeDancing" @close="closeModalDancing">
      <div class="modal__wrap">
        <div class="dancing__body">
          <p class="dancing__text">
            <!-- {{ questionsProp.quesCount }} вопросов правильно 100%, проходной
            {{ questionsProp.maxBall }}%, если неправильные ответы много
            возможность пересдачи, повтор бессконечно -->
            Давайте пройдем тест. В случае неудачи, пройдите тест снова
          </p>
          <div class="dancing__img">
            <img src="/images/moduleBanner1.png" alt="" />
          </div>
        </div>
        <button class="dancing__btn" @click="closeModalDancing">Ok</button>
      </div>
    </AppModal>
    <div class="d-flex flex-column align-items-center">
      <div v-if="moduleId === 8">
        <div class="textPsy" v-if="filterModuleId >= 0 && filterModuleId <= 30">
          {{ psychologistTest[0].text }}
        </div>
        <div class="textPsy" v-if="filterModuleId > 30 && filterModuleId <= 60">
          {{ psychologistTest[1].text }}
        </div>
        <div
          class="textPsy"
          v-if="filterModuleId > 60 && filterModuleId <= 100"
        >
          {{ psychologistTest[2].text }}
        </div>
      </div>
      <div class="result__test">
        <div v-if="this.testResults?.result.length > 0">
          {{ filterModuleId }}<sup>%</sup>
        </div>
        <div v-else></div>
      </div>
      <!-- <button
        @click="start(questionsProp.questions)"
        class="modal_footer-btn refresh_btn"
      >
        Qayta urunish
      </button> -->
    </div>
    <div class="d-flex justify-content-center">
      <div>
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
                    <span class="app-radio-text">
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
              class="test__details-item"
              :class="selectedAnswer.length === 0 ? 'disabled' : ''"
              @click="testFinish"
            >
              <div class="test__details-icon">
                <img src="/icons/finish.svg" alt="" />
              </div>
              <p>{{ $t("Send") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AppModal
      v-if="onlineTestAnswers"
      @close="closeModal(questionsProp.questions)"
    >
      <div class="modal__wrap">
        <div class="modal__body">
          <div class="text-center" v-if="loading">
            <div
              class="spinner-border spinner-border-sm text-dark"
              role="status"
            ></div>
          </div>
          <div class="result__test">
            <div v-if="!loading && this?.testResults?.result.length > 0">
              {{ filterModuleId }}<sup>%</sup>
            </div>
            <div v-else></div>
          </div>
          <div class="dancing__body">
            <p class="dancing__text" v-if="filterModuleId > maxBall">
              Поздравляем, вы отлично справились
            </p>
            <div class="correct" v-else>
              <p class="dancing__text">
                К сожалению, вы не справились с заданием. Пожалуйста, попробуйте
                снова
              </p>
              <div class="correct__content">
                <div class="correct__answers answers">
                  <span>{{ quesCount }}</span>
                  <span>
                    правильные <br />
                    ответы
                  </span>
                </div>
                <div class="correct__result">{{ filterModuleId }}%</div>
                <div class="incorrect__answers answers">
                  <span>
                    {{ questionsProp.quesCount - quesCount }}
                  </span>
                  <span>
                    неправильные <br />
                    ответы
                  </span>
                </div>
              </div>
            </div>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button
            class="dancing__btn"
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
import TokenService from "@/service/TokenService";
import axios from "axios";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Test_solving",
  components: { AppModal },

  data() {
    return {
      closeDancing: true,
      quesCount: null,
      selectedAnswer: [],
      onlineTestAnswers: false,
      testCount: this.questionsProp.quesCount,
      maxBall: this.questionsProp.maxBall,
      testBall: null,
      beginDate: "2022-09-19T06:01:14.691Z",
      endDate: "2022-09-19T06:01:14.691Z",
      moduleId: this.questionsProp.moduleId,
      disabledBtn: true,
      resultModuleId: [],
    };
  },
  props: {
    questionsProp: {
      id: Number,
      maxBall: Number,
      quesCount: Number,
      moduleId: Number,
      moduleName: String,
      questions: [],
    },
    psychologistTest: {
      psychologistTest: [],
    },
  },
  computed: {
    ...mapState(["testSolving", "testResults", "loading", "preTest"]),
    filterModuleId() {
      if (this.testResults !== null) {
        let resultModuleId = this.testResults?.result?.filter(
          (item) => item.modulId === this.moduleId
        );
        return resultModuleId[0]?.testBall;
      } else {
        return null;
      }
    },
  },
  methods: {
    ...mapMutations(["setPreTest"]),
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
              modulId: this.moduleId,
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
    findAgain(array) {
      this.onlineTestAnswers = false;
      array.sort(() => Math.random() - 0.5);
    },
    start(array) {
      array.sort(() => Math.random() - 0.5);
      this.selectedAnswer = [];
    },
    getTest() {
      this.$store.dispatch("getTestResults", TokenService.headersToken());
    },
  },
  mounted() {
    if (TokenService.getToken() !== null) {
      this.getTest();
    }
    console.log(this.maxBall);
  },
  watch: {},
  created() {},
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
.test__body {
  background-color: #e7eef5;
  border-radius: 10px;
  padding: 10px;
}
.dancing__image {
  max-width: 125px;
  width: 100%;
}
.dancing__image img {
  width: 100%;
  object-fit: contain;
  margin-left: 15px;
}
.test__details-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.test__details-item {
  margin-left: 10px;
  background: #ffffff;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 8%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 17px;
  cursor: pointer;
}
.test__details-item.disabled {
  opacity: 0.65;
  pointer-events: none;
  cursor: not-allowed;
}
.test__details-icon {
  margin-right: 12px;
  max-width: 25px;
  max-height: 25px;
  overflow: hidden;
}
.test__items {
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgb(70 93 122 / 8%);
  margin-bottom: 15px;
  padding: 30px;
  max-width: 850px;
  width: 100%;
}
#test_question {
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  margin-bottom: 10px;
}
.test__options {
  font-size: 18px;
  line-height: 22px;
}
.test__options-item {
  margin-bottom: 5px;
  cursor: pointer;
}
.test__options-item span {
  margin-left: 15px;
}
.modal_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.modal_footer button {
  font-size: 18px;
  font-weight: 600;
  padding: 0 20px;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  max-width: unset;
}
.refresh_btn {
  background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
  border-radius: 10px;
}
.close_btn {
  background-color: #ff5454;
}
.result__test {
  font-weight: 700;
  font-size: 30px;
  line-height: 150%;
  text-align: center;
  color: #7cb500;
  display: flex;
  justify-content: center;
}
.progress__bar {
  position: relative;
  max-width: 451px;
  width: 100%;
  height: 20px;
  background: #e5ecf5;
  border-radius: 10px;
  margin-bottom: 10px;
  margin: 10px auto;
}
.progress__bar .progress__bar-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #008ae4;
  border-radius: 10px;
}
.textPsy {
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #000;
}
.correct__content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.correct__result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  background-color: #53719c;
  color: #fff;
  font-weight: 700;
  font-size: 32px;
  line-height: 148%;
  border-radius: 10px;
  margin: 0 12px;
}
.answers {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.correct__answers span:first-child {
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #7cb500;
}
.incorrect__answers span:first-child {
  font-weight: 600;
  font-size: 24px;
  line-height: 148%;
  color: #ec1b23;
}
@media (max-width: 768px) {
  .dancing__body {
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
  }
  .dancing__text {
    order: 2;
    font-size: 18px;
    margin-top: 10px;
  }
  .test__items {
    padding: 10px;
  }
  .modal_footer {
    flex-wrap: wrap;
  }
  .close_btn {
    margin-top: 10px;
  }
}
</style>
