<template>
  <div class="pt-4 mt-1 cursor-text">
    <div class="relative">
      <label
        :for="id"
        class="font-normal absolute top-0 text-gray-500 opacity-0 bg-white"
        :class="{ label: isShown }"
        >{{ label }}
      </label>
      <input
        :id="id"
        class="focus:outline-none border-b py-2 bg-transparent border-gray-500 rounded text-sm font-sans inline-block w-full cursor-text focus:border-primary"
        v-bind="$attrs"
        v-on="inputListner"
        :name="name"
        :value="value"
        :placeholder="label"
      />
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
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
    },
    value: {
      required: true
    }
  },
  computed: {
    inputListner() {
      return {
        ...this.$listeners,
        input: event => this.$emit("input", event.target.value)
      };
    },
    isShown() {
      return this.value ? true : false;
    }
  }
};
</script>
<style lang="scss" scoped>
.label {
  opacity: 1;
  transition: all 250ms ease;
  transform: translateY(-100%);
  @apply text-xs;
  @apply text-primary;
}
</style>
