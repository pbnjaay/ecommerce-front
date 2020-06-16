<template>
  <footer
    class="xl:hidden mt-auto flex bg-dark text-gray-400 py-4 px-5 xl:space-x-6 space-x-3 justify-center"
  >
    <router-link class="uppercase text-xs font-light" :to="{ name: 'Home' }"
      >Service client</router-link
    >
    <router-link class="uppercase text-xs font-light" :to="{ name: 'Home' }"
      >A PROPOS</router-link
    >
    <router-link class="uppercase text-xs font-light" :to="{ name: 'Home' }"
      >Mode de paiement</router-link
    >
    <router-link class="uppercase text-xs font-light" :to="{ name: 'Home' }"
      >Aide</router-link
    >
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
