<template>
  <div class="flex flex-col xl:py-4 py-2 xl:mx-12 space-y-4">
    <div class="flex xl:flex-row flex-col space-y-3 xl:space-y-0 xl:space-x-4">
      <div
        class="flex xl:w-1/2 bg-white items-center justify-center space-x-4 flex-shrink-0 shadow px-4 border-transparent border rounded"
      >
        <div class="flex xl:w-4/5 self-start xl:sticky pos">
          <div class="relative">
          <v-fab class="absolute fab" />
            <img
              src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567304928359"
              alt=""
            />
            <div class="flex flex-col space-y-3 absolute item">
              <div
                v-for="i in 4"
                :key="i"
                class="w-12 h-12 border border-gray-200 hover:border-primary focus:border-primary"
              >
                <img
                  src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567304928359"
                  alt=""
                />
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
            Iphone 11 Pro 2020 Mémoire vive (RAM) - 4Go Stockage - 256 Go Double
            SIM - Intégrée
          </h1>
          <div class="xl:text-base text-sm font-light">
            Marque: <router-link :to="{ name: 'Home' }">Apple</router-link> |
            <router-link :to="{ name: 'Home' }">
              Produits similaires par Apple
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
          <p class="xl:text-2xl text-xl font-semibold">800 500 FCFA</p>
          <v-button :icon="true" class="flex items-center justify-center py-3">
            <svg class="w-4 h-4 mr-2 cursor-pointer stroke-current">
              <use xlink:href="@/assets/svg/sprite.svg#cart-outline" />
            </svg>
            Ajouter au panier
          </v-button>
        </div>
        <v-section titre="Details">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
          quibusdam non repellat velit impedit quia dolores excepturi hic odit,
          ratione aperiam numquam quos in dolorem repellendus aspernatur,
          distinctio ab ut! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Tenetur, ullam velit debitis, explicabo nostrum corporis maxime,
          non sed quo exercitationem asperiores quos rerum omnis. Inventore ad
          esse soluta amet quisquam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus, nesciunt. Soluta eaque voluptatum laborum
          tempora, nesciunt quasi ad dolor repellendus, alias impedit
          repudiandae unde earum quod quidem delectus qui reiciendis.
        </v-section>
        <v-section titre="Fiche technique">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem,
          quibusdam non repellat velit impedit quia dolores excepturi hic odit,
          ratione aperiam numquam quos in dolorem repellendus aspernatur,
          distinctio ab ut! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Tenetur, ullam velit debitis, explicabo nostrum corporis maxime,
          non sed quo exercitationem asperiores quos rerum omnis. Inventore ad
          esse soluta amet quisquam? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ducimus, nesciunt. Soluta eaque voluptatum laborum
          tempora, nesciunt quasi ad dolor repellendus, alias impedit
          repudiandae unde earum quod quidem delectus qui reiciendis. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          blanditiis recusandae sequi voluptatem minus consequatur eaque, animi
          placeat doloremque eius fugit, doloribus suscipit enim nulla,
          inventore a nobis aut molestias.
        </v-section>
      </div>
    </div>
    <v-section titre="Produits similaires" :vp="true">
      <product-card
        v-for="i in 6"
        :key="i"
        imageUrl="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MWYK2?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1567304928359"
        :price="3600000"
        name="Iphone 11 pro 2020"
      ></product-card>
    </v-section>
  </div>
</template>

<script>
import VButton from "@/components/VButton.vue";
import VSection from "@/components/VSection.vue";
import ProductCard from "@/components/ProductCard.vue";
import VFab from "@/components/VFab.vue";
export default {
  components: {
    VButton,
    VSection,
    ProductCard,
    VFab
  }
};
</script>

<style lang="scss" scoped>
.router-link-active {
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
