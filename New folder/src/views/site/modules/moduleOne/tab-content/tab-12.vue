<template>
  <div class="container">
    <Test_solving :questions-prop="rawTests"></Test_solving>
    <router-link :to="{ name: 'module-two' }">
      <button data-v-4cc884a4="" class="prevDetailed">
        {{ $t("Module") }} 2
      </button>
    </router-link>
  </div>
</template>
<script>
import Test_solving from "@/components/test-solving/Test_solving";
export default {
  name: "tab-12",
  components: { Test_solving },
  data() {
    return {
      rawTests: {
        questions: [
          {
            id: 0,
            question: "Что такое ОРВИ и Грипп?",
            suggestions: [
              {
                suggestion:
                  "вирусные инфекционные заболевания, в которые вовлечены дыхательные пути.",
                res_number: 1,
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion:
                  "бактериальные инфекционные заболевания, в которые вовлечены дыхательные пути.",
                res_number: 2,
                id: "emaple2",
                isTrue: false,
              },
              {
                suggestion:
                  "вирусные инфекционные заболевания, в которые вовлечен желудочно- кишечный тракт.",
                res_number: 3,
                id: "emaple3",
                isTrue: false,
              },
              {
                suggestion: "простейшие ",
                res_number: 4,
                id: "emaple4",
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Укажите наиболее частые симптомы COVID-19?",
            suggestions: [
              {
                suggestion: "вирусы",
                res_number: 5,
                id: "emaple5",
                isTrue: true,
              },
              {
                suggestion: "бактерии",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
              {
                suggestion: "грибки",
                res_number: 7,
                id: "emaple7",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Назовите основные симптомы ОРВИ и Грипп",
            suggestions: [
              {
                suggestion:
                  "резкий подъем температуры тела (в течение нескольких часов) до высоких цифр (38-40 С), озноб; чувство разбитости; боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение; слабость и недомогание",
                res_number: 9,
                id: "emaple9",
                isTrue: true,
              },
              {
                suggestion:
                  "повышение температуры не наблюдается; боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение",
                res_number: 10,
                id: "emaple10",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question: "Как можно защититься от заражения гриппом?",
            suggestions: [
              {
                suggestion: "сделать вакцинацию",
                res_number: 13,
                id: "emaple13",
                isTrue: true,
              },
              {
                suggestion: "не выходить из дома",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
              {
                suggestion: "пить антибиотики",
                res_number: 15,
                id: "emaple15",
                isTrue: false,
              },
              {
                suggestion: "не посещать мероприятия",
                res_number: 16,
                id: "emaple16",
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 75,
        quesCount: 4,
        beginDate: this.beginDate,
        moduleId: 1,
        moduleName: "module-one",
        moduleTestStart:
          "Bыпишите себе основные понятия данного модуля и ответьте на следующие вопросы",
        moduleTestEnd:
          "Поздравляем! Вы отлично справились! Давайте перейдем к изучению Модуля №2. В нем мы подробно изучим инфекцию COVID-19",
      },
    };
  },
  props: {
    beginDate: {
      type: Date,
    },
  },
  methods: {
    newDate() {
      this.$emit("newDate");
    },
  },
};
</script>
