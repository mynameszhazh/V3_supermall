<template>
  <div class="profileswiper">
    <!-- <swiper :imgList="imgList" :delay="30000" :loop="false" :autoplay="false"></swiper> -->
    <!-- <p>profile</p> -->
    <scroll
      class="content"
      :probe-type="3"
      ref="home_scroll"
      :pull-up-load="true"
      @pullingup="pullingup"
      @content-Scroll-Change="contentScrollChange"
    >
      <div>
        <ul>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
          <li>11111</li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import Scroll from '/components/common/scroll/index.vue'
// import swiper from '/components/common/swiper/swiper.vue'
const props = defineProps({
  // imgList: {
  //   type: Array,
  //   required: true,
  //   default() {
  //     return [];
  //   }
  // }
})

const pullingup = (item) => {
  console.log(item)
}
const contentScrollChange = (item) => {
  console.log(item)
}
</script>

<style lang='less' scoped>
.profileswiper {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 57px;
  .content {
    height: 100%;
  }
}
</style>