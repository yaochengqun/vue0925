<template>
  <div class="hello">
    <router-link to="/home">首页</router-link>
    <router-link to="/product">商品</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/para">传参DEMO</router-link>
    <router-link to="/sc">SCOPED DEMO</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
