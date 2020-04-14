import Vue from 'vue'
import VueRouter from 'vue-router'
import stuList from '@/views/stuList.vue'
import addList from '@/views/addList.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path:'/stuList',
      name:'stuList',
      component:stuList
    },
    {
      path:'/addList',
      name:'addList',
      component:addList
    },
    {
      path:'*',
      redirect:'/stuList'
    }
  ]

const router = new VueRouter({
  mode:'history',
  routes,
  linkExactActiveClass:'active'
})

export default router
