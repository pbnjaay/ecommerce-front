<template>
  <button
    class="py-3 font-semibold px-8 rounded text-white uppercase cursor-pointer bg-primary hover:bg-primary-shade focus:outline-none text-sm"
    v-on="btnlisteners"
  >
    <slot v-if="icon" name="icon"></slot>
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    btnlisteners() {
      return { ...this.$listeners };
    }
  }
};
</script>
