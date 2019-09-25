<template>
	<div id="product">
		Product Page
		<input type="button" value="搜索" @click="searchHandler">
	</div>
</template>

<script>
export default {
  name: 'Product',
  methods:{
    searchHandler(){
      this.$router.push({
        path: '/search'
      })
    }
  }
}
</script>

<style>

</style>