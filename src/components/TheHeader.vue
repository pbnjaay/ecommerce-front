<template>
  <header
    class="hidden sticky top-0 z-50 xl:flex items-center justify-between w-full h-20 shadow px-12 bg-white"
  >
    <router-link :to="{ name: 'Home' }">
      <span class="border border-dark rounded font-bold">
        CHON&trade;
      </span>
    </router-link>
    <nav class="w-2/3 flex-grow">
      <div class="flex items-center space-x-2 justify-end">
        <v-dropdown name="Categories">
          <template #icon>
            <svg class="w-5 h-5 mr-2 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#grid-outline" />
            </svg>
          </template>
          <ul>
            <li><v-item>sa hgj</v-item></li>
            <li><v-item>sa hgj</v-item></li>
            <li><v-item>sa hgj</v-item></li>
          </ul>
        </v-dropdown>
        <v-input-search class="w-1/2" placeholder="Rechercher" />
        <v-dropdown name="Se connecter">
          <template #icon>
            <svg class="w-5 h-5 mr-2 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#person-outline" />
            </svg>
          </template>
          <ul>
            <li><v-item>sa hgj</v-item></li>
            <li><v-item>sa hgj</v-item></li>
            <li><v-item>sa hgj</v-item></li>
          </ul>
        </v-dropdown>
        <v-dropdown name="Panier">
          <template #icon>
            <span class="flex" :nbr="nbr" :class="{ cartBadge: nbr > 0 }">
              <svg class="w-6 h-6 cursor-pointer stroke-current mr-2">
                <use xlink:href="@/assets/svg/sprite.svg#cart-outline" />
              </svg>
            </span>
          </template>
          <div v-if="nbr === 0" class="px-2 text-center p-4">
            Votre panier est vide
          </div>
        </v-dropdown>
      </div>
    </nav>
  </header>
</template>

<script>
import VInputSearch from "@/components/VInputSearch.vue";
import VDropdown from "@/components/VDropdown.vue";
import VItem from "@/components/VItem.vue";

export default {
  components: {
    VInputSearch,
    VDropdown,
    VItem
  },
  data() {
    return {
      nbr: 0
    };
  }
};
</script>
