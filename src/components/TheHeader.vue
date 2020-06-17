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
          <div class="flex flex-col items-center space-y-4">
            <router-link :to="{ name: 'Login' }">
              <v-button>Se connecter</v-button>
            </router-link>
            <hr class="sep text-gray-400 w-full h-px text-center" />
            <button
              class="focus:outline-none text-primary uppercase hover:bg-gray-300 rounded px-1 py-1 text-sm"
            >
              Creer un compte
            </button>
          </div>
        </v-dropdown>
        <v-dropdown name="Panier" :overflow="true" :footer="true">
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
          <div v-if="nbr">
            <v-cart-item
              v-for="i in 5"
              :key="i"
              name="Apple MacBook Air"
              :price="700000"
              imageUrl="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
            ></v-cart-item>
          </div>
          <template #footer v-if="nbr">
            <div>
              <span>Total:</span>
              <span class="font-bold"> 2000000 FCFA</span>
            </div>
            <router-link :to="{ name: 'ShoppingCart' }">
              <v-button>aller au panier</v-button>
            </router-link>
          </template>
        </v-dropdown>
      </div>
    </nav>
  </header>
</template>

<script>
import VInputSearch from "@/components/VInputSearch.vue";
import VDropdown from "@/components/VDropdown.vue";
import VItem from "@/components/VItem.vue";
import VButton from "@/components/VButton.vue";
import VCartItem from "@/components/VCartItem.vue";

export default {
  components: {
    VInputSearch,
    VDropdown,
    VItem,
    VButton,
    VCartItem
  },
  data() {
    return {
      nbr: 5
    };
  }
};
</script>
<style lang="scss" scoped>
.sep::after {
  background: #fff;
  content: "ou";
  padding: 0 4px;
  position: relative;
  top: -15px;
}
</style>
