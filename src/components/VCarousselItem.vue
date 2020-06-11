<template>
  <transition name="slide" mode="in-out">
    <div
      class="absolute inset-0"
      :to="{ name: 'Home' }"
      v-if="activeSlide === id"
      aria-hidden="true"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    activeSlide() {
      return this.$parent.activeSlide;
    }
  }
};
</script>
<style lang="scss" scoped>
.slide-enter-active {
  transition: all 250ms cubic-bezier(0.36, 0.74, 0.53, 1.02);
}
.slide-leave-active {
  transition: all 250ms cubic-bezier(0.36, 0.74, 0.53, 1.02);
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
