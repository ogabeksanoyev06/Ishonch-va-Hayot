<template>
  <div class="container mt-5">
    <div class="module__title">{{ $t("Modules") }}</div>
    <app-modules />
  </div>
</template>
<script>
import AppModules from "../modules/AppModules.vue";
export default {
  components: { AppModules },
  name: "App-module",
  data() {
    return {};
  },
};
</script>
<style scoped>
.module__title {
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  text-transform: uppercase;
  color: #0f101d;
  margin-bottom: 40px;
}
</style>
