<template>
  <div id="app" class="flex flex-col flex-grow flex-shrink-0 min-h-full">
    <the-header-mobile @click="showMenu" />
    <the-header />
    <main
      class="bg-gray2 flex flex-col min-h-full flex-grow flex-shrink-0 relative"
    >
      <slot />
      <a
        href="#top"
        class="xl:hidden mt-auto flex flex-col justify-center items-center text-bg-gray-400 uppercase text-sm"
      >
        <svg class="w-4 h-4 cursor-pointer stroke-current text-sm py-px">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-up-outline" />
        </svg>
        Haut de la page
      </a>
      <div class="absolute top-0 z-30 contain">
        <a
          href="#top"
          class="pos hidden xl:flex items-center justify-center w-10 h-10 rounded-full text-black shadow bg-white"
          aria-hidden="true"
        >
          <svg class="w-5 h-5 cursor-pointer stroke-current">
            <use xlink:href="@/assets/svg/sprite.svg#chevron-up-outline" />
          </svg>
        </a>
      </div>
    </main>
    <TheFooter />
    <TheFooterMobile />
    <the-side-nav :isShow="isShow" @click="showMenu"> </the-side-nav>
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
<style lang="scss" scoped>
.pos {
  top: 100%;
  position: sticky;
  transform: translateY(-56px);
}
.contain {
  padding-top: 100vh;
  right: 8px;
  bottom: -32px;
}
</style>
