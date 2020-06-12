<template>
  <div class="w relative">
    <header class="h-8">
      <h1 class="text-lg font-semibold">{{ titre }}</h1>
    </header>
    <div class="scrl flex space-x-4 overflow-hidden relative" ref="caroussel">
      <slot />
    </div>
    <button
      class="justify-center items-center rounded-full w-8 h-8 left-0 hidden btn"
      @click="goBack"
      v-if="scroll > 0"
    >
      <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-back-outline" />
      </svg>
    </button>
    <button
      class="justify-center items-center rounded-full w-8 h-8 btn hidden right-0"
      @click="goForward"
      v-if="scroll !== scrollMax"
    >
      <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { scroll: 0, scrollMax: 0 };
  },
  props: {
    titre: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack() {
      this.scroll = this.$refs.caroussel.scrollLeft -= this.$refs.caroussel.clientWidth;
    },
    goForward() {
      this.scroll = this.$refs.caroussel.scrollLeft += this.$refs.caroussel.clientWidth;
    }
  },
  mounted() {
    this.scrollMax = this.$refs.caroussel.scrollWidth;
  }
};
</script>
<style lang="scss" scoped>
.btn {
  position: absolute;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  &:focus {
    outline: none;
  }
}
.scrl {
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
}
.w:hover button {
  display: flex;
}
</style>
