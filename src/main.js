// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//  一次引入 element-ui
// import ElementUI from 'element-ui';

// 按需引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Link } from 'element-ui';

import App from './App'
import router from './router'

// Vue.use(ElementUI);

Vue.use(Button)
Vue.use(Link)
  // or
  // Vue.component(Button.name, Button);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})