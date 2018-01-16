import Vue from 'vue'
import Router from 'vue-router'
import TestCountNumbers from '@/pages/TestCountNumbers'
import MainPage from '@/pages/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/numbers',
      name: 'TestCountNumbers',
      component: TestCountNumbers
    }
  ]
})
