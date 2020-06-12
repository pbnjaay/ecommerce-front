<template>
  <header
    class="xl:hidden sticky top-0 bg-white z-10 flex flex-col items-center shadow w-full pb-2 bg-white"
  >
    <div class="flex items-center justify-between h-16 min-w-90">
      <div class="flex space-x-6 items-center">
        <button
          class="flex items-center justify-center focus:outline-none w-6 h-6"
          type="button"
          v-on="burgerListener"
          v-bind="$attrs"
          aria-label="ouvrir menu"
        >
          <i class="burger"></i>
        </button>
        <span class="text-sm border border-dark rounded font-bold">
          CHON&trade;
        </span>
      </div>
      <nav class="w-2/3 flex-grow">
        <div class="flex items-center space-x-6 justify-end">
          <router-link
            aria-hidden="true"
            class="flex items-center"
            :to="{ name: 'Home' }"
          >
            <svg class="w-6 h-6 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#person-outline" />
            </svg>
          </router-link>
          <router-link
            aria-hidden="true"
            class="flex items-center"
            :to="{ name: 'Home' }"
          >
            <span class="flex" :nbr="nbr" :class="{ cartBadge: nbr > 0 }">
              <svg class="w-6 h-6 cursor-pointer stroke-current">
                <use xlink:href="@/assets/svg/sprite.svg#cart-outline" />
              </svg>
            </span>
          </router-link>
        </div>
      </nav>
    </div>
    <div class="min-w-90">
      <v-input-search placeholder="Rechercher" />
    </div>
  </header>
</template>

<script>
import VInputSearch from "@/components/VInputSearch.vue";
export default {
  inheritAttrs: false,
  components: {
    VInputSearch
  },
  data() {
    return {
      nbr: 2
    };
  },
  computed: {
    burgerListener() {
      return { ...this.$listeners };
    }
  }
};
</script>
