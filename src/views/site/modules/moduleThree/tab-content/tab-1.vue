<template>
  <div class="tab_content">
    <Test_solving :questions-prop="rawTests"></Test_solving>
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import Test_solving from "@/components/test-solving/Test_solving";
export default {
  name: "tab-1",
  components: { Test_solving },
  data() {
    return {
      rawTests: {
        questions: [
          {
            id: 0,
            question: "Что такое ОРИ?",
            suggestions: [
              {
                suggestion: "Острые респираторные инфекции",
                res_number: 1,
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion: "Острые риновирусные инфекции",
                res_number: 2,
                id: "emaple2",
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Как передаются  ОРИ?",
            suggestions: [
              {
                suggestion: "Воздушно-капельным путём",
                res_number: 5,
                id: "emaple5",
                isTrue: true,
              },
              {
                suggestion: "Контактным и половым путём",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Возбудитель COVID-19 ?",
            suggestions: [
              {
                suggestion: "Новый вид бактерий",
                res_number: 9,
                id: "emaple9",
                isTrue: true,
              },
              {
                suggestion: "Вирус SARS-CoV-2.",
                res_number: 10,
                id: "emaple10",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "В каком году впервые узнали о новой коронавирусной инфекции?",
            suggestions: [
              {
                suggestion: "В 2020году",
                res_number: 13,
                id: "emaple13",
                isTrue: true,
              },
              {
                suggestion: "В 2019 году",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
            ],
          },
          {
            id: 4,
            question:
              "В какой стране впервые обнаружили новую коронавирусную инфекцию?",
            suggestions: [
              {
                suggestion: "В Китайской Народной Республике (г. Ухань)",
                res_number: 17,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion: "В США ",
                res_number: 18,
                id: "emaple18",
                isTrue: true,
              },
            ],
          },
          {
            id: 5,
            question: "Как вы думаете, сколько минут надо мыть руки?",
            suggestions: [
              {
                suggestion: "10 секунд",
                res_number: 18,
                id: "emaple18",
                isTrue: true,
              },
              {
                suggestion: "Не менее 20-30 секунд",
                res_number: 19,
                id: "emaple19",
                isTrue: false,
              },
            ],
          },
          {
            id: 6,
            question:
              "Сколько % спирта по вашему мнению должен содержать антисептик?",
            suggestions: [
              {
                suggestion: "Не имеет значения",
                res_number: 20,
                id: "emaple20",
                isTrue: true,
              },
              {
                suggestion: "Не менее 80% спирта",
                res_number: 21,
                id: "emaple21",
                isTrue: false,
              },
            ],
          },
          {
            id: 7,
            question: "Как часто надо проветривать помещения?",
            suggestions: [
              {
                suggestion: "Ежедневно",
                res_number: 22,
                id: "emaple22",
                isTrue: true,
              },
              {
                suggestion: "Каждые 2-3 часа",
                res_number: 23,
                id: "emaple23",
                isTrue: false,
              },
            ],
          },
          {
            id: 8,
            question: "Что такое вакцинация?",
            suggestions: [
              {
                suggestion: "Лечение вирусной инфекции",
                res_number: 24,
                id: "emaple24",
                isTrue: true,
              },
              {
                suggestion:
                  "Эффективный способ защиты от инфекционных заболеваний",
                res_number: 25,
                id: "emaple25",
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question: "Эффективны ли антибиотики при коронавирусной инфекции?",
            suggestions: [
              {
                suggestion: "Да",
                res_number: 26,
                id: "emaple26",
                isTrue: true,
              },
              {
                suggestion: "Антибиотики не способны справиться с вирусом",
                res_number: 27,
                id: "emaple27",
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 70,
        quesCount: 10,
        beginDate: this.beginDate,
        moduleId: 3,
        moduleName: "module-three",
        moduleTestStart:
          "Начало После презентации выпишите себе основные понятия данного модуля и ответьте на следующие вопросы",
        moduleTestEnd:
          "Поздравляем! Вы отлично справились! Давайте перейдем к изучению Модуля №2. В нем мы подробно изучим инфекцию COVID-19",
      },
    };
  },
};
</script>
<style scoped></style>
