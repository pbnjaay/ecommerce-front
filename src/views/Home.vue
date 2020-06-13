<template>
  <div class="home flex flex-col xl:space-y-5 space-y-3 xl:py-4 py-2 xl:mx-12">
    <v-caroussel :slides="2" :indic="true" :nav="true">
      <v-caroussel-item :id="1">
        <div class="h-full bg-red-200 text-center">
          <img
            class="h-full w-full"
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-gallery1?wid=2000&hei=2000&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1573770232970"
            alt=""
          />
        </div>
      </v-caroussel-item>
      <v-caroussel-item :id="2">
        <div class="h-full bg-yellow-100 text-center">
          <img
            class="h-full w-full"
            src="https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch_series_5-space-black-titanium-case-viper-dark-091019_carousel.jpg.large.jpg"
            alt=""
          />
        </div>
      </v-caroussel-item>
    </v-caroussel>
    <v-hscroll titre="Recommandé pour vous">
      <product-card
        v-for="i in 29"
        :key="i"
        imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567304928359"
        :price="360000"
        name="Iphone 11 jfkglpioigiudursre ouufed65sd4"
      ></product-card>
    </v-hscroll>
    <section
      class="shadow bg-white border border-transparent rounded xl:px-4 px-2"
    >
      <header class="flex justify-between items-center h-8">
        <h1 class="text-lg font-semibold">Ordinateurs et Imprimantes</h1>
        <router-link
          class="text-primary text-sm font-semibold"
          :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </header>
      <div class="flex flex-wrap">
        <product-card
          v-for="i in 4"
          :key="i"
          imageUrl="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
          :price="760000"
          name="Apple MacBook Air 2017"
        ></product-card>
      </div>
    </section>
    <section
      class="shadow bg-white border border-transparent rounded xl:px-4 px-2"
    >
      <header class="flex justify-between items-center h-8">
        <h1 class="text-lg font-semibold">Tablettes</h1>
        <router-link
          class="text-primary text-sm font-semibold"
          :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </header>
      <div class="flex flex-wrap">
        <product-card
          v-for="i in 4"
          :key="i"
          imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-201911_FMT_WHH?wid=2000&amp;hei=2000&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1573825332486"
          :price="760000"
          name="Frandiscount Apple MacBook Air 2017"
        ></product-card>
      </div>
    </section>
    <section
      class="shadow bg-white border border-transparent rounded xl:px-4 px-2"
    >
      <header class="flex justify-between items-center h-8">
        <h1 class="text-lg font-semibold">Accessoirs</h1>
        <router-link
          class="text-primary text-sm font-semibold"
          :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </header>
      <div class="flex flex-wrap">
        <product-card
          v-for="i in 4"
          :key="i"
          imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572990352299"
          :price="160000"
          name="Frandiscount Apple MacBook Air 2017"
        ></product-card>
      </div>
    </section>
  </div>
</template>

<script>
import VCaroussel from "@/components/VCaroussel.vue";
import VCarousselItem from "@/components/VCarousselItem.vue";
import VHscroll from "@/components/VHscroll.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "Home",
  components: {
    VCaroussel,
    VCarousselItem,
    VHscroll,
    ProductCard
  }
};
</script>
