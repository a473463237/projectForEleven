import Axios from './axios.js'
let api = {
    // 添加一个学生信息
    addStudent(params) {
        return Axios.get('/api/student/addStudent',params);
    },
    // 修改一个学生信息
    updateStudent(params) {
        return Axios.get('/api/student/updateStudent',params);
    },
    // 删除一个学生信息
    delBySno(params) {
        return Axios.get('/api/student/delBySno',params);
    },
    // 按关键字查询学生信息
    searchStudent(params) {
        return Axios.get('/api/student/searchStudent',params);
    },  
     // 按页查询学生信息
     findByPage(params) {
        //  console.log(params)
        return Axios.get('/api/student/findByPage',params);
    },
}

export default api