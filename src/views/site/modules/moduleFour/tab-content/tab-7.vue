<template>
  <div>
    <Test_solving :questions-prop="rawTests"></Test_solving>
  </div>
</template>
<script>
import Test_solving from "@/components/test-solving/Test_solving";
export default {
  name: "tab-7",
  components: { Test_solving },
  data() {
    return {
      rawTests: {
        questions: [
          {
            id: 0,
            question: "Отличается ли течение COVID-19 инфекции у ЛЖВ?",
            suggestions: [
              {
                suggestion:
                  "ЛЖВ, получающие эффективное антиретровирусное лечение (АРТ), не подвержены большему риску заражения коронавирусом.",
                res_number: 1,
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion:
                  "У ЛЖВ наблюдается тяжёлое течение коронавирусной инфекции",
                res_number: 2,
                id: "emaple2",
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Можно ли лечить COVID-19 инфекцию препаратами АРВТ?",
            suggestions: [
              {
                suggestion:
                  "Препараты АРВТ не рекомендовано использовать для лечения коронавирусной инфекции",
                res_number: 5,
                id: "emaple5",
                isTrue: true,
              },
              {
                suggestion:
                  "Препарат АРВТ-Лопинавир/ритонавир эффективен для лечения коронавирусной инфекции",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "На сколько дней должен быть минимальный запас АРВТ?",
            suggestions: [
              {
                suggestion: "На неделю",
                res_number: 9,
                id: "emaple9",
                isTrue: true,
              },
              {
                suggestion: "Минимальный запас должен быть на 30дней",
                res_number: 10,
                id: "emaple10",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Надо ли прекращать приём АРВТ во время лечения COVID-19 инфекции?",
            suggestions: [
              {
                suggestion: "Необходимо временно прекратить приём АРВТ ",
                res_number: 13,
                id: "emaple13",
                isTrue: true,
              },
              {
                suggestion:
                  "ЛЖВ при заболевании коронавирусной инфекцией не должны прекращать приём АРВТ",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
            ],
          },
          {
            id: 4,
            question:
              "При каких симптомах ОРИ необходимо вызвать скорую медицинскую помощь?",
            suggestions: [
              {
                suggestion:
                  "Лихорадка более 3х дней, боль в груди при дыхании, нет улучшения после 5-7 дней лечения простуды",
                res_number: 17,
                id: "emaple17",
                isTrue: true,
              },
              {
                suggestion: "Насморк, пониженный аппетит",
                res_number: 18,
                id: "emaple18",
                isTrue: false,
              },
            ],
          },
          {
            id: 5,
            question:
              "Надо ли менять схему АРВТ во время лечения COVID-19 инфекции?",
            suggestions: [
              {
                suggestion: "Необходимо заменить схему РАВТ",
                res_number: 21,
                id: "emaple21",
                isTrue: true,
              },
              {
                suggestion:
                  "Схему АРВТ не следует менять в период COVID-19 инфекции, если нет медицинской необходимости",
                res_number: 22,
                id: "emaple22",
                isTrue: false,
              },
            ],
          },
          {
            id: 6,
            question:
              "В каких случаях для ЛЖВ рекомендована особая защита (изоляция)?",
            suggestions: [
              {
                suggestion:
                  "Особая защита (изоляция) в период COVID-19 рекомендуется людям, живущим с ВИЧ, у которых количество CD4 < 200 клеток/мм3, есть другие серьезные сопутствующие заболевания или определяемая вирусная нагрузка.",
                res_number: 25,
                id: "emaple25",
                isTrue: true,
              },
              {
                suggestion: "Особая защита не рекомендована для ЛЖВ",
                res_number: 26,
                id: "emaple26",
                isTrue: false,
              },
            ],
          },
          {
            id: 7,
            question: "Надо ли вакцинировать ЛЖВ от гриппа?",
            suggestions: [
              {
                suggestion:
                  "Необходимо проведение вакцинации в положенные сроки",
                res_number: 29,
                id: "emaple29",
                isTrue: true,
              },
              {
                suggestion: "Вакцинация от гриппа противопоказана всем ЛЖВ",
                res_number: 30,
                id: "emaple30",
                isTrue: false,
              },
            ],
          },
          {
            id: 8,
            question: "Надо ли вакцинировать ЛЖВ от COVID-19?",
            suggestions: [
              {
                suggestion: "Вакцинация ЛЖВ от COVID-19 не рекомендована",
                res_number: 9,
                id: "emaple33",
                isTrue: true,
              },
              {
                suggestion: "ЛЖВ могут быть вакцинированы от COVID-19",
                res_number: 9,
                id: "emaple34",
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question: "Укажите основные способы борьбы с ОРИ",
            suggestions: [
              {
                suggestion:
                  "Вакцинация, социальная дистанция, ношение медицинской маски, гигиена рук, гигиена помещения",
                res_number: 10,
                id: "emaple37",
                isTrue: true,
              },
              {
                suggestion: "Нет эффективных способов борьбы с ОРИ",
                res_number: 10,
                id: "emaple38",
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 60,
        quesCount: 10,
        beginDate: this.beginDate,
        moduleId: 4,
        moduleName: "module-four",
        moduleTestStart:
          "Для закрепления знаний, ответьте на вопросы по теме модуля",
        moduleTestEnd: "Поздравляем! Вы отлично справились!",
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
