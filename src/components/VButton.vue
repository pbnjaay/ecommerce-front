<template>
  <button
    class="py-2 px-4 rounded text-white uppercase cursor-pointer"
    :class="{ infoClass: isTransparent }"
    v-on="btnlisteners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      required: true,
      default: "primary"
    }
  },
  data() {
    return { infoClass: `bg-${this.color} hover:bg-${this.color}-shade` };
  },
  computed: {
    btnlisteners() {
      return { ...this.$listeners };
    },
    isTransparent() {
      return this.color !== "transparent";
    }
  }
};
</script>
