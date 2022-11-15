<template>
  <div class="modal" :class="{ visible: !hidden }">
    <div class="modal__content">
      <!-- <div class="modal__close" @click="close">
        <dynamic-icon icon="close" />
        <img src="/icons/close.svg" alt="" />
      </div> -->
      <slot />
    </div>
    <div class="overlay" @click="close"></div>
  </div>
</template>

<script>
import "@/assets/styles/components/app-modal.css";

export default {
  name: "AppModal",
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    close() {
      this.hidden = true;
      this.$emit("close");
    },
  },
  async mounted() {
    setTimeout(() => {
      this.hidden = false;
    }, 10);
  },
};
</script>

<style scoped></style>
