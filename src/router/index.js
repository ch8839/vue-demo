import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/pages/index'
import login from '@/pages/login/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/',
      component: index,
      name: 'Index'    
    },
    {
      path: '/todolist1',
      name: 'Todolist1',
      component: () => import('@/pages/todolist1/index')
    },
    {
      path: '/todolist2',
      name: 'Todolist2',
      component: () => import('@/pages/todolist2')
    }
  ]
})
