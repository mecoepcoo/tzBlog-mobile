<template>
  <div id="app">
    <my-header></my-header>
    <div class="content-wrap">
      <router-view/>
    </div>
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
html {
  font-size: 625%;
  margin: 0;
  padding: 0;
}
body {
  font-size: 16px;
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6, div, ul, li, ol, table, label, span, a, article, section {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Roboto Slab', 'Monda', "PingFang SC", "Microsoft YaHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666;
  font-size: .16rem;
}
.content-wrap {
  padding: .36rem;
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
</style>
