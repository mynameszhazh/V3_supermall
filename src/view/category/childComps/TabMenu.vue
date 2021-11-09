<template>
  <scroll
    id="tab-menu"
    ref="tabMenu_scroll"
    @pullingup="pullingup"
    @content-Scroll-Change="contentScrollChange"
  >
    <div class="menu-list">
      <div
        class="menu-list-item"
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in categories"
        :key="index"
        @click="itemClick(index)"
      >{{ item.title }}</div>
    </div>
  </scroll>
</template>

<script setup>
import Scroll from '/components/common/scroll/index.vue'

import { ref, defineProps, defineEmits, onMounted } from 'vue'

const emit = defineEmits(['selectItem'])
const currentIndex = ref(0)
const tabMenu_scroll = ref(null)

const props = defineProps({
  categories: {
    type: Array,
    required: true
  }
})

const itemClick = (index) => {
  currentIndex.value = index
  emit('selectItem', index)
}

const pullingup = (item) => {
  // console.log(item)
}
const contentScrollChange = (item) => {
  // console.log(item)
}

onMounted(() => {
  setTimeout(() => {
    tabMenu_scroll.value.refresh()
  }, 200);
})
</script>

<style lang='less' scoped>
#tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
}

.menu-list-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}

.menu-list-item.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>