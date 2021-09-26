<template>
  <div class="profileswiper">
    <swiper :imgList="imgList" :delay="30000" :loop="false" :autoplay="false"></swiper>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import swiper from '/components/common/swiper/index.vue'

const props = defineProps({
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
</style>