<template>
  <div>
    <nav-bar bgcolor="skyblue">
      <template v-slot:left>
        <div class="back" @click="backHome">
          <span>back</span>
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <span
            v-for="(item,index) in titles"
            :key="index"
            :class="{ active: currentIndex === index }"
            @click="detailnavclick(index)"
          >{{ item }}</span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script setup>
import { defineProps, onMounted, ref, defineEmits, defineExpose } from 'vue'
import { useRouter } from 'vue-router'

import NavBar from '/components/common/navbar/index.vue'

const router = useRouter()
const titles = ref(['商品', '参数', '评论', '推荐'])
const currentIndex = ref(0)

const emit = defineEmits(['indexParams'])

// const props = defineProps({
//   goods: {
//     type: Object,
//     required: true
//   }
// })

onMounted(() => {
})

const backHome = () => {
  router.go(-1)
}

const detailnavclick = (index) => {
  currentIndex.value = index
  emit('indexParams', index)
}

defineExpose({
  currentIndex
})
</script>

<style lang='less' scoped>
.active {
  color: deeppink;
}
</style>