import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import "@/assets/sass/tailwind.scss";
import titleCase from "@/filters/titleCase.js";
import currency from "@/filters/currency.js";
import focus from "@/directives/focus.js";
Vue.config.productionTip = false;
Vue.filter("titleCase", titleCase);
Vue.filter("currency", currency);
Vue.directive("focus", focus);
Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount("#app");
