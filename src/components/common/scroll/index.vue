<template>
  <div class="wrapper" ref="betterScroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, reactive, defineEmits } from 'vue'


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

// const {expose} = useContext()

const emit = defineEmits(['pullingup', 'contentScrollChange'])

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
    emit('contentScrollChange', option)
  })
  BS.value.on('pullingUp', () => {
    emit('pullingup')
  })
  // BS.value.on('pullingDown', ()=> {
  //   refresh()
  // })
})
const refresh = () => {
  BS.value && BS.value.refresh()
}
const scrollTo = (x, y, time) => {
  BS.value && BS.value.scrollTo(x, y, time)
}
const finishPullUp = () => {
  BS.value && BS.value.finishPullUp()
}
const getScrollY = () => {
  return BS.value ? BS.value.y : 0
}
expose({
  refresh,
  scrollTo,
  finishPullUp,
  getScrollY
})
</script>

<style lang='scss' scoped>

</style>