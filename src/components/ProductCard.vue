<template>
  <div
    class="w-1/3 md:w-1/6 overflow-hidden border-gray-200 border rounded shadow"
  >
    <img class="w-full" :srcset="imageUrl" :alt="name" />
    <div class="p-2">
      <h3 class="text-base clamp-1">
        {{ name }}
      </h3>
      <p class="text-lg font-semibold">{{ price }} FCFA</p>
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
