import api from '@/api/index.js';
export default {
    namespaced: 'page',
    state: {
        page: 1,
        size: 4,
        cont: 0,
        stuList: [],
        keyword:""
    },
    mutations: {
        setPage(state, page) {
            state.page = page;
        },
        setCont(state, cont) {
            state.cont = cont;
        },
        
        setStuList(state, obj) {
            state.stuList = obj;
        },
        setKeyword(state,value){
            state.keyword = value;
        }
    },
    actions: {
        getPage({ commit }, page) {
            commit('setPage', page);
        },
        getStuList({ commit }, obj) {
            api.findByPage(obj.page, obj.size).then(res => {
                commit('setStuList', res.data.data.findByPage);
                commit('setCont', res.data.data.cont);
            });
        },
        searchKeywords({commit},obj){
            api.searchKeywords(obj).then((res)=>{
                commit('setStuList', res.data.data.searchList);
                commit('setCont', res.data.data.cont);
            });
        }
        
    }
}