<template>
  <div id="app">
   <my-header></my-header>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import myHeader from './components/Header'
export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
  font-size: .16rem;
}
</style>
