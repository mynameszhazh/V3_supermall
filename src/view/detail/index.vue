<template>
  <div class="detail">
    <nav-bar bgcolor="#abcdef">
      <template v-slot:left>
        <div class="back" @click="backHome"><span>back</span></div>
      </template>
      <template v-slot:center>
        <div class="title">list</div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      :probe-type="3"
      ref="home_scroll2"
      :pull-up-load="true"
      @pullingup="pullingup"
      @content-scroll-change='contentScrollChanges'
    >
      <detailswiper :imgList="imgLists"></detailswiper>
      <h1>detail</h1>
      <div>
      </div>
    </scroll>
    <backtop v-show='isshow' @click.native="backclick(home_scroll2)"></backtop>
  </div>
</template>

<script setup>
import backtop from '@/components/common/backtop/index.vue'
import detailswiper from './detailcomps/detailswiper.vue'
import NavBar from '/components/common/navbar/index.vue'
import scroll from '/components/common/scroll/index.vue'

import { ref, onMounted, defineProps, reactive } from 'vue'
import { backTopMixin } from '@/common/backtopMixin.js'
import { detailData, Goods } from '@/network/detail/detail.js'
import { useRoute, useRouter } from 'vue-router'

const { isshow, backclick, backTopScr } = backTopMixin()
const route = useRoute()
const router = useRouter()

const home_scroll2 = ref(null)
const imgLists = ref([])

const detailGetData = async () => {
  const data = await detailData(route.params.id)
  imgLists.value = data.result.itemInfo.topImages
}
const pullingup = () => {
  // console.log(1)
}

const backHome = () => {
  router.go(-1)
}

const contentScrollChanges = (options) => {
  // console.log(options)
}

detailGetData()

</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
}
.detail .content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 57px;
}
.detail .back {
  text-align: center;
}
</style>

