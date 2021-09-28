<template>
  <div class="wrapper" ref="betterScroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, reactive, defineEmits } from 'vue'
import emitter from '@/utils/eventbus';
import { debounces } from '@/utils/debounce'

import BetterScroll from 'better-scroll'
// dom 元素
const betterScroll = ref(null)
const props = defineProps({
  probeType: {
    type: Number,
    default: 0
  },
  pullUpLoad: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['pullingup'])

const BS = ref(null)

onMounted(() => {
  // console.log(betterScroll.value)
  BS.value = new BetterScroll(betterScroll.value, {
    probeType: props.probeType,
    // scrollY: true,
    // wheel: true,
    click: true,
    // pullDownRefresh: true,
    pullUpLoad: props.pullUpLoad
  })
  // console.log()
  BS.value.on('scroll', option => {
    // console.log(option)
  })
  BS.value.on('pullingUp', () => {
    emit('pullingup')
  })
  // BS.value.on('pullingDown', ()=> {
  //   refresh()
  // })
  const refreshs = debounces(refresh, 50)
  // 因为外部不能使用ref的原因 这里产生了不可避免的耦合性
  emitter.on('goodlistimgLoad', () => {
    refreshs()
  })
})
const refresh = () => {
  BS.value && BS.value.refresh()
}


</script>

<style lang='scss' scoped>
</style>