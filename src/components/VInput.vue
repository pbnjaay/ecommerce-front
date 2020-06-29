<template>
  <div class="flex flex-col w-full relative h-16 focus-within:border-primary">
    <input
      :id="id"
      class="input focus:outline-none border-b border-gray-400 pt-4 pb-1 rounded px-2 text-sm font-sans"
      v-bind="$attrs"
      v-on="inputListner"
      :name="name"
    />
    <label :for="id" class="label absolute font-normal w-full px-2">{{
      label
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  inheritAttrs: false,
  computed: {
    inputListner() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.label {
  transform: translateY(0rem);
  @apply text-primary;
  transition: all 250ms ease;
  font-size: 0.7rem;
}
.input {
  &:focus {
    @apply border-primary;
  }
  &:placeholder-shown + .label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
  }
}
</style>
