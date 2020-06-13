import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { products: null },
  mutations: {
    setProduct(state, response) {
      state.products = response;
    }
  },
  actions: {
    getProduct({ commit }) {
      axios
        .get("http://localhost:3000/api/products")
        .then(response => commit("setProduct", response.data));
    }
  },
  modules: {}
});