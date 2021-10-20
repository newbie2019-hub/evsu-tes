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
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: false,
  icon: true,
  rtl: false,
  maxToasts: 3,
  transition: "Vue-Toastification__fade",
  newestOnTop: true
});

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
