<template>
  <div id="app">
    <system-header />
    <Left />
    <div class="content">
       <router-view></router-view>
    </div>
  </div>
</template>

<script>
import systemHeader from "@/components/SystemHeader.vue";
import Left from "@/components/Left.vue";
export default {
  components:{
    Left,
    systemHeader
  }
}
</script>

<style lang="css">
   @import "./assets/index.css";
   #app{
     height:100%;
   }
</style>
