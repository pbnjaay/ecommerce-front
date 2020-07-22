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
            <li>
              <router-link :to="{ name: 'Home' }">
                <v-item>
                  <template #icon>
                    <svg class="w-5 h-5 cursor-pointer stroke-current">
                      <use
                        xlink:href="@/assets/svg/sprite.svg#phone-portrait-outline"
                      />
                    </svg>
                  </template>
                  <span>
                    Téléphones et Tablettes
                  </span>
                </v-item>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Home' }" class="w-full">
                <v-item>
                  <template #icon>
                    <svg class="w-5 h-5 cursor-pointer stroke-current">
                      <use
                        xlink:href="@/assets/svg/sprite.svg#hardware-chip-outline"
                      />
                    </svg>
                  </template>
                  <span>Electronique</span>
                </v-item>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Home' }" class="w-full">
                <v-item>
                  <template #icon>
                    <svg class="w-5 h-5 cursor-pointer stroke-current">
                      <use
                        xlink:href="@/assets/svg/sprite.svg#desktop-outline"
                      />
                    </svg>
                  </template>
                  <span>Informatique</span>
                </v-item>
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
          <div class="flex flex-col divide-y divide-gray-300">
            <div class="flex flex-col pb-2">
              <router-link class="w-full" :to="{ name: 'Login' }">
                <v-item>
                  <template #icon>
                    <svg class="w-5 h-5 cursor-pointer stroke-current">
                      <use
                        xlink:href="@/assets/svg/sprite.svg#person-outline"
                      />
                    </svg>
                  </template>
                  <span>
                    Se connecter
                  </span>
                </v-item>
              </router-link>
              <router-link :to="{ name: 'Subscribe' }" class="w-full">
                <v-item>
                  <template #icon>
                    <svg class="w-5 h-5 cursor-pointer stroke-current">
                      <use
                        xlink:href="@/assets/svg/sprite.svg#person-add-outline"
                      />
                    </svg>
                  </template>
                  <span>
                    Creer un compte
                  </span>
                </v-item>
              </router-link>
            </div>
            <ul class=" w-full pt-2 pb-2">
              <li>
                <router-link :to="{ name: 'MyOrders' }" class="w-full">
                  <v-item>
                    <template #icon>
                      <svg class="w-5 h-5 cursor-pointer stroke-current">
                        <use
                          xlink:href="@/assets/svg/sprite.svg#file-tray-stacked-outline"
                        />
                      </svg>
                    </template>
                    <span> Vos commandes </span>
                  </v-item>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'AdminProduct' }" class="w-full">
                  <v-item>
                    <template #icon>
                      <svg class="w-5 h-5 cursor-pointer stroke-current">
                        <use
                          xlink:href="@/assets/svg/sprite.svg#hand-right-outline"
                        />
                      </svg>
                    </template>
                    <span>Gerer vos produits</span>
                  </v-item>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'AdminOrder' }" class="w-full">
                  <v-item>
                    <template #icon>
                      <svg class="w-5 h-5 cursor-pointer stroke-current">
                        <use
                          xlink:href="@/assets/svg/sprite.svg#hand-right-outline"
                        />
                      </svg>
                    </template>
                    <span>Gerer vos commandes</span>
                  </v-item>
                </router-link>
              </li>
              <li>
                <router-link :to="{ name: 'Home' }" class="w-full">
                  <v-item>
                    <template #icon>
                      <svg class="w-5 h-5 cursor-pointer stroke-current">
                        <use
                          xlink:href="@/assets/svg/sprite.svg#heart-outline"
                        />
                      </svg>
                    </template>
                    <span>Votre liste d'envies</span>
                  </v-item>
                </router-link>
              </li>
            </ul>
            <router-link :to="{ name: 'Subscribe' }" class="w-full">
              <v-item class="pt-2">
                <template #icon>
                  <svg class="w-5 h-5 cursor-pointer stroke-current">
                    <use xlink:href="@/assets/svg/sprite.svg#log-out-outline" />
                  </svg>
                </template>
                <span>Se deconnecter</span>
              </v-item>
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
          <div v-if="nbr" class=" divide-y divide-gray-300">
            <v-cart-item
              v-for="i in 5"
              :key="i"
              name="Apple MacBook Air"
              :price="700000"
              imageUrl="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
            ></v-cart-item>
          </div>
          <template #footer v-if="nbr">
            <div class="flex justify-between">
              <span class="text-gray-700 uppercase text-sm font-light"
                >Total
              </span>
              <span class="text-sm"> 200 000 FCFA</span>
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
