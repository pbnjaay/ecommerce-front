<template>
  <div
    v-if="imageUrl"
    class="pro flex flex-col justify-center items-center xl:transform duration-200 hover:scale-105 w-1/2 p-3 xl:hover:shadow-md xl:w-1/6 overflow-hidden flex-shrink-0 cursor-pointer text-center xl:text-left"
  >
    <div class="w-full">
      <img :srcset="imageUrl" :alt="name" />
    </div>
    <div>
      <h3 class="xl:text-base text-sm clamp-1">
        {{ name | titleCase }}
      </h3>
      <p class="xl:font-semibold text-base font-semibold">
        {{ price | currency("FCFA") }}
      </p>
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
