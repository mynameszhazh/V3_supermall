

<script setup lang="ts">
import { ref, defineProps, computed, watch } from 'vue'
import $store from '@/store/index.js'
const lef = ref('0')
const wid = ref('90px')
const activeIndex = ref(1)
const ttarget = computed(() => {
  return $store.state.target
})
// let oorder = computed(() => {
//   return $store.state.order
// })
watch(ttarget, (newValue) => { //直接监听
  // console.log("ttarget改变了");
  // console.log(newValue)
  const { width, left } = newValue.getBoundingClientRect()
  const { left: parentLeft } = newValue.parentNode.getBoundingClientRect()
  lef.value = left - 18 - parentLeft + 'px';
  wid.value = width + 28 + 'px'
  activeIndex.value = $store.state.order
})
const props = defineProps({
  order: Number,
  target: String,
})
</script>

<template>
  <!-- 我他喵的完全可以用其他的方式来解决这个问题，这个问题就是一个垃圾 -->
  <div id="tab-bar" :style="{ '--width': wid , '--left': lef}">
    <slot></slot>
  </div>
</template>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /*align-items: center;*/
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  z-index: 9;
  border-radius: 25px;
  border: 4px solid #f6f6f6;
}
.active {
  color: #fff;
}
#tab-bar::before {
  position: absolute;
  content: "";
  height: 100%;
  width: var(--width);
  background-color: #598bf0;
  border-radius: 25px;
  left: var(--left);
  transition: all 0.4s;
  transition-timing-function: ease-in-out;
}
</style>