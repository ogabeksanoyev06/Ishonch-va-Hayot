<template>
  <div class="app-slider">
    <div class="splide" ref="slider">
      <div class="splide__slider">
        <div class="splide__track">
          <div class="splide__list">
            <div v-for="(item, idx) in list" :key="idx" class="splide__slide">
              <slot :item="item"> </slot>
            </div>
          </div>
        </div>
        <button key="1" class="app-slider__button-previous" @click="previous">
          <img src="/icons/angle-left.svg" alt="" />
        </button>
        <button key="2" class="app-slider__button-next" @click="next">
          <img src="/icons/angle-right.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
const SplideJS = () => import("@splidejs/splide");
import "@splidejs/splide/dist/css/splide-core.min.css";

export default {
  name: "AppSlider",
  components: {},
  props: {
    list: {
      type: Array,
      required: true,
    },
    slideCount: {
      type: [String, Number],
      default: 1,
    },
  },
  data() {
    return {
      cardsSlider: null,
      showPreviousArrow: false,
      showNextArrow: false,
    };
  },

  computed: {
    options() {
      return {
        rewind: true,
        perMove: 1,
        gap: 15,
        arrows: false,
        pagination: false,
        breakpoints: {
          1240: {
            gap: 15,
          },
          1100: {
            perPage: 3,
            gap: 15,
          },
          900: {
            perPage: 2,
            gap: 15,
          },

          550: {
            perPage: 1,
          },
        },
      };
    },
  },
  methods: {
    checkArrows(idx) {
      this.showPreviousArrow = idx > 0;
      this.showNextArrow =
        (this.isMobile ? idx : idx + this.count - 1) < this.list.length - 1;
    },
    next() {
      if (this.cardsSlider) {
        this.cardsSlider.go("+1");
      }
    },
    previous() {
      if (this.cardsSlider) {
        this.cardsSlider.go("-1");
      }
    },
    async init() {
      const refSlider = this.$refs["slider"];
      const Splide = await SplideJS();
      const slider = new Splide.default(refSlider, this.options);
      slider.mount();
      this.checkArrows(0);
      slider.on("move", (newIndex) => {
        this.checkArrows(newIndex);
        this.$emit("select", { index: newIndex });
      });
      this.cardsSlider = slider;
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    list() {
      this.init();
    },
  },
  beforeDestroy() {
    if (this.cardsSlider) {
      const cardsSlider = this.cardsSlider;
      setTimeout(() => {
        cardsSlider.destroy();
      }, 150);
    }
  },
};
</script>

<style lang="scss">
@media (max-width: 1350px) {
  .app-slider {
    padding-left: 30px;
    padding-right: 30px;
  }

  .app-slider__button-next {
    right: -45px !important;
  }

  .app-slider__button-previous {
    left: -45px !important;
  }
}

@media (max-width: 991px) {
  .app-slider {
    padding-left: 10px;
    padding-right: 10px;
  }

  .app-slider__button-next {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    right: -30px !important;
  }

  .app-slider__button-previous {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    left: -30px !important;
  }
}

@media (max-width: 776px) {
  .app-slider {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
}
</style>
