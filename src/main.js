import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from "firebase";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyA3xnLmiBgCjEP2-4H6eoYwzCEzb013Dtw",
  authDomain: "global-hacks.firebaseapp.com",
  projectId: "global-hacks",
  storageBucket: "global-hacks.appspot.com",
  messagingSenderId: "837025333441",
  appId: "1:837025333441:web:06cd60135e12318f205440",
  measurementId: "G-TE88EDC9VR"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
