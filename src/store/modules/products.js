import axios from "axios";
import { SET_PRODUCTS, DELETE_PRODUCT, SET_PRODUCT } from "../mutation-types";
import { pick } from "lodash";

// initial state
const state = () => ({
  products: [],
  url: "http://localhost:3000/api/products/",
  product: {
    name: "",
    price: "",
    imageUrl: "",
    marque: "",
    fiche: "",
    details: "",
    category: ""
  },
  categories: [
    "telephones",
    "tablettes",
    "ordinateurs",
    "imprimantes",
    "electroniques"
  ]
});

//mutations
const mutations = {
  [SET_PRODUCTS](state, response) {
    state.products = response;
  },
  [SET_PRODUCT](state, response) {
    state.product = response;
  },
  [DELETE_PRODUCT](state, response) {
    let index = state.products.findIndex(p => p._id === response._id);
    if (index > -1) {
      state.products.splice(index, 1);
    }
  }
};

// actions
const actions = {
  async addProduct({ state }, payload) {
    try {
      const fd = new FormData();
      fd.append("imageUrl", payload.imageUrl, payload.imageUrl.name);
      const data = pick(payload, [
        "name",
        "price",
        "category",
        "marque",
        "fiche",
        "details"
      ]);
      for (const key in data) {
        fd.set(key, data[key]);
      }
      // eslint-disable-next-line no-unused-vars
      const response = await axios({
        method: "post",
        url: state.url,
        data: fd,
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },

  async getAllProducts({ commit, state }) {
    try {
      const response = await axios.get(state.url);
      commit("SET_PRODUCTS", response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async updateProduct({ state }, payload) {
    try {
      const data = pick(payload, [
        "name",
        "price",
        "category",
        "marque",
        "fiche",
        "details"
      ]);
      let fd = new FormData();
      if (typeof payload.imageUrl !== "string") {
        fd.append("imageUrl", payload.imageUrl, payload.imageUrl.name);
        for (const key in data) {
          fd.set(key, data[key]);
        }
      } else {
        fd = null;
        data.imageUrl = payload.imageUrl;
      }
      console.log(data, fd);
      // eslint-disable-next-line no-unused-vars
      const response = await axios({
        method: "put",
        url: state.url + payload._id,
        data: fd ?? data
      });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProduct({ state, commit }, id) {
    try {
      const response = await axios.delete(state.url + id);
      commit("DELETE_PRODUCT", response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async getProduct({ state, commit }, id) {
    try {
      const response = await axios.get(state.url + id);
      commit("SET_PRODUCT", response.data);
    } catch (error) {
      console.log(error);
    }
  }
};

//getters
const getters = {
  getProductByCategory: state => category => {
    return state.products.filter(
      p => p.category.toUpperCase() === category.toUpperCase()
    );
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
