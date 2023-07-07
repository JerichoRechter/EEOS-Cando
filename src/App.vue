<template>
  <the-header></the-header>
  <router-view></router-view>
  
</template>
<script>
import TheHeader from './components/TheHeader.vue';
export default{
  components:{TheHeader}

}</script>
<style >
@font-face {
  font-family: Vinque;
  src: url(vinque\ rg.otf);
}

* {
  box-sizing: border-box;
}

html {
  font-family: Vinque;
}

body {
  margin: 0;
}

</style>