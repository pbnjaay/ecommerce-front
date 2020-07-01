<template>
  <div class="flex flex-col space-y-4 items-center">
    <button
      class="rounded-full flex justify-center items-center shadow-md focus:outline-none text-white w-12 h-12"
      @click="showMenu"
      aria-hidden="true"
    >
      <svg class="w-5 h-5 cursor-pointer stroke-current text-dark">
        <use xlink:href="@/assets/svg/sprite.svg#add-outline" />
      </svg>
    </button>
    <transition name="drop">
      <div v-if="isShow" class="flex flex-col space-y-3">
        <router-link
          class="flex items-center focus:text-white hover:text-white transition duration-150"
          :to="{ name: 'Home' }"
        >
          <svg class="mr-2 w-5 h-5 cursor-pointer fill-current text-black">
            <use xlink:href="@/assets/svg/sprite.svg#logo-twitter" />
          </svg>
        </router-link>
        <router-link
          class="flex items-center focus:text-white hover:text-white transition duration-150"
          :to="{ name: 'Home' }"
        >
          <svg class="mr-2 w-5 h-5 cursor-pointer fill-current text-black">
            <use xlink:href="@/assets/svg/sprite.svg#logo-facebook" />
          </svg>
        </router-link>
        <router-link
          class="flex items-center focus:text-white hover:text-white transition duration-150"
          :to="{ name: 'Home' }"
        >
          <svg class="mr-2 w-5 h-5 cursor-pointer fill-current text-black">
            <use xlink:href="@/assets/svg/sprite.svg#logo-instagram" />
          </svg>
        </router-link>
      </div>
    </transition>
  </div>
</template>

<script>
import showMenu from "@/mixins/showMenuMixin.js";
export default {
  mixins: [showMenu]
};
</script>

<style></style>
