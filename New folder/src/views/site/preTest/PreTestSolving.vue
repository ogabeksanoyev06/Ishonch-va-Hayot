<template>
  <div class="test__body">
    <div class="container">
      <div class="test__body-title">пре-тест</div>
      <div v-if="!preTest">
        <div class="pre__test-result">
          <span>{{ testResult }}</span>
        </div>
        <div class="test__result-text">
          <span>{{ $t("PreTestStart") }}</span>
        </div>
        <button @click="goToModule" class="preTest_btn">
          {{ $t("ToBegin") }}
        </button>
      </div>
      <div class="d-flex justify-content-center" v-if="preTest">
        <div>
          <div
            class="test__items"
            v-for="(item, idx) in rawTests.questions"
            :key="idx"
          >
            <div id="test_question">{{ idx + 1 }}. {{ item.question }}</div>
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
              <div class="test__details-item" @click="testFinish">
                <div class="test__details-icon">
                  <img src="/icons/finish.svg" alt="" />
                </div>
                <p>{{ $t("Send") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "pre-testSolving",
  components: {},
  data() {
    return {
      selectedAnswer: [],
      quesCount: null,
      testBall: null,
      rawTests: {
        questions: [
          {
            id: 0,
            question:
              "Как передаются COVID-19 и острые респираторные вирусные инфекции (ОРИ)?",
            suggestions: [
              {
                suggestion: "воздушно-капельным и контактно-бытовым путем",
                res_number: 1,
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion:
                  "воздушно-капельным и трансмиссивным путем через укусы насекомых",
                res_number: 2,
                id: "emaple2",
                isTrue: false,
              },
              {
                suggestion: " контактным и половым путем",
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
                res_number: 7,
                id: "emaple7",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Для кого особенно опасны COVID-19 и ОРИ?",
            suggestions: [
              {
                suggestion:
                  "для пожилых, лиц с хроническими заболеваниями, ослабленным иммунитетом",
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
                res_number: 11,
                id: "emaple10",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Какие меры индивидуальной защиты от COVID-19 и ОРИ являются наиболее эффективными?",
            suggestions: [
              {
                suggestion: " Носить маску, хорошо проветривать помещения",
                res_number: 13,
                id: "emaple13",
                isTrue: false,
              },
              {
                suggestion: " Держаться на расстоянии от других",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
              {
                suggestion: " Регулярно проводить гигиеническую обработку рук",
                res_number: 15,
                id: "emaple15",
                isTrue: false,
              },
              {
                suggestion: "   Все ответы верны",
                res_number: 16,
                id: "emaple16",
                isTrue: true,
              },
            ],
          },
          {
            id: 4,
            question:
              "Какие меры общественной профилактики от COVID-19 являются наиболее эффективными?",
            suggestions: [
              {
                suggestion:
                  " Ранняя диагностика, современное оповещение о случаях заражения, изоляция ",
                res_number: 17,
                id: "emaple17",
                isTrue: true,
              },
              {
                suggestion: "больных, вакцинопрофилактика",
                res_number: 18,
                id: "emaple18",
                isTrue: false,
              },
              {
                suggestion:
                  "Запрет на проведение массовых мероприятий, переход на удаленную работу",
                res_number: 19,
                id: "emaple19",
                isTrue: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "Являются ли результаты теста на ВИЧ-инфекцию конфиденциальной информацией?",
            suggestions: [
              {
                suggestion:
                  " Нет, в случае обнаружения антител к ВИЧ врач должен оповестить об этом ближайших родственников пациента",
                res_number: 20,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion:
                  "Да, информация о положительном результате на ВИЧ инфекцию никогда не передается третьим лицам",
                res_number: 21,
                id: "emaple18",
                isTrue: false,
              },
              {
                suggestion:
                  "Хотя результат теста на ВИЧ должен оставаться конфиденциальным, другие профессионалы — например, консультанты или социальные работники, — должны иметь доступ к информации о ВИЧ-положительном статусе человека, чтобы оказать ему необходимую помощь",
                res_number: 22,
                id: "emaple19",
                isTrue: true,
              },
            ],
          },
          {
            id: 6,
            question:
              "Определите навыки, необходимые для уверенного общения с людьми, в коллективе и с уязвимыми группами?",
            suggestions: [
              {
                suggestion: " Умение уважать и понимать чувства других людей",
                res_number: 23,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion:
                  "Понимать свои чувства и открыто о них говорить, умение говорить 'нет'",
                res_number: 24,
                id: "emaple18",
                isTrue: false,
              },
              {
                suggestion: "Доброжелательность, искренность, сочувствие",
                res_number: 25,
                id: "emaple19",
                isTrue: false,
              },
              {
                suggestion: " все ответы верны",
                res_number: 26,
                id: "emaple19",
                isTrue: true,
              },
            ],
          },
          {
            id: 7,
            question:
              "Выделите основные принципы эффективной коммуникации для социального работника",
            suggestions: [
              {
                suggestion:
                  "создание благоприятной среды для общения, доверительное отношение, активное слушание",
                res_number: 27,
                id: "emaple17",
                isTrue: true,
              },
              {
                suggestion: "Активное слушание, открытые жесты, поза, мимика",
                res_number: 28,
                id: "emaple18",
                isTrue: false,
              },
              {
                suggestion: " Активное слушание, обратная связь",
                res_number: 29,
                id: "emaple19",
                isTrue: false,
              },
              {
                suggestion: " Уважение и забота",
                res_number: 30,
                id: "emaple19",
                isTrue: false,
              },
            ],
          },
          {
            id: 8,
            question:
              "Состояние человека, связанное с последствиями длительного рабочего напряжения, со снижением продуктивности в работе, с чувством эмоциональной опустошенности и истощения, называют",
            suggestions: [
              {
                suggestion: "апатией",
                res_number: 31,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion: "стрессом",
                res_number: 32,
                id: "emaple18",
                isTrue: false,
              },
              {
                suggestion: "выгоранием",
                res_number: 33,
                id: "emaple19",
                isTrue: true,
              },
              {
                suggestion: "депрессией",
                res_number: 34,
                id: "emaple19",
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question:
              "Кто, по Вашему мнению, в большей степени подвержен профессиональному выгоранию?",
            suggestions: [
              {
                suggestion:
                  "Врачи, сотрудники общественных организаций, сотрудники корпораций. Люди, с большой ответственностью на работе.",
                res_number: 31,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion:
                  "добрые, трудолюбивые и эмоционально вовлеченные в дело люди",
                res_number: 32,
                id: "emaple18",
                isTrue: false,
              },
              {
                suggestion:
                  "Социальные работники, работающие с уязвимыми группами",
                res_number: 33,
                id: "emaple19",
                isTrue: false,
              },
              {
                suggestion: "все перечисленные категории",
                res_number: 34,
                id: "emaple19",
                isTrue: true,
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    ...mapMutations(["setPreTest"]),
    testFinish() {
      this.quesCount = this.selectedAnswer.filter((answer) => answer.isTrue);
      this.quesCount = this.quesCount.length;
      this.testBall = Math.round((this.quesCount / 10) * 100);
      this.setPreTest(false);
      localStorage.setItem("testResult", Number(this.testBall));
    },
    goToModule() {
      if (this.isLoggedOn) {
        this.$router.push({ path: "/module-one" });
      } else {
        this.$router.push({ name: "login" });
      }
    },
  },
  computed: {
    ...mapState(["preTest", "isLoggedOn"]),
    testResult() {
      return localStorage.getItem("testResult")
        ? localStorage.getItem("testResult")
        : "";
    },
  },
};
</script>
<style scoped>
.test__body {
  padding: 30px 0;
}
.test__items {
  margin-bottom: 10px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}
.test__details {
  display: flex;
  justify-content: space-between;
}
.test__details-item {
  display: flex;
  align-items: center;
  background-color: #fff;
  max-width: 120px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
.test__details-item p {
  font-weight: 600;
  margin-left: 5px;
  color: rgb(186, 15, 15);
}
#test_question {
  font-size: 22px;
  font-weight: 600;
  color: #00419e;
  line-height: 25px;
  margin-bottom: 10px;
}
.test__body-title {
  font-size: 28px !important;
  font-weight: 700;
  color: #00419e;
  text-align: center;
  margin: 10px 0;
}
.test__options-item {
  margin-bottom: 5px;
  cursor: pointer;
}
.app-radio-text {
  font-size: 20px;
  line-height: 22px;
  margin-left: 5px;
}
.pre__test-result {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
.pre__test-result span {
  font-size: 24px;
  line-height: 30px;
}
.test__result-text {
  display: flex;
  justify-content: center;
}
.test__result-text span {
  font-size: 24px;
  line-height: 30px;
  background-color: #00419e;
  padding: 10px 20px;
  color: #fff;
}
.preTest_btn {
  max-width: 200px;
  width: 100%;
  background-color: #00419e;
  color: #fff;
  border-radius: 0%;
  margin: 20px auto;
}
</style>
