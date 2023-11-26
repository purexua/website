<template>
  <div id="container">
    <div id="main-content">
      <p>Hi, 如果你决定向我求助，当然你也不希望被视为失败者，更不愿成为失败者中的一员。能立刻得到快速并有效答案的最好方法，就是像赢家那样提问 —— 聪明、自信、有解决问题的思路，只是偶尔在特定的问题上需要获得一点帮助。</p>

      <h2>在提问之前</h2>

      <ul>
        <li>尝试在你准备提问的论坛的旧文章中搜索答案。</li>
        <li>尝试上网搜索以找到答案。</li>
        <li>尝试阅读手册以找到答案。</li>
        <li>尝试阅读常见问题文件（FAQ）以找到答案。</li>
        <li>尝试自己检查或试验以找到答案。</li>
        <li>向你身边的强者朋友打听以找到答案。</li>
        <li>如果你是程序开发者，请尝试阅读源代码以找到答案。</li>
      </ul>

      <blockquote>
        <p>
          <strong>当你提出问题的时候，请先表明你已经做了上述的努力；这将有助于树立你并不是一个不劳而获且浪费别人的时间的提问者。如果你能一并表达在做了上述努力的过程中所学到的东西会更好，因为我们更乐于回答那些表现出能从答案中学习的人的问题。</strong>
        </p>
      </blockquote>

      <h2>联系我</h2>

      <ul>
        <li><a href="https://github.com/purexua">Github</a></li>
        <li><a href="https://twitter.com/xujh668">Twitter</a></li>
        <li><a href="https://space.bilibili.com/1295217142">B站</a></li>
        <li>Email : xujh3919@gmail.com</li>
        <li>QQ : 983627161</li>
        <li>WeChat : purexua</li>
      </ul>

      <h2>Purexua 的朋友们</h2>

      <ul>
        <li><a href="https://github.com/boygong">booygong</a></li>
        <li><a href="https://github.com/fuchyourname">jokeran</a></li>
      </ul>
      <blockquote>
        <p><em>I love to make friends.</em> so if you want to say <strong>hi, I'll be happy to meet you more!</strong></p>
        <p>注意此网站是作者学习 Linux 系统用的，所以不会有华丽的界面，完美的功能。如果需要可关注作者其他域名！(●ˇ∀ˇ●)</p>
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