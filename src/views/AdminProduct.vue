<template>
  <div
    class="flex xl:flex-row justify-center flex-col xl:space-x-2 space-y-3 xl:mx-12 space-y-2 xl:py-4 py-2"
  >
    <div class="xl:w-3/4 xl:px-4 px-2">
      <div class="flex flex-col space-y-3">
        <div class="flex justify-between">
          <h1 class="text-2xl font-bold">
            Produit<span class="text-sm font-normal text-gray-600">
              ({{ products.length }} articles)</span
            >
          </h1>
          <router-link :to="{ name: 'AdminProductForm' }">
            <v-button
              :icon="true"
              class="hidden xl:flex items-center space-x-2"
            >
              <svg
                class="w-4 h-4 cursor-pointer stroke-current fill-current mr-2"
              >
                <use xlink:href="@/assets/svg/sprite.svg#create-outline" />
              </svg>
              <span>Ajouter un Produit</span>
            </v-button>
          </router-link>
        </div>
        <div
          class="xl:flex head font-semibold text-gray-600 pb-3 hidden text-sm"
        >
          <div class="w-2/5 uppercase">article</div>
          <div class="w-20p">prix unitaire</div>
          <div class="w-20p">stock</div>
          <div class="w-10p">Modifier</div>
          <div class="w-10p">Supprimer</div>
        </div>
      </div>
      <div class="flex flex-col space-y-1 xl:divide-y divide-gray2">
        <div
          v-for="p in products"
          :key="p._id"
          class="flex xl:flex-row flex-col bg-white item xl:h-20 h-32 px-4 shadow"
        >
          <div class="xl:w-2/5 w-full flex xl:items-center py-2 space-x-3">
            <img class="h-full" :src="p.imageUrl" alt="" />
            <div class="flex justify-between">
              <h2 class="font-semibold clamp-1">{{ p.name | titleCase }}</h2>
            </div>
          </div>
          <div class="w-20p flex items-center justify-center">
            {{ p.price | currency("FCFA") }}
          </div>
          <div class="w-20p flex items-center justify-center font-bold">
            {{ p.stock }}
          </div>
          <div class="w-10p flex items-center justify-center ">
            <router-link :to="{ path: `/admin/product/${p._id}` }">
              <svg class="w-4 h-4 cursor-pointer stroke-current mr-2">
                <use xlink:href="@/assets/svg/sprite.svg#create-outline" />
              </svg>
            </router-link>
          </div>
          <div
            class="w-10p flex items-center justify-center text-primary font-semibold"
          >
            <button
              class="flex items-center space-x-2 text-gray-600 focus:outline-none text-xs uppercase"
              @click="deleteProduct(p._id)"
            >
              <svg class="w-4 h-4 cursor-pointer stroke-current mr-2">
                <use xlink:href="@/assets/svg/sprite.svg#trash-outline" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("products");

export default {
  components: {
    VButton
  },
  computed: {
    ...mapState({
      products: state => state.products
    })
  },
  methods: {
    ...mapActions(["getAllProducts", "deleteProduct"])
  },
  mounted() {
    this.getAllProducts();
  }
};
</script>
<style lang="scss" scoped>
.head > *:not(:first-child) {
  text-align: center;
  text-transform: uppercase;
}
.item > * {
  height: 100%;
  // vertical-align: middle;
}
</style>
