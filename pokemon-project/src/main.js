import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from 'firebase/compat/app';

import './index.css';
import './assets/tailwind.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBgv-rniMwMIEo0DeQoQWACdHuEvhzQIBA",
  authDomain: "pokemon-project-755b9.firebaseapp.com",
  projectId: "pokemon-project-755b9",
  storageBucket: "pokemon-project-755b9.appspot.com",
  messagingSenderId: "954494745372",
  appId: "1:954494745372:web:3af9501d629b19be2818d9",
  measurementId: "G-J60MHQ9FX9"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
