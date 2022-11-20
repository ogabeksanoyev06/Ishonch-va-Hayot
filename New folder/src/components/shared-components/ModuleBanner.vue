<template>
  <div class="module">
    <kinesis-container>
      <div class="module__inner">
        <div class="module__content">
          <p class="module-number">{{ $t("Module") }} {{ moduleId }}</p>
          <p class="module-name">{{ $t(title) }}</p>
          <ul class="module-desc">
            <li style="margin-bottom: 12px; font-weight: 700; font-size: 24px">
              {{ $t("ModuleEnd") }}:
            </li>
            <li class="module-desc_item" v-for="item in goals" :key="item.id">
              • {{ $t(item.text) }}
            </li>
          </ul>
          <button class="module_btn" @click="detailedPage">
            {{ $t("StartTraining") }}
          </button>
        </div>
        <div class="module__photo">
          <kinesis-element class="layer" :strength="20">
            <img :src="`/images/${photo}`" alt="" />
          </kinesis-element>
          <div class="module__photo-top">
            <kinesis-element class="layer" :strength="8">
              <img :src="`/svg/${photoTop}`" alt="" />
            </kinesis-element>
          </div>
          <div class="module__photo-bottom">
            <kinesis-element class="layer" :strength="8">
              <img :src="`/svg/${photoBottom}`" alt="" />
            </kinesis-element>
          </div>
        </div>
      </div>
    </kinesis-container>
    <div class="hr"></div>
    <p class="concepts">
      {{ $t("KeyConcepts") }}: <span>{{ $t(concepts) }}</span>
    </p>
    <div class="module__slide-btn">
      <div class="prev-module slide_btn" @click="goToPrev">
        <p class="slide_btn-title">{{ $t("PreviousModule") }}</p>
        <div>
          <p class="module__slide-number">{{ $t("Module") }} {{ prev }}</p>
          <p class="module__slide-name">{{ $t(prevTitle) }}</p>
        </div>
      </div>
      <div class="next-module slide_btn" @click="goToNext">
        <p class="slide_btn-title">{{ $t("NextModule") }}</p>
        <div>
          <p class="module__slide-number">{{ $t("Module") }} {{ next }}</p>
          <p class="module__slide-name">{{ $t(nextTitle) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@/assets/styles/components/app-module-banner.css";
import { KinesisContainer, KinesisElement } from "vue-kinesis";
export default {
  name: "ModuleBanner",
  components: {
    "kinesis-container": KinesisContainer,
    "kinesis-element": KinesisElement,
  },
  data() {
    return {
      show: false,
    };
  },
  props: {
    moduleId: String,
    title: String,
    concepts: String,
    photo: String,
    prev: String,
    prevTitle: String,
    prevLink: String,
    next: String,
    nextTitle: String,
    nextLink: String,
    goals: Array,
    detailedPageLink: String,
    photoTop: String,
    photoBottom: String,
  },
  methods: {
    goToPrev() {
      this.$router.push({
        name: this.prevLink,
      });
    },
    goToNext() {
      this.$router.push({
        name: this.nextLink,
      });
    },
    detailedPage() {
      this.$router.push({
        name: this.detailedPageLink,
      });
    },
  },
};
</script>
<style scoped></style>
