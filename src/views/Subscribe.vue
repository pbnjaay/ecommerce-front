<template>
  <div
    class="flex flex-col xl:my-5 my-2 xl:mx-auto justify-center xl xl:w-1/3 w-full items-center space-y-2"
  >
    <div
      class="flex flex-col w-full bg-white px-4 py-2 space-y-6 shadow rounded"
    >
      <div
        class="h-16 flex items-center justify-center text-primary text-2xl font-semibold"
      >
        S'inscrire
      </div>
      <form class="flex flex-col space-y-4">
        <v-input
          type="text"
          required
          name="nom"
          label="nom"
          id="nom"
          v-model="nom"
        />
        <v-input
          type="text"
          required
          name="prenom"
          label="prenom"
          id="prenom"
          v-model="prenom"
        />
        <v-input
          type="email"
          required
          autocomplete="off"
          name="email"
          label="Email"
          id="email"
          v-model="email"
        />
        <v-input
          type="password"
          required
          name="pwd"
          label="Mot de passe"
          id="pwd"
          v-model="pwd"
        />
        <v-button>Inscription</v-button>
      </form>
      <hr class="sep text-gray-400 w-full h-px text-center" />
      <button class=" flex justify-center focus:outline-none">
        <span class="flex items-center">
          <svg class="mr-2 w-4 h-4 cursor-pointer fill-current">
            <use xlink:href="@/assets/svg/sprite.svg#logo-facebook" />
          </svg>
          S'inscrire avec Facebook
        </span>
      </button>
    </div>
    <div
      class="flex bg-white w-full justify-center p-4 font-light shadow rounded"
    >
      Vous avez deja un compte ?
      <router-link
        :to="{ name: 'Login' }"
        class="ml-2 text-primary font-semibold"
        >Connetez-vous</router-link
      >
    </div>
  </div>
</template>

<script>
import VInput from "@/components/VInput.vue";
import VButton from "@/components/VButton.vue";
export default {
  data() {
    return {
      nom: "",
      prenom: "",
      email: "",
      pwd: ""
    };
  },
  components: {
    VInput,
    VButton
  }
};
</script>

<style lang="scss" scoped></style>
