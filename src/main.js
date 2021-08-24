import { createApp, VueElement } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";
import "@fortawesome/fontawesome-free/js/all";

// const firebaseConfig = {
//   apiKey: "AIzaSyC6nQM0ffQyJ6K__T7Fqwj6IkCdwONwUfg",
//   authDomain: "ace-scan.firebaseapp.com",
//   projectId: "ace-scan",
//   storageBucket: "ace-scan.appspot.com",
//   messagingSenderId: "952391748144",
//   appId: "1:952391748144:web:1d65ad8c7e4fb45585fbf5",
//   measurementId: "G-58TBGHGCHJ",
// };

// firebase.initializeApp(firebaseConfig);

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
