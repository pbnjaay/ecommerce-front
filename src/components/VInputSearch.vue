<template>
  <div class="flex justify-center shadow rounded">
    <input
      type="text"
      class="rounded focus:outline-none bg-gray2 px-2 py-2 -mr-8 w-full font-sans"
      v-bind="$attrs"
      v-on="inputListeners"
      title="Rechercher un produit"
    />
    <button
      class="btnS py-2 px-4 text-white border border-transparent rounded-r cursor-pointer bg-primary focus:outline-none"
      aria-label="rechercher"
    >
      <svg class="w-6 h-6 fill-current">
        <use xlink:href="@/assets/svg/sprite.svg#search" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.btnS {
  position: relative;
  z-index: 1;
  &:focus,
  &:hover {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: var(--color-primary-shade);
    z-index: -1;
    opacity: 0;
    @apply inset-0;
  }
}
</style>
