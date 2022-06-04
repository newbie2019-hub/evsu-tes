import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import updates from './modules/update'
import applicant from './modules/applicant'
import dashboard from './modules/dashboard'

Vue.use(Vuex);

export default new Vuex.Store({
 modules: {
  auth, updates, applicant, dashboard
 }
})