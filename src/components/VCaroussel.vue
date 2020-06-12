<template>
  <div class="caroussel h-52-screen relative">
    <button
      class="justify-center items-center rounded-full w-8 h-8 left-0 hidden btn"
      @click="goBack"
      v-if="nav && activeSlide > 1"
    >
      <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-back-outline" />
      </svg>
    </button>
    <button
      class="justify-center items-center rounded-full w-8 h-8 btn hidden right-0"
      @click="goForward"
      v-if="nav && activeSlide !== slides"
    >
      <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline" />
      </svg>
    </button>
    <div v-if="indic" class="box-indic absolute flex space-x-2">
      <span
        v-for="i in slides"
        :key="i"
        class="w-2 h-2 rounded-full bg-gray-400 cursor-pointer"
        :class="{ 'bg-primary': i === activeSlide }"
        @click="activeSlide = i"
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
  z-index: 2;
}
.caroussel:hover button {
  display: flex;
}
.btn {
  position: absolute;
  top: 50%;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.5);
  &:focus {
    outline: none;
  }
}
</style>
