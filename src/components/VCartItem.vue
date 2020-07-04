<template>
  <div class="flex space-x-4 hover:bg-gray2 py-2 px-2 space-x-2">
    <div class="rounded-full w-1/5">
      <img
        srcset="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
        :alt="name"
      />
    </div>
    <div>
      <h3 class="text-xs clamp-1">
        {{ name | titleCase }}
      </h3>
      <p class="xl:text-base font-medium">{{ price | currency("FCFA") }}</p>
    </div>
  </div>
</template>

<script>
import productMixin from "@/mixins/productMixin.js";
export default {
  mixins: [productMixin]
};
</script>

<style></style>
