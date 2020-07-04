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
          <ul class="con">
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
                <use
                  xlink:href="@/assets/svg/sprite.svg#hardware-chip-outline"
                />
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
            <router-link :to="{ name: 'Subscribe' }">
              <button
                class="focus:outline-none text-primary uppercase hover:bg-gray-300 rounded px-1 py-1 text-sm"
              >
                Creer un compte
              </button>
            </router-link>
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
              <span class=" font-normal text-gray-700">Total: </span>
              <span class="font-semibold"> 200 000 FCFA</span>
            </div>
            <router-link :to="{ name: 'ShoppingCart' }">
              <v-button class="w-full">aller au panier</v-button>
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
// import VItem from "@/components/VItem.vue";
import VButton from "@/components/VButton.vue";
import VCartItem from "@/components/VCartItem.vue";

export default {
  components: {
    VInputSearch,
    VDropdown,
    // VItem,
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
<style lang="scss">
.sep::after {
  background: #fff;
  content: "ou";
  padding: 0 4px;
  position: relative;
  top: -15px;
}
.con > * {
  @apply px-4;
  @apply py-2;
}
</style>
