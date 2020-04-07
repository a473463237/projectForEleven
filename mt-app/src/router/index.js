import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import Index from '@/page/index.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: defaultPage,
            redirect: '/index',
            children: [{
                    path: '/index',
                    name: 'Index',
                    component: Index
                },
                {
                    path: '/changeCity',
                    name: 'changeCity',
                    component: () => {
                        return import ('@/page/changeCity.vue')
                    }
                },
                {
                    path: '/s/:name',
                    name: 'goods',
                    component: () => {
                        return import ('@/page/goodsList.vue')
                    }
                },
                {
                    path: '/detail/:id',
                    name: 'Detail',
                    component: () => {
                        return import ('@/page/detail.vue')
                    }
                },

            ]
        },

        {
            path: '/blank',
            name: 'blank',
            component: () => {
                return import ('@/layout/blank.vue')
            },
            children: [{
                    path: 'login',
                    name: 'login',
                    component: () => {
                        return import ('@/page/login.vue')
                    }
                },
                {
                    path: 'register',
                    name: 'register',
                    component: () => {
                        return import ('@/page/register.vue')
                    }
                }
            ]
        }

    ]
})