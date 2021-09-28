<script setup lang="ts">
import { defineProps, computed} from 'vue'

const props = defineProps({
  bgColor: {
    type: String,
    default: '#ff8198'
  },
})
const commonStyle = computed(() =>  {
  return {
    backgroundColor: props.bgColor
  }
})
</script>

<template>
  <div id="nav-bar" :style="commonStyle">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>


<style type="less" scoped>
#nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  position: relative;
  z-index: 999999;
  /* background-color: #ff8198; */
}

.left, .right {
  width: 50px;
  height: 100%;
}

.center {
  flex: 1;
  font-size: 20px;
  color: #2a3a4a;
  text-align: center;
}

</style>