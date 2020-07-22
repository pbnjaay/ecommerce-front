<template>
  <div class="inline-block w-full">
    <div
      class="flex items-center text-current px-4 h-8 space-x-3 hover:bg-gray2 hover:font-semibold transition-all duration-200 ease-linear cursor-pointer"
      role="menuitem"
      tabindex="0"
      v-on="itemListener"
    >
      <slot name="icon"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    itemListener() {
      return {
        ...this.$listeners
      };
    }
  }
};
</script>

<style></style>
