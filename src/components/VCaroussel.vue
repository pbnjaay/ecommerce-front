<template>
  <div class="caroussel h-52-screen relative">
    <span
      class="arrow absolute left-0 top-50 z-20 rounded-full hidden"
      @click="goBack"
      v-if="nav && activeSlide > 1"
    >
      <svg class="w-8 h-8 cursor-pointer stroke-current">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-back-outline" />
      </svg>
    </span>
    <span
      class="arrow absolute right-0 top-50 z-20 rounded-full hidden"
      @click="goForward"
      v-if="nav && activeSlide !== slides"
    >
      <svg class="w-8 h-8 cursor-pointer stroke-current">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline" />
      </svg>
    </span>
    <div v-if="indic" class="box-indic absolute flex space-x-2">
      <span
        v-for="i in slides"
        :key="i"
        class="w-2 h-2 rounded-full bg-gray-400"
        :class="{ 'bg-primary': i === activeSlide }"
      ></span>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Number,
      required: true
    },
    timer: {
      type: Number,
      default: 5000
    },
    indic: {
      type: Boolean,
      default: false
    },
    nav: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeSlide: 1
    };
  },
  methods: {
    goBack() {
      this.activeSlide - 1 <= 0
        ? (this.activeSlide = this.slides)
        : (this.activeSlide -= 1);
    },
    goForward() {
      this.activeSlide + 1 > this.slides
        ? (this.activeSlide = 1)
        : (this.activeSlide += 1);
    }
  },
  created() {
    if (this.timer > 0)
      setInterval(() => {
        this.goForward();
      }, this.timer);
  }
};
</script>
<style lang="scss" scoped>
.box-indic {
  bottom: 5px;
  left: 50%;
  z-index: 50;
}
.caroussel:hover .arrow {
  display: inline;
}
</style>
