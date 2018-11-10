<template>
  <div class="about">
    <div class="about-inner">
      <h2 class="aboutme-title">关于我</h2>
      <p class="aboutme-content">
        全栈开发者、产品经理、全栈培训讲师。
        <br>
        打字很快，小学三年级打字比赛中获得一等奖。
        <br>
        从事儿童教育相关工作，有需要请联系我。
        <br>
        I am a Full Stack Developer.
        <br>
        I was born in 1991 &amp; &nbsp;I took my interest in programming since my childhood.
        <br>
        The world of programming is like Harry Potter's magic world.
        <br>
        Contact me by click <a href="mailto:mecoepcoo@vip.qq.com">mecoepcoo@vip.qq.com</a>
      </p>
      <h2 class="aboutblog-title">关于本站</h2>
      <p class="aboutblog-content">
        本站作品采用
        <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh" target="_blank">[知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议]</a>
        进行许可。
        <br>
        除特别说明外，文章皆为原创，转载无须授权，注明出处即可。
        <br>
        博客基于nodejs+eggjs+angular+mysql+vue+react构建，移动端源码托管在<a href="https://github.com/mecoepcoo/tzblog-mobile" target="_blank">https://github.com/mecoepcoo/tzblog-mobile</a>
      </p>
      <h2 class="todo-title">TODO</h2>
      <p class="todo-content">出版属于自己的书</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'about'
    }
  }
}
</script>
<style lang="less" scoped>
.pre(@style, @value) {
  -webkit-@{style}: @value;
  -moz-@{style}: @value;
  -ms-@{style}: @value;
  -o-@{style}: @value;
    @{style}: @value;
}

.about {
  @f_color: #555;
  @f_size: 14px;
  @bg_color: #222;
  .a(@f_color, @hover_color) {
    color: @f_color;
    text-decoration: none;
    &:hover {
      color: @hover_color;
    }
  }
  display: block;
  font-size: @f_size;
  color: @f_color;
  word-wrap: break-word;
  word-break: normal;
  text-align: left;
  &-inner {
    position: relative;
    margin: 0 auto;
    p {
      line-height: 3;
      a {
        .a(#b83838, #ff0000);
      }
    }
  }
}
</style>
