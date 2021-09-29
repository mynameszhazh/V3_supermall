<template>
  <div>
    <detailswiper :imgList="imgLists"></detailswiper>
    <h1>detail</h1>
    <div>{{ route.params.id }}</div>

    <backtop ref="backtops" @click.native="backclick" v-show="isshow"></backtop>
  </div>
</template>

<script setup>
import backtop from '@/components/common/backtop/index.vue'
import detailswiper from './detailcomps/detailswiper.vue'

import { ref, onMounted, defineProps, reactive } from 'vue'
import { backTopMixin } from '@/common/backtopMixin.js'
import { detailData, Goods } from '@/network/detail/detail.js'
import { useRoute, useRouter } from 'vue-router'

const { isshow, backclick, backTopScr } = backTopMixin()
const route = useRoute()

const backtops = ref(null)
const imgLists = ref([])

const detailGetData = async () => {
  const data = await detailData(route.params.id)
  imgLists.value = data.result.itemInfo.topImages
}

detailGetData()

</script>

<style scoped>
</style>

