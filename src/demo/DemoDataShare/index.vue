<template>
  <div>
    <h1>Parent</h1>
    <p>{{msg}}</p>
    <input type="text" v-model="msg" name="" id="">
    <hr>
    <router-link to="/demodatashare/child1">child1</router-link>
    <router-link to="/demodatashare/child2">child2</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name:'demodatashare',
  data(){
    return {
      msg:'parent message'
    }
  },
  methods:{
    show(){
      console.log('show');
    }
  }
}
</script>
<style scoped>

</style>
