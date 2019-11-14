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
      axios.get('/apis/api/home/users')
              .then((res)=>{
                console.log(res.data)
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
