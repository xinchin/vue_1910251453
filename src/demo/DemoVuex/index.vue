<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
  </div>
</template>
<script>

import {mapMutations, mapActions, mapState} from 'vuex'

export default {
  name:'demoVuex',

  data(){
    return {

    }
  },
  computed:{
    ...mapState({
      count:state=>{
        return state.app.count
      }
    }),
  },
  methods:{
    ...mapMutations(['increment','decrement']),
    ...mapActions(['myIncrement', 'myDecrement']),
    increment(){
      // this.$store.commit('increment');
      this.myIncrement();
    },
    decrement(){
      // this.$store.commit('decrement');
      this.myDecrement();
    }
  }
}
</script>
<style scoped>

</style>
