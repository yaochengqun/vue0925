<template>
  <div class="imgdemo">
    <img src="../assets/imgs/1.jpg" alt="">
    <img v-for="(src,i) in srcs" :src="src" alt="" :key="i">
    <br>
    <img v-for="(s,i) in sss" :src="s" alt="" :key="'i'+i">
  </div>
</template>

<script>
export default {
  data(){
    return {
      srcs:[
        require("../assets/imgs/1.jpg"),
        require("../assets/imgs/2.jpg")
      ],
      sss:[
        "/static/images/1.jpg",
        "/static/images/2.jpg",
        "/static/images/3.jpg",
        "/static/images/4.jpg",
        "/static/images/5.jpg",
        "/static/images/6.jpg"
      ]
    }
  }
}
</script>

<style>
.imgdemo img{
  height: 200px;
}
</style>