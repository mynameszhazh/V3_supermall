<template>
  <div class="homeswiper">
     <swiper :imgList="imgList" :delay="30000" :loop="false" :autoplay="false">
     </swiper>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import swiper from '/components/common/swiper/index.vue'
export default defineComponent({
  name: "",
  components: {
    swiper
  },
  props: {
    imgList: {
      type: Array,
      required: true,
      default() {
        return [];
      }
    }
  }
})
</script>

<style scoped>

</style>