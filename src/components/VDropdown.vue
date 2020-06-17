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
        class="absolute flex flex-col min-h-full bg-white shadow-md rounded w-full min-w-drop pt-2 z-20 max-h-drop"
        :class="{ 'pb-2': !footer }"
      >
        <div :class="{ 'overflow-y-auto': overflow }">
          <slot></slot>
        </div>
        <div
          v-if="footer"
          class="flex flex-col items-center sticky space-y-2 bottom-0 mt-auto bg-gray2 py-2"
        >
          <slot name="footer"></slot>
        </div>
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
    },
    overflow: {
      type: Boolean,
      required: false,
      default: false
    },
    footer: {
      type: Boolean,
      required: false,
      default: false
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
