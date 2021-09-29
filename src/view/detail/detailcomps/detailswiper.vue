<template>
  <div class="detailswiper">
    <swiper :delay="30000" :loop="false" :autoplay="false">
      <swiper-item v-for="(item, index) in imgList" :key="index">
        <img :src="item" alt />
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
img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
</style>