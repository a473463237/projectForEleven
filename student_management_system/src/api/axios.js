import axios from 'axios'

// 全局的 axios 默认值
axios.defaults.baseURL = 'http://api.duyiedu.com/'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  config.params = {
    ...config.params,
    // appkey: 'zhangyuanzhi_1554124967737'
    appkey: 'xiaozhi_1586774166367'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
