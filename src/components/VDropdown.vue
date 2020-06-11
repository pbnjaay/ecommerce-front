<template>
  <div
    class="flex flex-col items-end space-y-10 relative text-black select-none"
  >
    <button
      class="flex font-semibold justify-center items-center px-2 py-2 focus:outline-none"
      :aria-label="name"
      @click="showMenu"
      @blur="closeMenu"
      type="button"
      ref="drop"
    >
      <slot name="icon" />
      {{ name }}
      <svg class="up w-3 h-3 ml-2 stroke-current">
        <use
          v-if="isShow"
          xlink:href="@/assets/svg/sprite.svg#chevron-up-outline"
        />
        <use v-else xlink:href="@/assets/svg/sprite.svg#chevron-down-outline" />
      </svg>
    </button>
    <transition name="drop">
      <div
        v-if="isShow"
        class="absolute bg-white shadow-md rounded min-w-drop max-w-drop py-2 overflow-hidden z-20"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import showMenu from "@/mixins/showMenuMixin.js";
export default {
  mixins: [showMenu],
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.drop-enter-active {
  transition: all 250ms cubic-bezier(0.36, 0.74, 0.53, 1.02);
}
.drop-leave-active {
  transition: all 250ms cubic-bezier(0.36, 0.74, 0.53, 1.02);
}
.drop-enter,
.drop-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
.btnD {
  position: relative;
  z-index: 1;
  &:focus,
  &:hover {
    &::after {
      opacity: 1;
    }
  }
  &::after {
    @apply border;
    @apply bg-gray2;
    @apply rounded;
    @apply border-transparent;
    @apply inset-0;
    position: absolute;
    display: inline-block;
    content: "";
    z-index: -1;
    opacity: 0;
  }
}
</style>
