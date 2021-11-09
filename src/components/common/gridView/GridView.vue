<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, onUpdated } from 'vue'
const props = defineProps({
  cols: {
    type: Number,
    default: 2
  },
  hMargin: {
    type: Number,
    default: 8
  },
  vMargin: {
    type: Number,
    default: 8
  },
  itemSpace: {
    type: Number,
    default: 8
  },
  lineSpace: {
    type: Number,
    default: 8
  }
})

const gridView = ref(null)

const _autoLayout = () => {
  // 1.获取gridEl和children
  // 注: 这里为什么不用document.querySelector呢?
  // 答: 因为如果在项目中, 多处都用到了grid-view, 那么这里就不确定获取的是哪一个了.
  let gridEl = gridView.value;
  let children = gridEl.children;

  // 2.设置gridEl的内边距
  gridEl.style.padding = `${props.vMargin}px ${props.hMargin}px`

  // 3.计算item的宽度
  let itemWidth = (gridEl.clientWidth - 2 * props.hMargin - (props.cols - 1) * props.itemSpace) / props.cols;
  for (let i = 0; i < children.length; i++) {
    let item = children[i];
    item.style.width = itemWidth + 'px';
    if ((i + 1) % props.cols !== 0) {
      item.style.marginRight = props.itemSpace + 'px'
    }
    if (i >= props.cols) {
      item.style.marginTop = props.lineSpace + 'px'
    }
  }
}

onMounted(() => {
  setTimeout(_autoLayout, 20)
})
onUpdated(() => {
  _autoLayout()
})

</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
