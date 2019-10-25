import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DemoElementUI from '@/Demo/DemoElementUI'
import DemoSwiper from '@/Demo/DemoSwiper'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }, {
    path: '/demoElementUI',
    name: 'demoElementUI',
    component: DemoElementUI
  }, {
    path: '/demoSwiper',
    name: 'demoSwiper',
    component: DemoSwiper
  }]
})