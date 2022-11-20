<template>
  <div class="container">
    <app-draggable-two />
    <app-modal v-if="closeDancing" @close="closeModalDancing">
      <div class="modal__wrap">
        <div>
          <div class="dancing__body">
            <p class="dancing__text">
              {{ $t("Для закрепления знаний давайте выполним упражнение") }}
            </p>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button class="dancing__btn" @click="closeModalDancing">Ok</button>
        </div>
      </div>
    </app-modal>
    <AppModal v-if="finishModal" @close="closeModal">
      <div class="modal__wrap">
        <div class="modal__body">
          <div class="dancing__body">
            <p class="dancing__text">
              Поздравляем с успешным прохождением 2го модуля! Вы отлично
              справились!
            </p>
            <div class="dancing__img">
              <img src="/images/moduleBanner1.png" alt="" />
            </div>
          </div>
          <button class="dancing__btn" @click="closeModal">Ok</button>
        </div>
      </div>
    </AppModal>
    <!-- <router-link :to="{ name: 'module-three' }">
      <button data-v-4cc884a4="" class="prevDetailed">
        {{ $t("Module") }} 3
      </button>
    </router-link> -->
  </div>
</template>
<script>
import AppDraggableTwo from "@/components/shared-components/AppDraggableTwo.vue";
import AppModal from "@/components/shared-components/AppModal.vue";
export default {
  name: "tab-7",
  components: { AppDraggableTwo, AppModal },
  data() {
    return {
      closeDancing: true,
      finishModal: false,
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
        moduleTestStart: "Для закрепления знаний давайте выполним упражнение",
        moduleTestEnd:
          "Поздравляем с успешным прохождением 2го модуля! Вы отлично справились!",
      },
    };
  },
  props: {
    beginDate: {
      type: Date,
    },
  },
  methods: {
    closeModalDancing() {
      this.closeDancing = false;
    },
    closeModal() {
      this.finishModal = false;
    },
    testFinish() {
      this.finishModal = true;
    },
  },
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
</style>
