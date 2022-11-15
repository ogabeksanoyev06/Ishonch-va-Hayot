<template>
  <div>
    <app-draggable-two />
  </div>
</template>
<script>
import AppDraggableTwo from "@/components/shared-components/AppDraggableTwo.vue";
export default {
  name: "tab-7",
  components: { AppDraggableTwo },
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
            ],
          },
          {
            id: 1,
            question: "Что вызывает данные заболевания?",
            suggestions: [
              {
                suggestion: "вирусы",
                res_number: 4,
                id: "emaple4",
                isTrue: true,
              },
              {
                suggestion: "бактерии",
                res_number: 5,
                id: "emaple5",
                isTrue: false,
              },
              {
                suggestion: "грибки",
                res_number: 6,
                id: "emaple6",
                isTrue: false,
              },
              {
                suggestion: "простейшие",
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
                  "резкий подъем температуры тела (в течение нескольких часов) до высоких цифр (38-40 С), озноб; чувство разбитости; боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение; слабость и недомогание ",
                res_number: 8,
                id: "emaple8",
                isTrue: true,
              },
              {
                suggestion:
                  "повышение температуры не наблюдается; боли в мышцах, суставах, в животе, в глазных яблоках, слезотечение;",
                res_number: 9,
                id: "emaple9",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question: "Как можно защититься от заражения гриппом?",
            suggestions: [
              {
                suggestion: "сделать вакцинацию ",
                res_number: 10,
                id: "emaple11",
                isTrue: true,
              },
              {
                suggestion: "не выходить из дома",
                res_number: 12,
                id: "emaple12",
                isTrue: false,
              },
              {
                suggestion: "пить антибиотики",
                res_number: 13,
                id: "emaple13",
                isTrue: false,
              },
              {
                suggestion: "не посещать мероприятия",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 60,
        quesCount: 10,
        beginDate: this.beginDate,
        moduleId: 2,
        moduleName: "module-two",
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
