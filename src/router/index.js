import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import firstPage from '@/components/firstPage'
import firstPageContent from '@/components/firstPageContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/firstPage',
      name: 'firstPage',
      component: firstPage,
      children: [
        {
          path: 'firstPageContent',
          name: 'firstPageContent',
          component: firstPageContent
        }
      ]
    }
  ]
})
