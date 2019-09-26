<template>
	<div id="para">
		传参
		scoped
		axios
		less
		监听$route
    代理
		<div class="box">
      <router-link to="/para/para1">To Para1</router-link>
      <router-link to="/para/para2">To Para2</router-link>
      <router-view/>
    </div>
	</div>
</template>

<script>
export default {
  watch:{
    $route(to,from){
      console.log(to,from)
    }
  }
}
</script>

<style scoped>
.box{
  border:2px solid red;
}
</style>