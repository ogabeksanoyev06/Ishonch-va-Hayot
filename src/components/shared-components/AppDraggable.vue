<template>
  <div class="container">
    <div class="draggable__text">
      <p>
        Расположите в правильном порядке ситуации и пути принятия мер по
        предотвращению распространения респираторных инфекций.
      </p>
    </div>

    <div class="draggable__content">
      <div class="draggable__content-items1">
        <div
          class="draggable__content-item1"
          v-for="(element, i) in lists"
          :key="i"
        >
          {{ element.name }}
        </div>
      </div>
      <draggable v-model="list" class="draggable__content-items2">
        <transition-group type="transition" name="flip-list">
          <div
            class="listGroup-item"
            v-for="(element, i) in list"
            :key="i"
            :id="`item-${element.id}`"
          >
            {{ element.name }}
          </div>
        </transition-group>
      </draggable>
    </div>
    <div class="draggable_footer">
      <p>{{ results }}</p>
      <button @click="result">
        <img src="/icons/finish.svg" alt="" />
        <span style="color: #0f101d">{{ $t("Send") }}</span>
      </button>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "app-draggable",
  components: { draggable },
  data() {
    return {
      lists: [
        {
          id: 0,
          name: "Температура до 38 градусов",
        },
        {
          id: 1,
          name: "Одышка",
        },
        {
          id: 2,
          name: "Покраснение глаз, слезотечение",
        },
        {
          id: 3,
          name: "Поход в театр или на свадьбу",
        },
        {
          id: 4,
          name: "После посещения магазина",
        },
        {
          id: 5,
          name: "Слабость, утомляемость",
        },
        {
          id: 6,
          name: "Головная боль",
        },
        {
          id: 7,
          name: "Покраснение в месте введения вакцины в первые сутки",
        },
        {
          id: 8,
          name: "После посещения мероприятия с большим количеством людей",
        },
        {
          id: 9,
          name: "Кашель, боль за грудиной ",
        },
      ],
      list: [
        {
          id: 0,
          name: "Обратиться к врачу",
          isActive: true,
        },
        {
          id: 1,
          name: "Обратиться к врачу",
        },
        {
          id: 2,
          name: "Начать прием антибиотиков",
        },
        {
          id: 3,
          name: "Меры предосторожности",
        },
        {
          id: 4,
          name: "Меры предосторожности",
        },
        {
          id: 5,
          name: "Обратиться к врачу",
        },
        {
          id: 6,
          name: "Обратиться к врачу",
        },
        {
          id: 7,
          name: "Обильное питье, не тереть место инъекции, не накладывать повязку, не мочить место инъекции",
        },
        {
          id: 8,
          name: "Обратиться к врачу",
        },
        {
          id: 9,
          name: "Начать прием антибиотиков",
        },
      ],
      count: null,
      results: null,
    };
  },
  methods: {
    result() {
      this.results = this.filterList.length;
      this.filterList.forEach((item) => {
        document.getElementById(`item-${item.id}`).classList.add("active");
      });
    },
  },
  computed: {
    filterList() {
      let count = this.lists.filter((item, i) => item.id === this.list[i].id);
      return count;
    },
  },
};
</script>
<style scoped>
.draggable__text {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
}
.draggable__text p {
  font-size: 26px;
  font-weight: 700;
  color: #00419e;
  text-align: center;
}
.draggable_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}
.draggable_footer p {
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #0f101d;
}
.draggable_footer button span {
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #0f101d;
  margin-left: 10px;
}
.draggable__content {
  display: flex;
  justify-content: space-between;
}
.draggable__content-items1,
.draggable__content-items2 {
  max-width: 400px;
  width: 100%;
}
.draggable__content-item1,
.listGroup-item {
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 22px;
  color: #00419e;
  border: 2px solid #00419e;
  padding: 10px;
  margin-bottom: 10px;
  min-height: 70px;
  border-radius: 10px;
  min-height: 100px;
}
.draggable__content-item1 {
  border-color: blue;
  font-weight: 700;
}
.listGroup-item.active {
  color: rgb(124, 175, 12);
  font-weight: bold;
}
.listGroup-item {
  cursor: pointer;
}
</style>
