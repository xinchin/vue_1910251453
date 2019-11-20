<template>
  <div>

    <button @click="testAction">click</button>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  methods:{
    testAction(){
      // axios.get('/apis/api/home/users')
      axios.get('http://localhost:8000/test')
              .then((res)=>{
                console.log(res)
              })
              .catch((err)=>{
                console.log(err);
              })
    }
  }
}
</script>
<style scoped>

</style>
