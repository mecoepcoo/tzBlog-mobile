<template>
  <div class="home">
    <article class="post">
      <header>
        <h1 class="post-title"><a href="">标题在这里的标题在这里的标题在这里的</a></h1>
        <div class="post-meta">
          <span class="post-meta-date">2018-09-20</span>
          <span class="post-meta-read">10次阅读</span>
        </div>
      </header>
      <div class="post-content">
        文章正文部分
      </div>
      <footer>
        <a href="" class="read-whole">阅读全文&raquo;</a>
        <div class="split-line"></div>
      </footer>
    </article>

    <article class="post">
      <header>
        <h1 class="post-title"><a href="">标题在这里的标题在这里的标题在这里的</a></h1>
        <div class="post-meta">
          <span class="post-meta-date">2018-09-20</span>
          <span class="post-meta-read">10次阅读</span>
        </div>
      </header>
      <div class="post-content">
        文章正文部分文章正文部分文章正文部分文章正文部分文章正文部分文章正文部分
      </div>
      <footer>
        <a href="" class="read-whole">阅读全文&raquo;</a>
        <div class="split-line"></div>
      </footer>
    </article>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'home'
    }
  }
}
</script>
<style lang="less" scoped>
.post {
  letter-spacing: .01rem;
  header {
    padding: 0 .32rem;
  }
  &-title {
    line-height: 1.2;
    a {
      color: #555;
      font-size: .22rem;
      text-decoration: none;
      font-weight: normal;
    }
  }
  &-meta {
    color: #c3c3c3;
    margin-top: .1rem;
    font-size: .12rem;
    line-height: 2;
    span {
      margin-right: .02rem;
    }
  }
  &-content {
    margin-top: .24rem;
    text-align: justify;
  }
  footer {
    position: relative;
    margin: .48rem 0 .88rem 0;
    .read-whole {
      padding: .06rem .16rem;
      font-size: .14rem;
      border: 2px solid #666;
      text-decoration: none;
      color: #666;
      border-radius: .02rem;
    }
    .split-line {
      position: absolute;
      display: block;
      left: 50%;
      top: .6rem;
      transform: translateX(-50%);
      width: .66rem;
      height: 1px;
      color: #e5e5e5;
      background-color: #e5e5e5;
    }
  }
}
</style>
