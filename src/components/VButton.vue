<template>
  <button
    class="py-2 px-8 rounded text-white uppercase cursor-pointer bg-primary hover:bg-primary-shade focus:outline-none text-sm"
    v-on="btnlisteners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    btnlisteners() {
      return { ...this.$listeners };
    }
  }
};
</script>
