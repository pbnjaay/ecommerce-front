<template>
  <div class="flex space-x-4 hover:bg-gray2 space-x-2">
    <div class="w-1/5">
      <img
        srcset="https://frandiscount.com/wp-content/uploads/2020/03/Apple-MacBook-Air-MQD32FN-A-2017-133-Intel-Core-i5-8Go-RAM-128Go-SSD-Argent-4.jpg"
        :alt="name"
      />
    </div>
    <div>
      <h3 class="text-xs font-light clamp-1">
        {{ name | titleCase }}
      </h3>
      <p class="xl:text-xs">{{ price | currency("FCFA") }}</p>
    </div>
  </div>
</template>

<script>
import productMixin from "@/mixins/productMixin.js";
export default {
  mixins: [productMixin]
};
</script>

<style lang="scss"></style>
