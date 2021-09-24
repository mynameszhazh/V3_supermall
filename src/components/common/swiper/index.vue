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

<script>
import {defineComponent, onMounted, watch, ref} from 'vue'
// import Swiper from 'swiper'
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
//同时引入swiper的 css文件
// import 'swiper/dist/css/swiper.min.css'
export default defineComponent({
  props: {
    imgList: {
      type: Array,
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
  },
  setup(props) {
    // 这里存在很多很歹毒的事情，我也是不知道是什么问题就是这个东西变变得有点那么不对味道了。
    // console.log(props.bannerList)
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

    return {}
  }
})
</script>

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