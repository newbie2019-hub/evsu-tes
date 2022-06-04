import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import store from './store'
import router from './router'
import '@/assets/css/style.css'
Vue.config.productionTip = false

import vresponse from './store/response/index'
Vue.mixin(vresponse)

Vue.use(Toast, {
  position: "top-center",
  timeout: 4500,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
  maxToasts: 2,
  transition: "Vue-Toastification__fade",
  newestOnTop: true
});

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOaR27yo2yX4A0uWwbkK8tzISTrocTems",
  authDomain: "evsuchat-88018.firebaseapp.com",
  databaseURL: "https://evsuchat-88018-default-rtdb.firebaseio.com",
  projectId: "evsuchat-88018",
  storageBucket: "evsuchat-88018.appspot.com",
  messagingSenderId: "284760977948",
  appId: "1:284760977948:web:88af639d52278234f765d9"
};

initializeApp(firebaseConfig)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')



