import API from '../../base/'

export default {
    namespaced: true,
    state: {
        edit_update: {
            title: '',
            post_content: '',
            post_excerpt: '',
        },
        view_update: {
            title: '',
            post_content: '',
            post_excerpt: '',
        },
        updates: {
            data: []
        },
        drawer: false,
    },
    getters: {

    },
    mutations: {
        SET_UPDATES(state, data) {
            state.updates = data
        },

        SET_EDIT_UPDATE(state, { data }) {
            state.edit_update = data
        },
        SET_VIEW_UPDATE(state, { data }) {
            state.view_update = data
        },
        SET_DRAWER_STATE(state, data){
            state.drawer = !state.drawer
        }
    },
    actions: {
        async incrementView({ commit }, id) {
            const res = await API.post(`/user/view/post/${id}`).then(res => {
                commit('SET_UPDATES', res.data)
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async getUpdates({ commit }, page) {
            const res = await API.get(`/admin/post?page=${page}`).then(res => {
                commit('SET_UPDATES', res.data)
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async saveUpdate({ commit }, payload) {
            const res = await API.post('/admin/post', payload).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async editUpdate({ commit }, data) {
            const res = await API.put(`/admin/post/${data.id}`, data).then(res => {
                return res;
            }).catch(err => {
                return err.response;
            })

            return res;
        },
        async viewUpdate({ commit }, data) {
            const res = await API.get(`/admin/post/view/${data.id}`, data).then(res => {
                return res;
            }).catch(err => {
                return err.response;
            })

            return res;
        },
        async deleteUpdate({ commit }, payload) {
            const res = await API.delete(`/admin/post/${payload.id}`).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },

        //= USER UPDATE
        async getUserUpdates({ commit }, page) {
            const res = await API.get(`/user/post?page=${page}`).then(res => {
                commit('SET_UPDATES', res.data)
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },

    },
}