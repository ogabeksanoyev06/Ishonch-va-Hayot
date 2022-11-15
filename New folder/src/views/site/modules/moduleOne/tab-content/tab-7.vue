<template>
  <div class="tab_content container">
    <app-draggable />
  </div>
</template>
<script>
import "@/assets/styles/pages/detailed-tab.css";
import AppDraggable from "@/components/shared-components/AppDraggable.vue";
export default {
  name: "tab-7",
  components: { AppDraggable },
  data() {
    return {};
  },
};
</script>
<style scoped></style>
