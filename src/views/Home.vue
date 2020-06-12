<template>
  <div class="home xl:space-y-5 space-y-3 py-5">
    <v-caroussel class="xl:mx-12 mx-0" :slides="2" :indic="true" :nav="true">
      <v-caroussel-item :id="1">
        <div class="h-full bg-red-200 text-center">Annonce 1</div>
      </v-caroussel-item>
      <v-caroussel-item :id="2">
        <div class="h-full bg-yellow-100 text-center">Annonce 2</div>
      </v-caroussel-item>
    </v-caroussel>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded h-52-screen xl:px-4 px-2"
    >
      <v-hscroll titre="Recommandé pour vous">
        <div v-for="i in 40" :key="i" class="h-full hover:shadow text-transparent">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Repellendus,Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloribus repellat ipsum pariatur architecto
        </div>
      </v-hscroll>
    </section>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded h-52-screen xl:px-4 px-2"
    >
      <header class="flex justify-between items-center h-8">
        <h1 class="text-lg font-semibold">Ordinateurs et Imprimantes</h1>
        <router-link
          class="text-primary text-sm font-semibold"
          :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </header>
    </section>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded h-52-screen xl:px-4 px-2"
    >
      <header class="flex justify-between items-center h-8">
        <h1 class="text-lg font-semibold">Tablettes</h1>
        <router-link
          class="text-primary text-sm font-semibold"
          :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </header>
    </section>
    <section
      class="shadow xl:mx-12 mx-0 bg-white border border-transparent rounded h-52-screen xl:px-4 px-2"
    >
      <header class="flex justify-between items-center h-8">
        <h1 class="text-lg font-semibold">Accessoirs</h1>
        <router-link
          class="text-primary text-sm font-semibold"
          :to="{ name: 'Home' }"
          >voir plus</router-link
        >
      </header>
    </section>
  </div>
</template>

<script>
import VCaroussel from "@/components/VCaroussel.vue";
import VCarousselItem from "@/components/VCarousselItem.vue";
import VHscroll from "@/components/VHscroll.vue";

export default {
  name: "Home",
  components: {
    VCaroussel,
    VCarousselItem,
    VHscroll
  }
};
</script>
