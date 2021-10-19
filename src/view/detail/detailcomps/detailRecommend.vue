<template>
  <div class="detailRecommend">
    <p>{{reCommendInfo}}</p>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'
// import emitter from '@/utils/eventbus'

const props = defineProps({
  reCommendInfo: {
    type: Array,
    required: true
  }
})

// const detailimgLoad = () => {
//   // console.log(1)
//   emitter.emit('detailimgLoad')
// }

</script>

<style lang='less' scoped>

</style>