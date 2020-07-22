<template>
  <router-link
    :to="{ name: 'ProductDetails', params: { slug: slug } }"
    v-if="imageUrl"
    class="pro flex flex-col justify-center items-center w-1/2 p-3 xl:hover:shadow-md xl:w-1/6 overflow-hidden flex-shrink-0 cursor-pointer text-center h-full"
  >
    <div class="w-full">
      <img :srcset="imageUrl" :alt="name" />
    </div>
    <div class="w-full">
      <h3 class="text-sm clamp-1 text-gray-800">
        {{ name | titleCase }}
      </h3>
      <p class="font-medium text-base">
        {{ price | currency("FCFA") }}
      </p>
    </div>
  </router-link>
</template>
<script>
import productMixin from "@/mixins/productMixin.js";
export default {
  mixins: [productMixin],
  props: {
    slug: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.pro {
  scroll-snap-align: start;
}
</style>
