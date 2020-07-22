<template>
  <div class="home flex flex-col xl:space-y-3 space-y-2 xl:py-4 py-2 xl:mx-12">
    <v-caroussel :slides="2" :indic="true" :nav="true">
      <v-caroussel-item :id="1">
        <img
          class="h-full"
          src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567304928359"
          alt=""
        />
      </v-caroussel-item>
      <v-caroussel-item :id="2">
        <img
          class="h-full"
          src="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
          alt=""
        />
      </v-caroussel-item>
    </v-caroussel>
    <v-hscroll titre="Recommandé pour vous">
      <product-card
        class="w-5/12"
        v-for="p in products"
        :key="p._id"
        :imageUrl="p.imageUrl"
        :price="p.price"
        :name="p.name"
        :slug="p._id"
      ></product-card>
    </v-hscroll>
    <v-section :vp="true" titre="Ordinateurs et Imprimantes">
      <product-card
        v-for="p in getProductByCategory('Ordinateurs et Imprimantes')"
        :key="p._id"
        :slug="p._id"
        :imageUrl="p.imageUrl"
        :price="p.price"
        :name="p.name"
      >
      </product-card>
    </v-section>
    <v-section :vp="true" titre="Telephones et Tablettes">
      <product-card
        v-for="p in getProductByCategory('Telephones Tablettes')"
        :key="p._id"
        :imageUrl="p.imageUrl"
        :price="p.price"
        :name="p.name"
        :slug="p._id"
      ></product-card>
    </v-section>
    <v-section :vp="true" titre="Accessoirs">
      <product-card
        v-for="p in getProductByCategory('Accessoirs')"
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
import VCaroussel from "@/components/VCaroussel.vue";
import VCarousselItem from "@/components/VCarousselItem.vue";
import VHscroll from "@/components/VHscroll.vue";
import ProductCard from "@/components/ProductCard.vue";
import VSection from "@/components/VSection.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState, mapGetters } = createNamespacedHelpers(
  "products"
);

export default {
  name: "Home",
  components: {
    VCaroussel,
    VCarousselItem,
    VHscroll,
    ProductCard,
    VSection
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    ...mapGetters(["getProductByCategory"])
  },
  methods: {
    ...mapActions(["getAllProducts"])
  },
  mounted() {
    this.getAllProducts();
  }
};
</script>
<style lang="scss">
.home {
  scroll-behavior: smooth;
}
</style>
