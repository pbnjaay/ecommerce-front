<template>
  <div
    class="flex xl:flex-row justify-center flex-col xl:space-x-2 space-y-3 xl:mx-12 space-y-2 xl:py-4 py-2"
  >
    <div class="xl:w-3/4 px-4">
      <div class="flex flex-col space-y-2">
        <h1 class="text-2xl font-bold">
          Panier<span class="text-sm font-normal text-gray-600">
            (5 articles)</span
          >
        </h1>
        <div
          class="xl:flex head font-semibold text-gray-600 pb-3 hidden text-sm"
        >
          <div class="w-2/5 uppercase">article</div>
          <div class="w-10p">quantité</div>
          <div class="w-20p">prix unitaire</div>
          <div class="w-20p">sous total</div>
          <div class="w-10p">supprimer</div>
        </div>
      </div>
      <div class="flex flex-col space-y-1 xl:divide-y divide-gray2">
        <div
          v-for="i in 5"
          :key="i"
          class="flex bg-white item h-20 px-4 shadow"
        >
          <div class="w-2/5 flex items-center py-2 space-x-3">
            <img
              class="h-full"
              src="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
              alt=""
            />
            <div class="flex justify-between">
              <h2 class="font-semibold">MacBook Air 2020</h2>
            </div>
          </div>
          <div class="w-10p flex items-center justify-center font-bold">
            <input
              class="w-10 pl-1 focus:outline-none border appearance-none"
              type="number"
              required
              name="stock"
              label="Stock"
              id="stock"
              max="9"
              min="1"
              v-model="stock"
            />
          </div>
          <div class="w-20p flex items-center justify-center">
            2 500 FCFA
          </div>
          <div
            class="w-20p flex items-center justify-center text-primary font-semibold"
          >
            5 000 FCFA
          </div>
          <div class="w-10p flex items-center justify-center ">
            <button
              class="flex items-center space-x-2 text-gray-600 focus:outline-none text-xs uppercase"
            >
              <svg class="w-4 h-4 cursor-pointer stroke-current mr-2">
                <use xlink:href="@/assets/svg/sprite.svg#trash-outline" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col space-y-3">
      <h1 class="text-2xl font-bold">Total:</h1>
      <h2 class="text-2xl text-primary font-bold">200 000 FCFA</h2>
      <v-button>Passer a la caisse</v-button>
      <button
        class="font-semibold px-8 py-2 rounded text-primary bg-white shadow-md uppercase cursor-pointer focus:outline-none text-sm"
      >
        POURSUIVRE VOS ACHATS
      </button>
    </div>
  </div>
</template>
<script>
import VButton from "@/components/VButton.vue";
export default {
  data() {
    return {
      stock: 1
    };
  },
  components: {
    VButton
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
