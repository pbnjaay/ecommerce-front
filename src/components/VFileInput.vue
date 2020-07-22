<template>
  <div class="flex flex-col relative">
    <input type="file" v-on="fileInput" ref="fileInput" class="hidden" />
    <input
      v-bind="$attrs"
      class="input focus:outline-none border-b border-gray-400 pt-4 pb-1 rounded text-sm font-sans appearance-none"
      :value="value"
      :placeholder="label"
      :id="id"
      :name="name"
      @click="$refs.fileInput.click()"
    />
    <label
      :for="id"
      class="label flex flex-col justify-center font-normal absolute"
      >{{ label }}
    </label>
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
    fileInput() {
      return {
        ...this.$listeners
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
