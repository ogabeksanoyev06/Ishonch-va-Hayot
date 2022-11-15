<template>
  <div class="pagination mb-3">
    <div class="pagination__wrap">
      <button
        class="pagination__item"
        :class="selectedQuestionIndexItem === index ? 'active' : ''"
        v-for="(item, index) in questionsProp"
        :key="index"
        @click="selectQuestion(index)"
      >
        {{ index + 1 }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestPagination",
  props: {
    questionsProp: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      questions: [],
      selectedQuestionIndexItem: 0,
    };
  },
  computed: {},
  methods: {
    selectQuestion(questionIndex) {
      this.selectedQuestionIndexItem = questionIndex;
    },
  },
  mounted() {
    this.questions = this.questionsProp;
  },
  watch: {
    questionsProp() {
      this.questions = this.questionsProp;
    },
    selectedQuestionIndex() {
      this.selectedQuestionIndexItem = this.selectedQuestionIndex;
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  &__wrap {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
  }

  &__item {
    padding: 5px 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #000;
    background-color: white;
    border: 1px solid #e5ecf5;
    border-radius: 4px;
    margin: 4px 4px 4px 0;
    cursor: pointer;
    min-width: unset;
    width: 30px;
    height: 30px;

    &:hover {
      background-color: #032b75 !important;
      color: white;
    }

    &.active {
      background-color: #032b75;
      color: white;
    }

    &.disabled {
      background: #f5f9fd;
      color: #f5f9fd;
      border-color: transparent;
      pointer-events: none;
    }
  }
}
</style>
