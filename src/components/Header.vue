<template>
  <div id="my-header">
    <div class="header-avatar"></div>
    <div class="title">~ 天真呀 ~</div>
    <ul class="nav">
      <li>&nbsp;首页&nbsp;</li>
      <li>&nbsp;归档&nbsp;</li>
      <li>&nbsp;关于&nbsp;</li>
    </ul>
  </div>
</template>
<script>
import _postService from '../share/post.service'

export default {
  data () {
    return {
      postList: []
    }
  },
  mounted () {
    console.log(_postService)
    this.getPosts()
  },
  mixins: [
    _postService
  ],
  methods: {
    getPosts: function () {
      _postService.methods._getPosts()
        .then(datas => {
          console.log(datas)
        }, err => {
          console.error(err)
        })
    }
  }
}
</script>
<style lang="less" scoped>
@import "../assets/init.less";
@fs: 16px;
#my-header {
  height: 2rem;
  padding: .4rem 0;
  background-color: #f1f1f1;
  .header-avatar {
    margin: 0 auto;
    width: .92rem;
    height: .92rem;
    background-image: url("../assets/avatar.jpg");
    background-size: cover;
    background-position: center;
    border: 1px solid #eee;
    .border-radius(1rem);
  }
  .title {
    margin: .2rem 0;
    font-size: @fs - 2;
  }
  .nav {
    padding: .1rem 0;
    font-size: @fs - 2;
    li {
      display: inline;
      margin: .12rem;
      color: #888;
      border-bottom: 1px solid;
    }
  }
}
</style>
