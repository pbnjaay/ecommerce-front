<template>
  <section class="caroussel w-full h-ca relative">
    <button
      class="justify-center items-center rounded-full w-10 h-10 hidden btn prev"
      @click="goBack"
      v-if="nav && activeSlide > 1"
    >
      <svg class="w-5 h-5 cursor-pointer stroke-current text-white">
        <use xlink:href="@/assets/svg/sprite.svg#chevron-back-outline" />
      </svg>
    </button>
    <button
      class="justify-center items-center rounded-full w-10 h-10 btn hidden next"
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
  </section>
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
@screen xl {
  .caroussel:hover button {
    display: flex;
}
}
.next {
  right: 5px;
}
.prev {
  left: 5px;
}
.btn {
  position: absolute;
  top: 50%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  &:focus {
    outline: none;
  }
}
</style>
