<template>
  <div>
    <h1>child1</h1>
     <!-- <input type="text" v-model="this.$parent.msg" @click="show()" name="" id="" > -->
     <input type="text" name="" id="" @click="show()">
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    show(){
      // console.log('click');
      this.$emit('show',{});
    }
  }
}
</script>
<style scoped>

</style>
