import api from '@/api/index.js';
export default {
    namespaced: 'other',
    state: {
        showModal: false,
        editInfor: {},
        addInfor: {},
        acFlag: true
    },
    mutations: {

        setShowModal(state, flag) {
            state.showModal = flag;
        },
        setEditInfor(state, obj) {
            state.editInfor = obj;
        },
        setAddInfor(state, obj) {
            state.addInfor = obj;
        },
        setAcFlag(state, flag) {
            state.acFlag = flag;
        }
    },
    actions: {
        updateStu({ commit }, data) {
            return api.updateStu(data).then((res) => {
                if (res.data.status === "success") {
                    alert(res.data.msg);
                    commit("setShowModal", false);
                    return;
                } else {
                    alert(res.data.msg);
                }
            });
        },
        async deleteStu({ commit }, payload) {
            return await api.deleteStu(payload).then((res) => {
                if (res.data.status === "fail") {
                    alert(res.data.msg);
                    return res.data.msg;
                } else {
                    alert(res.data.msg);
                    return res.data.msg;
                }
            }).catch((res) => { console.log(res); });
        },
        async addStu({ commit }, payload) {
            return await api.addStu(payload).then((res) => {
                // console.log(res);
                if (res.data.status === "fail") {
                    alert(res.data.msg);
                    return res.data.msg;
                } else {
                    alert(res.data.msg);
                    return res.data.msg;
                }
            }).catch((res) => {
                console.log(res);
            });
        }
    }
}