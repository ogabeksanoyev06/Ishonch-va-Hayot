<template>
  <div class="container">
    <Test_solving :questions-prop="rawTests"></Test_solving>
    <router-link :to="{ name: 'module-seven' }">
      <button data-v-4cc884a4="" class="prevDetailed">
        {{ $t("Module") }} 7
      </button>
    </router-link>
  </div>
</template>
<script>
import Test_solving from "@/components/test-solving/Test_solving";
export default {
  name: "tab-10",
  components: { Test_solving },
  data() {
    return {
      rawTests: {
        questions: [
          {
            id: 0,
            question: "Медицинская этика – это:",
            suggestions: [
              {
                suggestion:
                  "Раздел философии, который изучает совокупность норм и нравственности",
                res_number: 1,
                id: "emaple1",
                isTrue: false,
              },
              {
                suggestion:
                  "Совокупность норм морали и поведения медицинских сестер, врачей",
                res_number: 2,
                id: "emaple2",
                isTrue: true,
              },
              {
                suggestion:
                  "Совокупность норм морали и поведения медицинских сестер, врачей",
                res_number: 3,
                id: "emaple3",
                isTrue: false,
              },
            ],
          },
          {
            id: 1,
            question: "Деонтология – это:",
            suggestions: [
              {
                suggestion:
                  "Наука, изучающая ответственность медицинских работников",
                res_number: 5,
                id: "emaple5",
                isTrue: false,
              },
              {
                suggestion: "Наука о должном поведении с учетом морали, этики",
                res_number: 6,
                id: "emaple6",
                isTrue: true,
              },
              {
                suggestion: "Наука о новейших достижениях в медицине",
                res_number: 7,
                id: "emaple7",
                isTrue: false,
              },
            ],
          },
          {
            id: 2,
            question:
              "Этическое запрещение разглашение вопросов интимной жизни, болезни, которые доверяются медицинским работникам – это",
            suggestions: [
              {
                suggestion: "Эгротогения",
                res_number: 9,
                id: "emaple9",
                isTrue: false,
              },
              {
                suggestion: "Врачебная тайна",
                res_number: 10,
                id: "emaple10",
                isTrue: true,
              },
              {
                suggestion: "Канцерофобия",
                res_number: 11,
                id: "emaple11",
                isTrue: false,
              },
            ],
          },
          {
            id: 3,
            question:
              "Группа прав, в большей мере связанная с концепцией естественных прав человека Варианты ответа",
            suggestions: [
              {
                suggestion: "экономические",
                res_number: 13,
                id: "emaple13",
                isTrue: false,
              },
              {
                suggestion: "политические",
                res_number: 14,
                id: "emaple14",
                isTrue: false,
              },
              {
                suggestion: "личные ",
                res_number: 15,
                id: "emaple15",
                isTrue: true,
              },
              {
                suggestion: "социальные",
                res_number: 16,
                id: "emaple16",
                isTrue: false,
              },
            ],
          },
          {
            id: 4,
            question:
              "К политическим правам относятся права … Варианты ответа:  предполагается несколько вариантов ответа.",
            suggestions: [
              {
                suggestion: "обеспечивающие нравственную ценность",
                res_number: 17,
                id: "emaple17",
                isTrue: false,
              },
              {
                suggestion:
                  "по участию в организации и деятельности государства и его органов",
                res_number: 18,
                id: "emaple18",
                isTrue: true,
              },
              {
                suggestion: "по активному участию в жизни общества",
                res_number: 19,
                id: "emaple19",
                isTrue: false,
              },
              {
                suggestion: "обеспечивающие свободу личности",
                res_number: 20,
                id: "emaple19",
                isTrue: false,
              },
            ],
          },
        ],
        subjectName: null,
        maxBall: 80,
        quesCount: 5,
        beginDate: this.beginDate,
        moduleId: 6,
        moduleTestStart:
          "Отлично! Давайте рассмотрим все этические принципы оказания помощи ЛЖВ в период пандемии COVID-19 подробно",
        moduleTestEnd:
          "Для закрепления ваших знаний по модулю №6 предлагаем пройти тест",
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
