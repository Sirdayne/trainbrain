import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TestCountNumbers from '@/components/TestCountNumbers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TestCountNumbers',
      component: TestCountNumbers
    }
  ]
})
