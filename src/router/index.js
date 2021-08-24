import { createRouter, createWebHashHistory } from "vue-router";
import firebase from "firebase";
import ItemView from "../views/ItemView.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component() {
      return import(
        /* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"
      );
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/item/:itemID",
    name: "Item",
    component: ItemView,
  },
  {
    path: "/about",
    name: "About",
    component() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/inventory",
    name: "Inventory",
    component() {
      return import(
        /* webpackChunkName: "inventory" */ "../views/Inventory.vue"
      );
    },
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component() {
      return import(/* webpackChunkName: "login" */ "../views/Login.vue");
    },
  },
  {
    path: "/register",
    name: "Register",
    component() {
      return import(/* webpackChunkName: "register" */ "../views/Register.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requiresAuth);

  const isAuthenticated = firebase.auth().currentUser;

  if (requireAuth && !isAuthenticated) {
    next("login");
  } else {
    next();
  }
});

export default router;
