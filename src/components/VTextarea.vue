<template>
  <div class="pt-4 mt-1 cursor-text">
    <div class="relative">
      <label
        :for="id"
        class="font-normal absolute top-0 text-gray-500"
        :class="{ label: isShown }"
        >{{ label }}
      </label>
      <textarea
        :id="id"
        class="focus:outline-none border-b py-2 bg-transparent border-gray-500 rounded text-sm font-sans inline-block w-full cursor-text focus:border-primary h-10"
        v-bind="$attrs"
        v-on="inputListner"
        :name="name"
        :value="value"
      ></textarea>
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
<style lang="scss">
.label {
  transition: all 250ms ease;
  transform: translateY(-100%);
  @apply text-xs;
  @apply text-primary;
}
</style>
