<template>
  <div class="flex flex-col xl:py-4 py-2 xl:mx-12 space-y-4">
    <div class="flex xl:flex-row flex-col space-y-3 xl:space-y-0 xl:space-x-4">
      <div
        class="flex xl:w-1/2 bg-white items-center justify-center space-x-4 flex-shrink-0 shadow px-4 border-transparent border rounded"
      >
        <div class="flex xl:w-4/5 self-start xl:sticky pos">
          <div class="relative">
            <img :src="product.imageUrl" :alt="product.name" />
            <div class="flex flex-col space-y-3 absolute item">
              <div
                v-for="i in 4"
                :key="i"
                class="w-12 h-12 border border-gray-200 hover:border-primary focus:border-primary"
              >
                <img :src="product.imageUrl" :alt="product.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <div
          class="flex flex-col space-y-3 bg-white border-transparent border rounded shadow xl:px-4 px-2 pb-2"
        >
          <h1 class="xl:text-2xl text-xl">
            {{ product.name }}
          </h1>
          <div class="xl:text-base text-sm font-light">
            Marque:
            <router-link class="po" :to="{ name: 'Home' }">{{
              product.marque | titleCase
            }}</router-link>
            |
            <router-link class="po" :to="{ name: 'Home' }">
              Produits similaires par {{ product.marque | titleCase }}
            </router-link>
          </div>
          <div class="flex items-center space-x-1 font-light">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-4 h-4 cursor-pointer stroke-current"
            >
              <use xlink:href="@/assets/svg/sprite.svg#star-outline" />
            </svg>
            <span class="xl:text-base text-sm">(Pas d'avis disponible)</span>
          </div>
          <hr class="text-gray-200 w-full h-px text-center" />
          <div class="flex justify-between items-center">
            <p class="xl:text-2xl text-xl font-semibold">
              {{ product.price | currency("FCFA") }}
            </p>
            <button class="focus:outline-none">
              <svg
                class="w-8 h-8 mr-2 cursor-pointer stroke-current text-primary"
              >
                <use xlink:href="@/assets/svg/sprite.svg#heart-outline" />
              </svg>
            </button>
          </div>
          <v-button
            :icon="true"
            class="hidden xl:flex items-center justify-center py-3"
          >
            <svg class="w-4 h-4 mr-2 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#cart-outline" />
            </svg>
            Ajouter au panier
          </v-button>
        </div>
        <v-section titre="Details" class=" whitespace-pre-wrap">
          {{ product.details }}
        </v-section>
        <v-section titre="Fiche technique" class="whitespace-pre-wrap">
          {{ product.fiche }}
        </v-section>
      </div>
      <div
        class="xl:hidden flex bg-white py-2 sticky inset-0 w-full justify-between px-2"
      >
        <a href="tel:+1-303-499-7111">
          <v-button
            :icon="true"
            class="flex items-center justify-center py-3 mr-2"
          >
            <svg class="w-6 h-6 cursor-pointer fill-current">
              <use xlink:href="@/assets/svg/sprite.svg#call" />
            </svg>
          </v-button>
        </a>
        <v-button
          :icon="true"
          class="flex items-center justify-centers flex-grow"
        >
          <svg class="w-4 mr-2 h-4 cursor-pointer stroke-current">
            <use xlink:href="@/assets/svg/sprite.svg#cart-outline" />
          </svg>
          Ajouter au panier
        </v-button>
      </div>
    </div>
    <v-section titre="Produits similaires" :vp="true">
      <product-card
        v-for="p in productSimilar"
        :key="p._id"
        :imageUrl="p.imageUrl"
        :price="p.price"
        :name="p.name"
        :slug="p._id"
      ></product-card>
    </v-section>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VSection from "@/components/VSection.vue";
import ProductCard from "@/components/ProductCard.vue";
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      id: this.$route.params.slug
    };
  },
  components: {
    VButton,
    VSection,
    ProductCard
  },
  methods: {
    ...mapActions(["getProduct"])
  },
  computed: {
    ...mapGetters(["getProductByCategory"]),
    ...mapState(["product"]),
    productSimilar() {
      return this.getProductByCategory(this.product.category);
    }
  },
  created() {
    this.getProduct(this.id);
  }
};
</script>

<style lang="scss" scoped>
.po {
  color: #0071e3;
  text-decoration: none;
  transition: all 250ms;
  &:hover {
    text-decoration: underline;
  }
}
@screen xl {
  .pos {
    top: 72px;
    padding-top: 8vh;
  }
}
.item {
  top: 50%;
  left: 5%;
  transform: translate(-50%, -50%);
}
.fab {
  top: 5%;
  right: 5%;
}
</style>
