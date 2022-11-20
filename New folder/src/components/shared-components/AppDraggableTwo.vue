<template>
  <div class="container">
    <div class="tab_content-text bgTab">
      Из предложенных ниже предложений, найдите соответствие к каждому <br />
      возбудителю:
    </div>
    <div class="table-block">
      <table>
        <thead>
          <tr>
            <th style="background-color: #7caf0c">Грипп</th>
            <th></th>
            <th style="background-color: #53719c">Covid-19</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <draggable v-model="listOne" class="draggable__content-items2">
                <transition-group type="transition" name="flip-list">
                  <div
                    class="listGroup-item"
                    v-for="(element, i) in listOne"
                    :key="i"
                  >
                    {{ $t(element.name) }}
                  </div>
                </transition-group>
              </draggable>
            </td>
            <td>
              <div
                class="listGroup-item base"
                v-for="(element, i) in lists"
                :key="i"
                :id="`item-${i}`"
              >
                {{ $t(element.name) }}
              </div>
            </td>
            <td>
              <draggable v-model="listTwo" class="draggable__content-items2">
                <transition-group type="transition" name="flip-list">
                  <div
                    class="listGroup-item"
                    v-for="(element, i) in listTwo"
                    :key="i"
                  >
                    {{ $t(element.name) }}
                  </div>
                </transition-group>
              </draggable>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="draggable_footer">
      <p>{{ results }}</p>
      <button @click="result" v-if="draggBtn">
        <img src="/icons/finish.svg" alt="" />
        <span style="color: #0f101d">{{ $t("Send") }}</span>
      </button>

      <router-link :to="{ name: 'module-three' }" v-else>
        <button class="btn_dragg">{{ $t("Module") }} 3</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable";

export default {
  name: "app-draggableTwo",
  components: { draggable },
  data() {
    return {
      draggBtn: true,
      lists: [
        {
          id: 0,
          name: "Инкубационный Период",
        },
        {
          id: 1,
          name: "Симптомы",
        },
        {
          id: 2,
          name: "Способ Передачи",
        },
        {
          id: 3,
          name: "Возбудитель",
        },
        {
          id: 4,
          name: "Осложнения",
        },
        {
          id: 5,
          name: "Профилактика",
        },
      ],
      listOne: [
        {
          id: 1,
          name: "Жар, кашель, усталость",
        },
        {
          id: 0,
          name: " 1-4 дня",
        },

        {
          id: 2,
          name: "Респираторным путем от зараженного человека",
        },
        {
          id: 3,
          name: "Вирус гриппа",
        },
        {
          id: 4,
          name: "Осложнения бывают редко",
        },
        {
          id: 5,
          name: "Ношение маски, ограничение контактов, прививка",
        },
      ],
      listTwo: [
        {
          id: 0,
          name: "До 14 дней",
        },
        {
          id: 1,
          name: "Жар, кашель, усталость, потеря обоняния и вкуса",
        },
        {
          id: 3,
          name: "Вирус SARS-COV-2",
        },
        {
          id: 2,
          name: "Респираторным путем от зараженного человека",
        },
        {
          id: 5,
          name: "Ношение маски, ограничение контактов, прививка",
        },

        {
          id: 4,
          name: "Осложнения тяжелые",
        },
      ],
      count: null,
      results: null,
    };
  },
  methods: {
    result() {
      this.results = this.filterList.length;
      this.draggBtn = false;
      this.filterList.forEach((item) => {
        document.getElementById(`item-${item.id}`).classList.add("active");
      });
    },
  },
  computed: {
    filterList() {
      let count = this.lists.filter(
        (item, i) =>
          item.id === this.listOne[i].id &&
          item.id === this.listTwo[i].id &&
          this.listTwo[i].id === this.listOne[i].id
      );
      return count;
    },
  },
  mounted() {},
  watch: {},
};
</script>
<style scoped>
.btn_dragg {
  background: #00419e;
  border-radius: 5px;
}
.draggable_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
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
.table-block {
  width: 100%;
  overflow: hidden;
  border: 1px solid #00419e;
  margin: 50px 0;
}
.table-block table {
  width: 100%;
  border-spacing: 0;
}
.table-block thead tr th {
  font-weight: 700;
  padding: 10px 20px;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  color: #fff;
  height: 80px;
  width: 300px;
}
thead:first-child {
  border-left: 0;
}
tbody td {
  font-size: 18px;
  line-height: 26px;
  border: 1px solid #00419e;
  border-bottom: none;
  border-right: 0;
  min-width: 20px;
  text-align: center;
}
tbody td:first-child {
  border-left: 0;
}
.listGroup-item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  border: none;
  border-bottom: 1px solid #00419e;
}
.listGroup-item:last-child {
  border-bottom: none;
}
.listGroup-item.base {
  color: #ff6672;
}
.listGroup-item.active {
  color: rgb(124, 175, 12);
  font-weight: bold;
}
@media (max-width: 991px) {
  .table-block {
    width: 100%;
    overflow-x: auto;
  }
  .table-block::-webkit-scrollbar {
    height: 2px;
  }

  .table-block table {
    width: max-content;
  }
  .table-block table::-webkit-scrollbar {
    height: 2px !important;
    width: 2px;
  }

  .table-block table td {
    min-width: 100px !important;
  }
}
</style>
