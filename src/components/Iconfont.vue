<template>
  <svg
    :style="{ width: iconClass.width, height: iconClass.height }"
    aria-hidden="true"
  >
    <use :xlink:href="'#' + iconHref" />
  </svg>
</template>


<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    iconClass: {
      type: Object,
      default: {
        width: "20px",
        height: "20px",
      },
      required: false,
    },
    iconHref: {
      type: String,
      required: true,
    },
  },
});
</script>
