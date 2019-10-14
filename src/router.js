import Vue from 'vue'
import Router from 'vue-router'
import stuList from '@/views/StuList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path:'/stuList',
      name:'stuList',
      component: stuList
    },
    {
      path:'/addStu',
      name:'addStu',
      component:()=>import("@/views/AddStu.vue")
    },
    {
      path:'*',
      redirect:'/StuList'
    }
  ],
  linkExactActiveClass:'ExactActive'
})
