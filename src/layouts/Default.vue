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
        v-if="this.$route.path === '/'"
      >
        <svg class="w-4 h-4 cursor-pointer stroke-current text-sm py-px">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-up-outline" />
        </svg>
        Haut de la page
      </a>
      <div class="absolute top-0 z-30 contain" v-if="this.$route.path === '/'">
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
    <the-side-nav :isShow="isShow" @click="showMenu">
      <div
        class="flex flex-col divide-gray-300 divide-y text-sm space-y-2"
        @click="showMenu"
      >
        <div class="flex items-center space-x-3 px-4 py-2">
          <svg class="w-5 h-5 cursor-pointer stroke-current">
            <use xlink:href="@/assets/svg/sprite.svg#person-outline" />
          </svg>
          <router-link :to="{ name: 'Login' }" class="font-semibold text-lg">
            Bonjour, identifiez-vous
          </router-link>
        </div>
        <ul class="con">
          <li
            class="uppercase font-semibold text-primary flex w-full justify-between"
          >
            <router-link :to="{ name: 'Home' }">
              Votre compte
            </router-link>
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use
                xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline"
              />
            </svg>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use
                xlink:href="@/assets/svg/sprite.svg#file-tray-stacked-outline"
              />
            </svg>
            <router-link :to="{ name: 'MyOrders' }">
              Vos commandes
            </router-link>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#hand-right-outline" />
            </svg>
            <router-link :to="{ name: 'AdminProduct' }">
              Gerer vos produits
            </router-link>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#hand-right-outline" />
            </svg>
            <router-link :to="{ name: 'AdminOrder' }">
              Gerer vos commandes
            </router-link>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#heart-outline" />
            </svg>
            <router-link :to="{ name: 'Home' }">
              Votre liste d'envies
            </router-link>
          </li>
        </ul>
        <ul class="con">
          <li
            class="uppercase font-semibold text-primary flex w-full justify-between"
          >
            <router-link :to="{ name: 'Home' }">
              Nos categories
            </router-link>
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use
                xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline"
              />
            </svg>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use
                xlink:href="@/assets/svg/sprite.svg#phone-portrait-outline"
              />
            </svg>
            <router-link :to="{ name: 'Home' }">
              Téléphones et Tablettes
            </router-link>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#hardware-chip-outline" />
            </svg>
            <router-link :to="{ name: 'Home' }">
              Electronique
            </router-link>
          </li>
          <li class="flex space-x-3">
            <svg class="w-5 h-5 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#desktop-outline" />
            </svg>
            <router-link :to="{ name: 'Home' }">
              Informatique
            </router-link>
          </li>
        </ul>
        <div class="flex items-center space-x-3 px-4 py-2">
          <svg class="w-5 h-5 cursor-pointer stroke-current">
            <use xlink:href="@/assets/svg/sprite.svg#log-out-outline" />
          </svg>
          <router-link :to="{ name: 'Home' }">
            Deconnexion
          </router-link>
        </div>
      </div>
    </the-side-nav>
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
  right: 4px;
  bottom: -32px;
}
.con > * {
  @apply px-4;
  @apply py-2;
}
</style>
