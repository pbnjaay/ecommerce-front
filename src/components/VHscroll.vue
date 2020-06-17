<template>
  <section
    class="wpo shadow rounded border border-transparent px-2 py-2 bg-white"
  >
    <header class="flex justify-between h-8 pb-2">
      <h2 class="xl:text-xl text-lg font-semibold">{{ titre }}</h2>
    </header>
    <div class="overflow-hidden px-2 relative">
      <div
        class="scrl py-2 flex flex-grow-0 flex-shrink max-w-full"
        ref="caroussel"
      >
        <slot />
      </div>
      <button
        class="justify-center items-center rounded-full w-10 h-10 left-0 hidden md:hidden btn"
        @click="goBack"
        v-if="scroll > 0"
      >
        <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-back-outline" />
        </svg>
      </button>
      <button
        class="justify-center items-center rounded-full w-10 h-10 btn hidden right-0 md:hidden"
        @click="goForward"
        v-if="scrollMax - scroll >= 1"
      >
        <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline" />
        </svg>
      </button>
    </div>
  </section>
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
@screen xl {
  .wpo:hover button {
    display: flex;
  }
}
.btn {
  position: absolute;
  top: 40%;
  background-color: rgba(0, 0, 0, 0.5);
  &:focus {
    outline: none;
  }
}
.scrl {
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
    display: none;
  }
}
</style>
