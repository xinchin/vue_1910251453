<template>
  <div>
    <h1>parent</h1>
    <child1></child1>

  </div>
</template>
<script>
import child1 from '../DempParent/child1'
import child2 from '../DempParent/child2'

export default {
  name:'demoParent',
  data(){
    return {

    }
  },
  components:{child1, child2}

}
</script>
<style scoped>

</style>
