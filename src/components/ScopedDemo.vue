<template>
  <div id="sc">
    SC
    <br>
    <router-view/>
    <Sc2></Sc2>
  </div>
</template>

<script>
import Sc2 from '@/components/Sc2'
export default {
  components:{
    Sc2
  }
}
</script>

<style scoped>
div{
  color:red;
}
</style>