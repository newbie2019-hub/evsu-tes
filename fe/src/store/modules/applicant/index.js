import API from '../../base/'

export default {
    namespaced: true,
    state: {
      applicants: [
       {
        info: {
         first_name: '', middle_name: '', last_name: '',
        }
       }
      ],
      selectedApplicant: [],
    },
    getters: {

    },
    mutations: {
       SET_APPLICANTS(state, data) {
           state.applicants = data
       },
       SET_VIEW_APPLICANT(state, data){
         state.selectedApplicant = data.data
       }
    },
    actions: {
        async exportData({ commit }, status) {
            const res = await API.get(`/admin/records/export?status=${status}`,{
                headers:
                {
                    'Content-Disposition': "attachment; filename=records.xlsx",
                    'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                },
                responseType: 'arraybuffer',
            }).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async moveApplicant({ commit }, data) {
            const res = await API.put(`/admin/applicant/move/${data.id}`).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async getApplicants({ commit }, {status, search}) {
            const res = await API.get(`/admin/applicant?status=${status}&search=${search}`).then(res => {
                commit('SET_APPLICANTS', res.data)
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async verifyEmail({commit}, data){
            const res = await API.post('user/applicant/email/verify', data).then(res => {
        
              return res;
            }).catch(error => {
              return error.response;
            })
        
            return res;
        },
        async saveApplicant({ commit }, payload) {
            const res = await API.post('/admin/applicant', payload).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },
        async deleteApplicant({ commit }, payload) {
            const res = await API.delete(`/admin/applicant/${payload.id}`).then(res => {
                return res;
            }).catch(err => {
                return err.response
            })

            return res;
        },

    },
}