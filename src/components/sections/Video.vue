<!--<script setup>-->
<!--</script>-->

<!--<template>-->
<!--  <div>-->
<!--    <el-divider />-->

<!--    <el-row justify="center">-->
<!--      <h1 class="section-title">Explainer Video</h1>-->
<!--    </el-row>-->

<!--    &lt;!&ndash; 每个网站的视频的iframe可能不一致，最好在这里手动调整 &ndash;&gt;-->
<!--    <el-row justify="center">-->
<!--      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10" >-->

<!--        &lt;!&ndash; local &ndash;&gt;-->
<!--        <el-container class="video-container">-->
<!--          <video controls muted preload playsinline>-->
<!--            <source src="/video/VR-video.mp4" type="video/mp4">-->
<!--          </video>-->
<!--        </el-container>-->
<!--        -->
<!--&lt;!&ndash;        &lt;!&ndash; bilibili &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <el-container class="video-container">&ndash;&gt;-->
<!--&lt;!&ndash;          <iframe src="//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=BV1zw68YsEP9" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-container>&ndash;&gt;-->

<!--&lt;!&ndash;        &lt;!&ndash; youtube &ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <el-container class="video-container">&ndash;&gt;-->
<!--&lt;!&ndash;          <iframe src="https://www.youtube.com/embed/wjZofJX0v4M?si=BFvRyc3n3fFV_f1G" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-container>&ndash;&gt;-->
<!--      </el-col>-->
<!--    </el-row>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->

<!--.video-container{-->
<!--  margin: 20px 0px 0px 0px;-->
<!--}-->

<!--iframe, video {-->
<!--  aspect-ratio: 16 / 9;-->
<!--  width: 100%;-->
<!--}-->

<!--</style>-->
<script setup>
</script>

<template>
  <div>
    <el-divider />

    <el-row justify="center">
      <h1 class="section-title">Explainer Video</h1>
    </el-row>

    <!-- 每个网站的视频的iframe可能不一致，最好在这里手动调整 -->
    <el-row justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="10" >

        <!-- local -->
        <el-container class="video-container">
          <video controls muted preload playsinline>
            <source src="/video/VR-video.mp4" type="video/mp4">
          </video>
        </el-container>

<!--        &lt;!&ndash; bilibili &ndash;&gt;-->
<!--        <el-container class="video-container">-->
<!--          <iframe src="//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=BV1zw68YsEP9" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>-->
<!--        </el-container>-->

<!--        &lt;!&ndash; youtube &ndash;&gt;-->
<!--        <el-container class="video-container">-->
<!--          <iframe src="https://www.youtube.com/embed/wjZofJX0v4M?si=BFvRyc3n3fFV_f1G" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
<!--        </el-container>-->
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>

.video-container{
  margin: 20px 0px 0px 0px;
}

iframe, video {
  aspect-ratio: 16 / 9;
  width: 100%;
  /* 添加边框样式 */
  border: 4px solid #e0e0e0; /* 灰色边框 */
  border-radius: 8px; /* 圆角效果 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 轻微阴影，增强立体感 */
}

</style>
