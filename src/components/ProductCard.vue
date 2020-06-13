<template>
  <div
    class="pro w-1/2 xl:w-1/6 overflow-hidden self-auto flex-shrink-0 cursor-pointer"
  >
    <img class="w-full" :srcset="imageUrl" :alt="name" />
    <div class="p-2">
      <h3 class="xl:text-base clamp-1">
        {{ name }}
      </h3>
      <p class="xl:text-lg font-semibold">{{ price }} FCFA</p>
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
