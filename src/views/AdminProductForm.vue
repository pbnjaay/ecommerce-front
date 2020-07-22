<template>
  <div
    class="flex flex-col xl:space-y-3 space-y-2 xl:py-4 mx-auto py-2 xl:px-0 xl:w-3/4"
  >
    <h1 class="text-2xl font-bold">
      Ajouter un produit
    </h1>
    <div class="flex xl:flex-row flex-col xl:space-x-4 space-y-2 xl:space-y-0">
      <form
        class="flex flex-col space-y-4 px-4 py-2 bg-white rounded xl:w-3/4"
        @submit.prevent="save"
        enctype="multipart/form-data"
        id="form1"
        name="form1"
      >
        <div class="flex items-center space-x-2">
          <v-input
            type="text"
            required
            name="name"
            label="Nom Produit"
            id="name"
            v-model="product.name"
            class="flex-grow"
          />
          <div class="self-end">
            <input
              type="file"
              name="imageUrl"
              id="imageUrl"
              @change="onFileSelcted"
              ref="fileInput"
              accept="image/*
            required"
              class="hidden"
            />
            <v-button @click="$refs.fileInput.click()" type="button"
              >Selctionner image</v-button
            >
          </div>
        </div>
        <v-input
          type="number"
          required
          name="price"
          label="Prix Unitaire"
          id="price"
          v-model.number="product.price"
          min="1"
        />
        <v-input
          type="text"
          required
          name="marque"
          label="Marque"
          id="marque"
          v-model="product.marque"
        />
        <v-select
          required
          name="categorie"
          label="Categorie"
          id="categorie"
          v-model="product.category"
          :items="items"
        >
        </v-select>
        <v-textarea
          required
          name="details"
          label="Details"
          id="details"
          v-model="product.details"
        />
        <v-textarea
          required
          name="fiche"
          label="Fiche"
          id="fiche"
          v-model="product.fiche"
        />
        <div class="flex w-full space-x-4">
          <v-button type="submit">Enregister</v-button>
          <button
            class=" focus:outline-none border px-8 py-2 bg-white rounded uppercase font-semibold"
            type="button"
            @click="$router.go(-1)"
          >
            Retour
          </button>
        </div>
      </form>
      <div
        v-show="image"
        class="flex flex-col justify-center items-center p-3 xl:hover:shadow-md xl:w-1/4 overflow-hidden text-center h-full bg-white"
      >
        <div class="xl:w-full w-2/4" v-if="image">
          <img :src="image" alt="imageName" />
        </div>
        <div class="w-full">
          <h3 class="text-sm clamp-1 text-gray-800">
            {{ product.name | titleCase }}
          </h3>
          <p v-if="product.price" class="font-medium text-base">
            {{ product.price | currency("FCFA") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VInput from "@/components/VInput.vue";
import VButton from "@/components/VButton.vue";
import VTextarea from "@/components/VTextarea.vue";
import VSelect from "@/components/VSelect.vue";
// import VItem from "@/components/VItem.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("products");

export default {
  data() {
    return {
      id: this.$route.params.slug,
      imageName: "",
      productLocal: {
        name: "",
        price: "",
        imageUrl: null,
        marque: "",
        fiche: "",
        details: "",
        category: ""
      }
    };
  },
  components: {
    VInput,
    VButton,
    VTextarea,
    VSelect
    // VItem
  },
  methods: {
    ...mapActions(["addProduct", "updateProduct", "getProduct"]),
    save() {
      this.id
        ? this.updateProduct(this.product)
        : this.addProduct(this.product);
      this.$router.push({ name: "AdminProduct" });
    },
    onFileSelcted(e) {
      const name = e.target.files[0].name;
      if (name.lastIndexOf(".") <= 0) return alert("Invallid file");
      this.product.imageUrl = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageName = fileReader.result;
      });
      fileReader.readAsDataURL(this.product.imageUrl);
    }
  },
  computed: {
    ...mapState({
      productX: state => state.product,
      items: state => state.categories
    }),
    product() {
      return this.id ? this.productX : this.productLocal;
    },
    image() {
      if (this.id && !this.imageName) return this.productX.imageUrl;
      return this.imageName;
    }
  },
  created() {
    if (this.id) {
      this.getProduct(this.id);
    }
  }
};
</script>

<style></style>
