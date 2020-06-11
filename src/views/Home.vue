<template>
  <div class="home xl:space-y-5 space-y-3 pb-8">
    <v-caroussel :slides="2" :indic="true">
      <v-caroussel-item :id="1">
        <div class="h-full bg-red-200 text-center">Annonce 1</div>
      </v-caroussel-item>
      <v-caroussel-item :id="2">
        <div class="h-full bg-yellow-100 text-center">Annonce 2</div>
      </v-caroussel-item>
    </v-caroussel>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded p-2"
    >
      <h1 class="text-lg font-semibold">Recommandé pour vous</h1>
      <v-caroussel :slides="2" :nav="true" :timer="0">
        <v-caroussel-item :id="1">
          <div class="h-full"></div>
        </v-caroussel-item>
        <v-caroussel-item :id="2">
          <div class="h-full"></div>
        </v-caroussel-item>
      </v-caroussel>
    </section>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded h-52-screen p-2"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-lg font-semibold">Ordinateurs et Imprimantes</h1>
        <router-link class="text-primary text-sm" :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </div>
    </section>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded h-52-screen p-2"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-lg font-semibold">Tablettes</h1>
        <router-link class="text-primary text-sm" :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </div>
    </section>
  </div>
</template>

<script>
import VCaroussel from "@/components/VCaroussel.vue";
import VCarousselItem from "@/components/VCarousselItem.vue";

export default {
  name: "Home",
  components: {
    VCaroussel,
    VCarousselItem
  }
};
</script>
