import axios from '../axios.js';
var api = null;
export default api = {
    findByPage(page,size){
        return axios.get('/api/student/findByPage',{
            params:{
                page,
                size
            }
        });
    },
    updateStu(stuObj){
        return axios.get('/api/student/updateStudent',{
            params:{
                ...stuObj
            }
        })
    },
    deleteStu(sNo){
        return axios.get("/api/student/delBySno",{
            params:{
                sNo
            }
        });
    },
    addStu(stuObj){
        return axios.get("/api/student/addStudent",{
            params:{
                ...stuObj
            }
        });
    },
    searchKeywords(keyObj){
        return axios.get("/api/student/searchStudent",{
            params:{
                ...keyObj
            }
        });
    }
};
