<template>
  <div>
    <Test_solving
      :questions-prop="rawTests"
      :psychologist-test="psychologistTest"
    ></Test_solving>
  </div>
</template>
<script>
import Test_solving from "@/components/test-solving/Test_solving";
export default {
  name: "tab-11",
  components: { Test_solving },
  data() {
    return {
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
                id: "emaple1",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 2,
                id: "emaple2",
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
                id: "emaple5",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question: "Из меня мог бы выйти неплохой актер",
            suggestions: [
              {
                suggestion: "верно ",
                res_number: 9,
                id: "emaple9",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 10,
                id: "emaple10",
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
                suggestion: " верно ",
                res_number: 13,
                id: "emaple13",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
            ],
          },
          {
            id: 4,
            question: "В компании я редко оказываюсь в центре внимания",
            suggestions: [
              {
                suggestion: "верно ",
                res_number: 17,
                id: "emaple17",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 18,
                id: "emaple18",
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
                suggestion: "верно ",
                res_number: 21,
                id: "emaple21",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 22,
                id: "emaple22",
                isTrue: false,
              },
            ],
          },
          {
            id: 6,
            question: "Я могу отстаивать только то, в чем я искренне убежден",
            suggestions: [
              {
                suggestion: "верно ",
                res_number: 25,
                id: "emaple25",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 26,
                id: "emaple26",
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
                suggestion: "верно ",
                res_number: 29,
                id: "emaple29",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 30,
                id: "emaple30",
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
                id: "emaple33",
                isTrue: true,
              },
              {
                suggestion: "неверно",
                res_number: 9,
                id: "emaple34",
                isTrue: false,
              },
            ],
          },
          {
            id: 9,
            question: "Я не всегда такой, каким кажусь",
            suggestions: [
              {
                suggestion: "верно ",
                res_number: 10,
                id: "emaple37",
                isTrue: true,
              },
              {
                suggestion: "неверно",
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
        moduleId: 8,
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
    newDate() {
      this.$emit("newDate");
    },
  },
};
</script>
