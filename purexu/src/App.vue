<template>
  <div id="container">
    <div id="main-content">
      <p>Hi, 该网站正在搭建中，敬请期待！</p>

      <h2>我从软件工程中学到了几个教训：</h2>

      <ul>
        <li>如果不了解系统的工作原理，就无法在系统之上构建东西。</li>
        <li>尖端方法是灾难的根源。</li>
        <li>那些宣传得很美好的事物都是炒作，你只能得到承诺的一小部分效果。</li>
      </ul>

      <blockquote>
        <p>
          <strong>AI时代的座右铭应该是： 谁学得最快，谁就获胜！ 对于国家、企业或个人来说，都是如此。 我们要相信，知识改变命运，知识就是财富，就是实力！</strong>
        </p>
      </blockquote>

      <h2>联系我</h2>

      <ul>
        <li>Email : xujh3919@gmail.com</li>
        <li>WeChat : purexua</li>
      </ul>

      <blockquote>
        <p><em>I love to make friends.</em> so if you want to say <strong>hi, I'll be happy to meet you more!</strong></p>
      </blockquote>
      <div class="extra-space"></div>

    </div>


    <div id="footer">
      <p><a href="http://www.beian.miit.gov.cn/" target="_blank" rel="nofollow noreferrer" style="
            color: rgb(172, 172, 172);
            text-decoration: none;
            font-size: 12px;
          ">鄂ICP备2023003260号-1</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$message({
      message: 'Hi, 该网站正在搭建中，敬请期待！',
      type: 'success'
    });
  }
}
</script>

<style>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#main-content {
  width: 65%;
  margin-top: 5%;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f0f0f0;
  text-align: center;
  z-index: 9999;
  /* padding: 10px; */
}

.extra-space {
  height: 0px;
  /* 调整为适当的空白高度，以防止footer遮挡main-content */
}

@media (max-width: 768px) {
  #container {
    align-items: flex-start;
    /* 在手机端左对齐 */
  }

  #main-content {
    width: 100%;
    /* 在手机端占满整个宽度 */
    margin-top: 0;
    /* 移除手机端的顶部间距 */
  }

  .extra-space {
    height: 30px;
    /* 调整为适当的空白高度，以防止footer遮挡main-content */
  }
}
</style>