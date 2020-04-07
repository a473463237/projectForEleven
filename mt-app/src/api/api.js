import axios from '@/api/axios.js'

let api = {
    // src\components\Header
    getSearchHotWords() {
        // 查询最近热门搜索
        return axios.get('/api/meituan/header/searchHotWords.json')
    },
    getSearchList() {
        // 搜索框列表数据获取
        return axios.get('/api/meituan/header/search.json')
    },

    // src\components\Index
    getMenuList() {
        // 首页左侧导航条 导航数据
        return axios.get('/api/meituan/index/nav.json')
    },
    getResultsByKeywords() {
        // 首页下方（有格调内容区数据获取） 狠优惠数据用的这个
        return axios.get('/api/meituan/index/resultsByKeywords.json')
    },

    // src\components\changeCity
    getProvinceList() {
        // 获取省份列表
        return axios.get('/api/meituan/city/province.json')
    },
    getCityList() {
        // 获取城市列表接口  暂时没用到
        return axios.get('/api/meituan/city/cityList.json')
    },
    getHotCity() {
        // 获取热门城市
        return axios.get('/api/meituan/city/hot.json')
    },
    getRecents() {
        // 最近搜索城市
        return axios.get('/api/meituan/city/recents.json')
    },
    getCurPosition() {
        // 获取当前位置信息
        return axios.get('/api/meituan/city/getPosition.json')
    },
    getSearch() {
        // 搜索框列表数据获取

    },

    // src\components\goodsList
    getGoodsList() {
        //   产品展示列表数据获取
        return axios.get('/api/meituan/list/goodsList.json')
    },
    getRecommend() {
        // 推荐产品列表  图片路径接口里面不对，还有score的数据类型应该是number
        return axios.get('/api/meituan/list/recommend.json')
    },
    getClassify() {
        // 获取分类列表
        return axios.get('/api/meituan/list/classify.json')
    },
    getAreaList() {
        // 获取区域列表  捕获去了接口给的格式不对  还少括号
        return axios.get('/api/meituan/list/areaList.json')
    },

    // \src\page\login.vue
    getLogin(params) {
        // 获取区域列表  捕获去了接口给的格式不对  还少括号
        return axios.get('/api/meituan/login', params)
    },
    getRegister(params) {
        return axios.get('/api/meituan/register', params)
    },
    // \src\page\detail.vue
    getDetail() {
        return axios.get('/api/meituan/product/detail.json')
    }
}

export default api