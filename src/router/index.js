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
    path: "/content",
    name: "Content",
    component() {
      return import(/* webpackChunkName: "content" */ "../views/Content.vue");
    },
  },
  {
    path: "/attendance",
    name: "Attendance",
    component() {
      return import(
        /* webpackChunkName: "attendance" */ "../views/Attendance.vue"
      );
    },
  },
  {
    path: "/register",
    name: "Register",
    component() {
      return import(/* webpackChunkName: "register" */ "../views/Register.vue");
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component() {
      return import(/* webpackChunkName: "setting" */ "../views/Settings.vue");
    },
  },
];

let isLoggedIn = false;

async function verify() {
  try {
    await new Promise((resolve, reject) =>
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            // Yes User is signed in.
            isLoggedIn = true;
            resolve("User is there");
          } else {
            // No user is not signed in.
            isLoggedIn = false;
            reject("There is no user");
          }
        },
        // Prevent console errors
        (error) => reject(error)
      )
    );
    return true;
  } catch (error) {
    return false;
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some((record) => record.meta.requiresAuth);

  const isAuthenticated = verify();

  console.log(isLoggedIn);

  if (requireAuth && !isLoggedIn) {
    next("Login");
  } else {
    next();
  }
});

export default router;
