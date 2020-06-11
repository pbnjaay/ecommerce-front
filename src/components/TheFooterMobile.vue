<template>
  <footer
    class="xl:hidden flex bg-dark text-gray-400 text-xs py-4 px-5 space-x-6 justify-center"
  >
    <router-link class="uppercase text-xs" :to="{ name: 'Home' }"
      >Service client</router-link
    >
    <router-link class="uppercase text-xs" :to="{ name: 'Home' }"
      >A PROPOS</router-link
    >
    <router-link class="uppercase text-xs" :to="{ name: 'Home' }"
      >Mode de paiement</router-link
    >
    <router-link class="uppercase text-xs" :to="{ name: 'Home' }"
      >Aide</router-link
    >
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
