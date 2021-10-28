
<template>
  <teleport to="#toast">
    <div class="toast">
      <div class="content" v-show="isshow">{{ messageisshow }}</div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, defineExpose } from 'vue'

// const message = ref('')
const messageisshow = ref('')
const isshow = ref(false)

const show = (message, duration) => {
  isshow.value = true
  messageisshow.value = message
  //  ! 这里这个玩意可以注意一下 就是说  setTimeOut 是要右一个retur的  只是一个function是没有输出值这个东西的
  setTimeout(() => {
    isshow.value = false
    messageisshow.value = ''
  }, duration)
}

defineExpose({
  show
})
</script>

<style lang="less" scoped>
.toast {
  width: 200px;
  height: 35px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  .content {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    text-align: center;
    line-height: 35px;
    border-radius: 20px;
    height: 100%;
  }
}
</style>
