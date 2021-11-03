import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "@fortawesome/fontawesome-free/js/all.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoVp7K77yr-D3319ryru0hSyJ1Wz0a0tI",
  authDomain: "vuefs-prod-5ecb9.firebaseapp.com",
  projectId: "vuefs-prod-5ecb9",
  storageBucket: "vuefs-prod-5ecb9.appspot.com",
  messagingSenderId: "439471976083",
  appId: "1:439471976083:web:0731b8ecd55c7786c42766",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app.firestore();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
