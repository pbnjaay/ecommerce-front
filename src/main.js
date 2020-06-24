import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/sass/tailwind.scss";
import titleCase from "@/filters/titleCase.js";
import currency from "@/filters/currency.js";
Vue.config.productionTip = false;
Vue.filter("titleCase", titleCase);
Vue.filter("currency", currency);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
