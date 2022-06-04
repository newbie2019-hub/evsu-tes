import API from '../../base/'

export default {
    namespaced: true,
    state: {
      summary: [],
    },
    getters: {

    },
    mutations: {
       SET_SUMMARY(state, data) {
           state.summary = data
       },
    },
    actions: {
       async getSummary({ commit }) {
         const res = await API.get(`/admin/summary`).then(res => {
             commit('SET_SUMMARY', res.data)
             return res;
         }).catch(err => {
             return err.response
         })

         return res;
       },
    },
}