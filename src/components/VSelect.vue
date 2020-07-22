<template>
  <div class="pt-4 mt-1 cursor-pointer">
    <div class="relative">
      <label
        :for="id"
        class="font-normal absolute top-0 text-gray-500 opacity-0 bg-white"
        :class="{ label: isShow || isShown }"
        >{{ label }}
      </label>
      <transition name="drop">
        <ul
          class="block bg-white rounded shadow-md absolute z-30 right-0 left-0"
          v-show="isShow"
        >
          <li
            class="px-4 h-8 block hover:font-semibold hover:bg-gray2 w-full text-sm"
            v-for="(item, i) in items"
            :key="i"
            @click="selectItem(item)"
            :class="{ 'bg-gray2': item === value }"
            tabindex="0"
          >
            {{ item }}
          </li>
        </ul>
      </transition>
      <div class="flex relative items-center">
        <input
          type="text"
          :id="id"
          class="focus:outline-none border-b py-2 bg-transparent border-gray-500 rounded text-sm font-sans inline-block w-full cursor-pointer"
          v-bind="$attrs"
          :name="name"
          :value="value"
          :placeholder="label"
          @focus="show"
          @blur="hide"
          readonly
          aria-readonly="false"
        />
        <svg
          class="w-4 h-4 absolute right-0 cursor-pointer stroke-current fill-current"
        >
          <use xlink:href="@/assets/svg/sprite.svg#caret-down-outline" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  data() {
    return {
      isShow: false,
      select: ""
    };
  },
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
    items: {
      type: Array,
      required: true
    },
    value: {
      type: String,
      default: ""
    }
  },
  computed: {
    isShown() {
      return this.value ? true : false;
    }
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    selectItem(item) {
      this.select = item;
      this.$emit("input", item);
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
