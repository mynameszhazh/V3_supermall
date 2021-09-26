<script setup lang="ts">
import {onMounted, defineProps, watch, ref, PropType ,getCurrentInstance } from 'vue'
import Swiper from '/assets/js/swiper.js'

const { proxy } = getCurrentInstance()

// 这里没有经过一个抽取的操作，因为这个@别名用起来老是报错
type imgListType = {
  image: string;
  link: string;
}
const props = defineProps({
  imgList: {
    type: Array as PropType<imgListType[]>,
    required: true,
    default() {
      return []
    }
  },
  loop: {
    type: Boolean,
    required: false,
    default() {
      return true;
    }
  },
  autoplay: {
    type: Boolean,
    required: false,
    default() {
      return true;
    }
  },
  delay: {
    type: Number,
    required: false,
    default() {
      return 3000;
    }
  }
})

onMounted(() => {
  new Swiper('.swiper-container', {
    loop: props.loop,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: false
    },
    // 这个样子的用法就是让你不是很好去二次封装一些东西一样
    autoplay: props.autoplay ? {
      value: false,
      delay: props.delay,
      disableOnInteraction: false,
    } : false,
  })
})
</script>


<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in imgList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </div>
    </div>
    <!-- swiper轮播图圆点 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.swiper-slide {
  width: 100%;
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide a {
  width: 100%;
}

.swiper-slide a img {
  width: 100%;
}

</style>