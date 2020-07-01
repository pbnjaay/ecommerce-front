<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        class="fixed right-0 bottom-0 top-0 w-full backdrop z-10"
        v-if="isShow"
        v-on="navListener"
      >
        <button
          class="btnClose flex items-center justify-center bg-white rounded-full absolute w-8 h-8 cursor-pointer focus:outline-none "
          aria-label="fermer"
        >
          <i class="close"></i>
        </button>
      </div>
    </transition>
    <transition name="show" mode="out-in">
      <nav
        class="nav fixed bg-white z-50 ws-84 top-0 left-0 bottom-0"
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
  top: 50%;
  right: 5%;
}
.show-enter-active {
  transition: all 250ms ease-in-out;
}
.show-leave-active {
  transition: all 250ms ease-in-out;
}
.show-enter,
.show-leave-to {
  transform: translateX(-300px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 500ms ease-in;
}
.fade-leave-active {
  transition: all 250ms ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.nav {
  will-change: transform;
}
</style>
