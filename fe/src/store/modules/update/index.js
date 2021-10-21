import API from '../../base/'

export default {
  namespaced: true,
  state: {
    updates: {
     data: []
    },
  },
  getters: {
    
  },
  mutations: {
    SET_UPDATES(state, data) {
      state.updates = data
    },
  },
  actions: {
    async getUpdates({commit}, page){
      const res = await API.get(`/admin/post?page=${page}`).then(res => {
        commit('SET_UPDATES', res.data)
        return res;
      }).catch(err => {
        return err.response
      })

      return res;
    },
    async saveUpdate({commit}, payload){
      const res = await API.post('/admin/post', payload).then(res => {
        return res;
      }).catch(err => {
        return err.response
      })

      return res;
    },
    async deleteUpdate({commit}, payload){
      const res = await API.delete(`/admin/post/${payload.id}`).then(res => {
        return res;
      }).catch(err => {
        return err.response
      })

      return res;
    },
    
  },
}