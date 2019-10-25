<template>
  <div>
    <h1>DemoElementUI</h1>
    <hr>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
    <hr>
    <div>
      <el-row>
        <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link>
      </el-row>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

//  一次引入 element-ui
// import ElementUI from 'element-ui';

// 按需引入 element-ui
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Link } from 'element-ui';

Vue.use(Button)
Vue.use(Link)

export default {
  name:'DemoElementUI',
  data(){
    return {

    }
  },
  components: {
    Button,
    Link
  }
}
</script>
<style scoped>

</style>>
