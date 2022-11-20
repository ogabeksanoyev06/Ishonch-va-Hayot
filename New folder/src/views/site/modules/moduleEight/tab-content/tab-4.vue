<template>
  <div class="container">
    <div class="module_title" style="text-align: center">
      ТЕСТ ОЦЕНКИ КОММУНИКАТИВНЫХ УМЕНИЙ
    </div>
    <div class="results">{{ filterModuleId }} балл</div>
    <div class="bgTab tab_content-text" style="text-align: center">
      Понятие "коммуникативные умения" включает в себя не только оценку
      собеседника, определение его сильных и слабых сторон, но и умение
      установить дружескую атмосферу, умение понять проблемы собеседника и т.д.
      Инструкция: "Отметьте ситуации, которые вызывают у Вас неудовлетворение
      или досаду и раздражение при беседе с любым человеком - будь то Ваш
      товарищ, сослуживец, непосредственный начальник, руководитель или просто
      случайный собеседник".
    </div>
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
                  <img :src="'/svg/' + answers.suggestion" alt="" />
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
            v-if="filterModuleId <= 10 && filterModuleId >= 0"
          >
            Вы отличный собеседник. Вы умеете слушать.Ваш стиль общения может
            стать примером для окружающих.
          </div>
          <div
            class="result_text"
            v-else-if="filterModuleId <= 40 && filterModuleId > 10"
          >
            Вы хороший собеседник, но иногда отказываете партнеру в полном
            внимании. Повторяйте вежливо его высказывания, дайте ему время
            раскрыть свою мысль полностью, приспосабливайте свой темп мышления к
            его речи и можете быть уверены, что общаться с Вами будет еще
            приятнее.
          </div>
          <div
            class="result_text"
            v-else-if="filterModuleId <= 70 && filterModuleId > 40"
          >
            у Вас высокий коммуникативный контроль. Вы легко входите в любую
            роль, гибко реагируете на изменение ситуации, хорошо чувствуете и
            даже в состоянии предвидеть впечатление, которое вы производите на
            окружающих.
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
              "Собеседник не дает мне шанса высказаться, у меня есть,  что сказать, но нет возможности вставить слово",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 1,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 2,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Собеседник постоянно прерывает меня во время беседы.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 5,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 6,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question:
              "Собеседник никогда не смотрит в лицо во время разговора, и я не уверен, слушает ли он меня.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 9,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 10,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Разговор с таким партнером часто вызывает чувство пустой траты времени.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 13,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 14,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 4,
            question:
              "Собеседник постоянно суетится, карандаш и бумага занимают его больше, чем мои слова.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 17,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 18,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "Собеседник никогда не улыбается. У меня возникает чувство недовольства и тревоги",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 21,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 22,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 6,
            question: "Собеседник отвлекает меня вопросами и комментариями.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 25,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 26,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 7,
            question:
              "Что бы я ни сказал, собеседник всегда охлаждает мой пыл.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 29,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 30,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 8,
            question: "Собеседник всегда старается опровергнуть меня.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 9,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 9,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question:
              "Собеседник передергивает смысл моих слов и вкладывает в них другое содержание.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                res_number: 10,
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                res_number: 10,
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 10,
            question:
              "Когда я задаю вопрос, собеседник заставляет меня защищаться.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 11,
            question:
              "Иногда собеседник переспрашивает меня, делая вид, что не расслышал.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 12,
            question:
              "Собеседник, не дослушав до конца, перебивает меня лишь затем, чтобы согласиться.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 13,
            question:
              "Собеседник при разговоре сосредоточенно занимается посторонним: играет сигаретой, протирает стекла и т.д., и я твердо уверен, что он при этом невнимателен.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 14,
            question: "Собеседник делает выводы за меня.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 15,
            question:
              "Собеседник всегда пытается вставить слово в мое повествование.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 16,
            question:
              "Собеседник всегда смотрит на меня очень внимательно, не мигая.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 17,
            question:
              "Собеседник смотрит на меня, как бы оценивая. Это меня беспокоит.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 18,
            question:
              "Когда я предлагаю что-нибудь новое, собеседник говорит, что он думает так же.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 19,
            question:
              "Собеседник переигрывает, показывая, что интересуется беседой, слишком часто кивает головой, ахает и поддакивает.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 20,
            question:
              "Когда я говорю о серьезном, а собеседник вставляет смешные истории, шуточки, анекдоты.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 21,
            question: "Собеседник часто глядит на часы во время разговора.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 22,
            question:
              "Когда я вхожу в кабинет, он бросает все дела и все внимание обращает на меня.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 23,
            question:
              "Собеседник ведет себя так, будто я мешаю ему делать что-нибудь важное.",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
          {
            id: 23,
            question:
              "Собеседник требует, чтобы все соглашались с ним. Любое его высказывание завершается вопросом: 'Вы тоже так думаете?' или 'Вы с этим не согласны?'",
            suggestions: [
              {
                suggestion: "smile1.svg",
                id: 0,
                isTrue: true,
              },
              {
                suggestion: "smile2.svg",
                id: 1,
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 70,
        quesCount: 25,
        beginDate: this.beginDate,
        moduleId: 10,
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
              modulId: 10,
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
          (item) => item.modulId === 10
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
  margin-left: 20px;
}
.test__options-name {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 148%;
  text-align: center;
  color: #ffffff;
  border-radius: 10px;
  padding: 8px 10px;
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
