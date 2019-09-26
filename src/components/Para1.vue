<template>
  <div id="para1">
    para1
    <br>
    <router-link 
      :to="{
        // path:'/para/para2',
        name:'Para2',
        params:{
          a:a,
          b:b
        }
      }"
    >
      para2
    </router-link>
    <br>
    <input type="button" value="跳转到para2" @click="toPara2">
  </div>
</template>

<script>
export default {
  data(){
    return {
      a:1,
      b:2
    }
  },
  methods:{
    toPara2(){
      this.$router.push({
        // name:'Para2',
        path:'/para/para2',
        query:{
          a:this.a,
          b:this.b
        }
      })
    }
  }
}
</script>

<style>

</style>