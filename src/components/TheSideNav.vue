<template>
  <div>
    <div
      class="fixed right-0 bottom-0 top-0 w-full backdrop z-10"
      v-if="isShow"
      v-on="navListener"
    >
      <button
        class="btnClose flex items-center justify-center bg-white rounded-full absolute w-6 h-6 cursor-pointer focus:outline-none "
        aria-label="fermer"
      >
        <i class="close"></i>
      </button>
    </div>
    <transition name="show" mode="out-in">
      <nav
        class="fixed px-2 bg-white z-50 ws-84 top-0 left-0 bottom-0"
        v-if="isShow"
      >
        <slot />
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    navListener() {
      return { ...this.$listeners };
    }
  }
};
</script>

<style lang="scss" scoped>
.btnClose {
  top: 8%;
  right: 5%;
}
.show-enter-active {
  transition: all 250ms cubic-bezier(0.47, 0, 0.53, 1);
}
.show-leave-active {
  transition: all 250ms cubic-bezier(0.47, 0, 0.53, 1);
}
.show-enter,
.show-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
</style>
