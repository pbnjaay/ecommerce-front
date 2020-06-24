<template>
  <section class="shadow bg-white border border-transparent rounded px-2 py-2">
    <header class="flex justify-between items-center h-8 pb-2">
      <h2 class="xl:text-xl text-lg font-semibold">
        {{ titre }}
      </h2>
      <router-link
        v-if="vp"
        class="flex items-center text-primary text-xs uppercase font-semibold"
        :to="{ name: 'Home' }"
        >voir plus
        <svg class="w-4 h-4 cursor-pointer stroke-current">
          <use xlink:href="@/assets/svg/sprite.svg#chevron-forward-outline" />
        </svg>
      </router-link>
    </header>
    <div class="flex flex-wrap items-center xl:items-start pb-2 justify-center">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    titre: {
      type: String,
      required: true
    },
    vp: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style></style>
