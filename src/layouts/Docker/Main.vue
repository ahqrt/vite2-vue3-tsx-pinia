<template>
  <div>
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang='scss' scoped>
.app-main {
  /* 50= navbar  50  */
  height: calc(100vh - 80px);
  width: 100%;
  position: relative;
  overflow: auto;
}
</style>