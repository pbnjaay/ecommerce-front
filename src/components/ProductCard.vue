<template>
  <div
    v-if="imageUrl"
    class="pro flex flex-col justify-center items-center w-1/2 p-3 xl:transform xl:hover:scale-105 duration-200 xl:hover:shadow-md xl:w-1/6 overflow-hidden flex-shrink-0 cursor-pointer text-center xl:text-left"
  >
    <img class="w-full" :srcset="imageUrl" :alt="name" />
    <div>
      <h3 class="xl:text-base text-sm clamp-1">
        {{ name }}
      </h3>
      <p class="xl:text-base text-sm font-medium">{{ price }} FCFA</p>
    </div>
  </div>
</template>
<script>
import productMixin from "@/mixins/productMixin.js";
export default {
  mixins: [productMixin]
};
</script>
<style lang="scss" scoped>
.pro {
  scroll-snap-align: start;
}
</style>
