<template>
  <div class="container1">
    <Main />
    <Docker />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from "vue";
import Docker from "./Docker/index.vue";
import Main from "./Docker/Main.vue";
export default defineComponent({
  components: { Docker, Main },
});
</script>

<style lang="scss" scoped>
.container1 {
  width: 100%;
  height: 100vh;
  position: relative;
  background-image: linear-gradient(
    109.6deg,
    rgba(25, 170, 209, 1) 11.3%,
    rgba(21, 65, 249, 1) 69.9%
  );
}
</style>