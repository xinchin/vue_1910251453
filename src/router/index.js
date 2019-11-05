import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DemoElementUI from '@/Demo/DemoElementUI'
import DemoSwiper from '@/Demo/DemoSwiper'
import DemoDataShare from '@/Demo/DemoDataShare'
import child1 from '@/Demo/DemoDataShare/child1'
import child2 from '@/Demo/DemoDataShare/child2'
import DemoParent from '@/Demo/DempParent'
import DemoVuex from '@/Demo/DemoVuex'
import DemoAxios from '@/Demo/DemoAxios'

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
  }, {
    path: '/demodatashare',
    name: 'demodatashare',
    component: DemoDataShare,
    children: [{
      path: 'child1',
      component: child1
    }, {
      path: 'child2',
      component: child2
    }]
  }, {
    path: '/demoParent',
    name: 'demoParent',
    component: DemoParent
  }, {
    path: '/demovuex',
    name: 'demovuex',
    component: DemoVuex
  }, {
    path: '/demoAxios',
    name: 'demoaxios',
    component: DemoAxios
  }]
})
