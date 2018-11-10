<template>
  <div class="archives">
    <section class="archives-container">
      <header class="archives-header">当前共计x个日志</header>
      <article class="posts">
        <h2 class="year">2018</h2>
        <a href="" class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </a>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标标题标题标标题标题标题标题标题</span>
        </div>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
      </article>
      <article class="posts">
        <h2 class="year">2018</h2>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
      </article>
      <article class="posts">
        <h2 class="year">2018</h2>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
        <div class="posts-item">
          <span class="date">09-20</span>
          <span class="title">标题标题标题标题标题标题标题标题</span>
        </div>
      </article>
    </section>
  </div>
</template>
<script>
export default {
  name: 'Archives',
  data () {
    return {
      msg: 'archives'
    }
  }
}
</script>
<style lang="less" scoped>
.archives {
  text-align: left;
  &-header {
    padding: .15rem 0;
    color: #555;
    &::before {
      content: "";
      position: absolute;
      left: -.19rem;
      top: .21rem;
      width: .1rem;
      height: .1rem;
      background-color: #ddd;
      border-radius: 50%;
      border: 1px solid #fff;
    }
  }
  &-container {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      top: .22rem;
      left: -.15rem;
      width: 3px;
      height: 98%;
      background-color: #eee;
      z-index: -1;
    }
  }
}
.posts {
  position: relative;
  padding: .15rem 0 .25rem 0;
  .year {
    margin-top: .15rem;
    margin-bottom: .45rem;
    &::before {
      position: absolute;
      content: "";
      left: -.18rem;
      top: .44rem;
      width: .08rem;
      height: .08rem;
      border-radius: 50%;
      background-color: #aaa;
      border: 1px solid #fff;
    }
  }
}
.posts-item {
  position: relative;
  display: block;
  margin-top: .35rem;
  padding-bottom: .15rem;
  border-bottom: 1px dashed #c5c5c5;
  text-decoration: none;
  color: #555;
  -webkit-tap-highlight-color: transparent;
  &::before {
    position: absolute;
    content: "";
    left: -.17rem;
    top: .08rem;
    width: .05rem;
    height: .05rem;
    border-radius: 50%;
    background-color: #bbb;
    border: 1px solid #fff;
  }
  span {
    display: block;
    height: 100%;
  }
  .date {
    position: absolute;
    left: 0;
    top: .02rem;
    margin-right: .1rem;
    width: .4rem;
    font-size: .14rem;
  }
  .title {
    margin-left: .52rem;
  }
}
</style>
