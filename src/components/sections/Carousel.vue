<!--<script>-->
<!--import { Swiper, SwiperSlide} from 'swiper/vue';-->
<!--import { Navigation, Pagination, Autoplay} from 'swiper/modules';-->
<!--import 'swiper/css/bundle';-->

<!--export default {-->
<!--  components: {-->
<!--      Swiper,-->
<!--      SwiperSlide,-->
<!--      Navigation,-->
<!--      Pagination,-->
<!--      Autoplay,-->
<!--    },-->
<!--  data() {-->
<!--    return {-->
<!--      modules: [-->
<!--        Navigation,-->
<!--        Pagination,-->
<!--        Autoplay,-->
<!--      ],-->
<!--      // 选择要轮播的照片-->
<!--      image_paths: [-->
<!--        "./carousel/1.jpg",-->
<!--        "./carousel/2.jpg",-->
<!--        "./carousel/3.jpg",-->
<!--        "./carousel/4.jpg",-->
<!--        "./carousel/5.jpg",-->
<!--        "./carousel/6.jpg",-->
<!--      ],-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <el-row justify="center">-->
<!--    <el-col :span="24">-->
<!--      &lt;!&ndash; 设置轮播图：循环播放、首张图序号、响应式、导航和分页、自动播放 &ndash;&gt;-->
<!--      <swiper-->
<!--        :loop="true"-->
<!--        :slidesPerView="1"-->
<!--        :breakpoints="{-->
<!--          600: {-->
<!--            slidesPerView: 2,-->
<!--          },-->
<!--          800: {-->
<!--            slidesPerView: 3,-->
<!--          },-->
<!--        }"-->
<!--        :modules="modules"-->
<!--        :navigation="{ -->
<!--          hideOnClick:true,-->
<!--        }"-->
<!--        :pagination="{ -->
<!--          hideOnClick:true,-->
<!--          clickable:true, -->
<!--          type:'bullets' -->
<!--        }"-->
<!--        :autoplay="{ -->
<!--          delay:5000,-->
<!--          disableOnInteraction:false,-->
<!--          pauseOnMouseEnter:true,-->
<!--        }"-->
<!--        >-->
<!--        <swiper-slide v-for="path in image_paths">-->
<!--          <el-image :src="path"/>-->
<!--        </swiper-slide>-->
<!--      </swiper>-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--</template>-->
<!--  -->
<!--<style>-->

<!--/* 设置Swiper风格 */-->
<!--.swiper {-->
<!--  &#45;&#45;swiper-theme-color: white;-->
<!--}-->

<!--</style>-->
<!-- -->
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

export default {
  components: {
    Swiper,
    SwiperSlide,  // 只注册Swiper相关组件
  },
  data() {
    return {
      modules: [
        Navigation,
        Pagination,
        Autoplay,
      ],
      image_paths: [
        "./carousel/fig1.jpg"  // 确保图片路径正确
      ],
    }
  }
}
</script>

<template>
  <el-row justify="center">
    <el-col :span="24">
      <!-- 修正：所有属性都应放在swiper标签内 -->
      <swiper
        :loop="false"
        :slidesPerView="1"
        :breakpoints="{}"
        :modules="modules"
        :navigation="false"
        :pagination="false"
        :autoplay="false"
      >
        <swiper-slide v-for="path in image_paths" :key="path">
          <!-- 修正：el-image的属性绑定方式 -->
          <el-image
            :src="path"
            fit="contain"
            style="max-width: 100%; max-height: 700px; margin: 0 auto;"
          ></el-image>
        </swiper-slide>
      </swiper>
    </el-col>
  </el-row>
</template>

<style>
.swiper {
  --swiper-theme-color: white;
  max-width: 1200px;
  margin: 20px auto;
}
</style>
