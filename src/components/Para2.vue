<template>
  <div id="para2">
    para2
    <br>
    {{aa+"+"+bb}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      aa:this.$route.query.a,
      bb:this.$route.query.b
    }
  },
  mounted(){
    console.log(this.$route.query,1)
    console.log(this.$route.params,2)
  }
}
</script>

<style>

</style>