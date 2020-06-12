<template>
  <div id="app">
    <the-header-mobile @click="showMenu" />
    <the-header />
    <main class="bg-gray2 z-0">
      <slot />
      <a
        href="#top"
        class="xl:hidden flex flex-col justify-center items-center text-dark bg-gray-400"
      >
        <svg class="w-4 h-4 cursor-pointer stroke-current text-sm py-px">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-up-outline" />
        </svg>
        Haut de page
      </a>
      <a
        href="#top"
        class="pos hidden xl:flex flex-col items-center justify-center fixed w-10 h-10 rounded-full text-black shadow bg-white"
        aria-hidden="true"
      >
        <svg class="w-5 h-5 cursor-pointer stroke-current">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-up-outline" />
        </svg>
      </a>
    </main>
    <TheFooter />
    <TheFooterMobile />
    <the-side-nav :isShow="isShow" @click="showMenu" />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import TheFooterMobile from "@/components/TheFooterMobile.vue";
import TheHeaderMobile from "@/components/TheHeaderMobile.vue";
import TheSideNav from "@/components/TheSideNav.vue";
import showMenu from "@/mixins/showMenuMixin.js";
export default {
  mixins: [showMenu],
  components: {
    TheHeader,
    TheHeaderMobile,
    TheSideNav,
    TheFooter,
    TheFooterMobile
  }
};
</script>
<style lang="scss">
.pos {
  bottom: 2rem;
  right: 1rem;
}
</style>
