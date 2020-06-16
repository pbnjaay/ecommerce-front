<template>
  <footer class="hidden mt-auto xl:flex flex-col bg-dark py-4 space-y-10 px-12">
    <span class="border text-white rounded self-start font-bold">
      CHON&trade;
    </span>
    <div class="text-sm flex justify-between">
      <div class="space-y-2">
        <span class="font-bold text-white uppercase">Service client</span>
        <ul class="text-gray-400 text-xs">
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Aide & FAQ</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Contactez nous</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Methode de paiement</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Methode de livraison</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Politique de retour</router-link
            >
          </li>
        </ul>
      </div>
      <div class="space-y-2">
        <span class="font-bold text-white uppercase">A propos</span>
        <ul class="text-gray-400 text-xs">
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Qui sommes-nous</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Conditions Générales d'utilisation</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Carrières</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Propriété intellectuelle</router-link
            >
          </li>
          <li>
            <router-link
              class="focus:text-white hover:text-white transition duration-150"
              :to="{ name: 'Home' }"
              >Politique de Confidentialité</router-link
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col space-y-4">
        <span class="font-bold text-white uppercase">MODES DE PAIEMENT</span>
        <router-link
          class="flex items-center focus:text-white hover:text-white transition duration-150 text-gray-400"
          :to="{ name: 'Home' }"
        >
          <svg class="w-4 h-4 mr-2 cursor-pointer stroke-current fill-current">
            <use xlink:href="@/assets/svg/sprite.svg#cash-outline" />
          </svg>
          Payements
        </router-link>
      </div>
      <div class="space-y-4">
        <span class="font-bold text-white uppercase">RETROUVEZ-NOUS SUR</span>
        <div class="text-gray-400 text-xs space-y-1">
          <router-link
            class="flex items-center focus:text-white hover:text-white transition duration-150"
            :to="{ name: 'Home' }"
          >
            <svg class="mr-2 w-4 h-4 cursor-pointer fill-current">
              <use xlink:href="@/assets/svg/sprite.svg#logo-twitter" />
            </svg>
            Twitter
          </router-link>
          <router-link
            class="flex items-center focus:text-white hover:text-white transition duration-150"
            :to="{ name: 'Home' }"
          >
            <svg class="mr-2 w-4 h-4 cursor-pointer fill-current">
              <use xlink:href="@/assets/svg/sprite.svg#logo-facebook" />
            </svg>
            Facebook
          </router-link>
          <router-link
            class="flex items-center focus:text-white hover:text-white transition duration-150"
            :to="{ name: 'Home' }"
          >
            <svg class="mr-2 w-4 h-4 cursor-pointer fill-current">
              <use xlink:href="@/assets/svg/sprite.svg#logo-instagram" />
            </svg>
            Instagram
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped></style>
