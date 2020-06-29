import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/subscribe",
    name: "Subscribe",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Subscribe.vue")
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: () =>
      import(/* webpackChunkName: "shoppingCart" */ "../views/ShoppingCart.vue")
  },
  {
    path: "/check-out",
    name: "CheckOut",
    component: () =>
      import(/* webpackChunkName: "checkOut" */ "../views/CheckOut.vue")
  },
  {
    path: "/my-orders",
    name: "MyOrders",
    component: () =>
      import(/* webpackChunkName: "myOrders" */ "../views/MyOrders.vue")
  },
  {
    path: "/order-success",
    name: "OrderSuccess",
    component: () =>
      import(/* webpackChunkName: "orderSuccess" */ "../views/OrderSuccess.vue")
  },
  {
    path: "/details/:slug",
    name: "ProductDetails",
    component: () =>
      import(
        /* webpackChunkName: "productDetails" */ "../views/ProductDetails.vue"
      )
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: () =>
      import(/* webpackChunkName: "adminProduct" */ "../views/AdminProduct.vue")
  },
  {
    path: "/admin/order",
    name: "AdminOrder",
    component: () =>
      import(/* webpackChunkName: "adminOrder" */ "../views/AdminOrder.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
