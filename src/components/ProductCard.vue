<template>
  <div
    v-if="imageUrl"
    class="pro flex flex-col justify-center items-center w-1/2 xl:w-1/6 overflow-hidden flex-shrink-0 cursor-pointer text-center xl:text-left"
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
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    imageUrl: {
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
