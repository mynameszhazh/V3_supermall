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

<script>
import {defineComponent, computed} from 'vue'


export default defineComponent({
  name: "",
  props: {
    bgColor: {
      type: String,
      default: '#ff8198'
    }
  },
  setup(props) {
    const commonStyle = computed(() => {
      return {backgroundColor: props.bgColor}
    })
    return {
      commonStyle
    }
  }
})
</script>

<style type="less" scoped>
#nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  //background-color: #ff8198;
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