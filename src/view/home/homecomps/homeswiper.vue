<template>
  <div class="homeswiper">
    <swiper  :delay="30000" :loop="false" :autoplay="false">
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import swiper from '/components/common/swiper/swiper.vue'
import swiperItem from '/components/common/swiper/swiperItem.vue'
defineProps({
  imgList: {
    type: Array,
    required: true,
    default() {
      return [];
    }
  }
})
</script>

<style scoped>
 a {
  width: 100%;
}

a img {
  width: 100%;
}
</style>