<template>
  <div class="detail">
    <nav-bar bgcolor="skyblue">
      <template v-slot:left>
        <div class="back" @click="backHome">
          <span>back</span>
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <span v-for="(item,index) in ['商品', '参数', '评论', '推荐']" :key="index">{{ item }}</span>
        </div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      :probe-type="3"
      ref="home_scroll2"
      :pull-up-load="true"
      @pullingup="pullingup"
      @content-scroll-change="contentScrollChanges"
    >
      <detailswiper :imgList="imgLists"></detailswiper>
      <detailinfo :goods="goodsInfo"></detailinfo>
      <detailshopinfo :shop-info="shopInfo"></detailshopinfo>
      <detailimginfo :detail-info="detailInfo"></detailimginfo>
      <detailparamsinfo :params-info="paramsInfo" ref="params"></detailparamsinfo>
      <detailcomment :comment-info="commentInfo" ref="comment"></detailcomment>
      <goodlist :currentGoods="reCommendInfo" ref="recommend"></goodlist>
    </scroll>
    <backtop v-show="isshow" @click.native="backclick(home_scroll2)"></backtop>
  </div>
</template>

<script setup>
import backtop from '@/components/common/backtop/index.vue'
import detailswiper from './detailcomps/detailswiper.vue'
import detailinfo from './detailcomps/detailinfo.vue'
import detailimginfo from './detailcomps/detailimginfo.vue'
import detailshopinfo from './detailcomps/detailshopinfo.vue'
import detailparamsinfo from './detailcomps/detailparamsinfo.vue'
import detailcomment from './detailcomps/detailcomment.vue'
import NavBar from '/components/common/navbar/index.vue'
import scroll from '/components/common/scroll/index.vue'
import goodlist from '@/components/content/goods/goodlist.vue'

import { ref, onMounted, defineProps, reactive } from 'vue'
import { backTopMixin } from '@/common/backtopMixin.js'
import { detailData, getRecommend } from '@/network/detail/detail.js'
import { GoodsInfo, ShopInfo } from '@/utils/dataCollect/detail.js'
import { useRoute, useRouter } from 'vue-router'

const { isshow, backclick, backTopScr } = backTopMixin()

import emitter from '@/utils/eventbus'
import { debounces } from '@/utils/debounce'

const route = useRoute()
const router = useRouter()

const home_scroll2 = ref(null)
const imgLists = ref([])
const goodsInfo = ref([])
const shopInfo = ref([])
const detailInfo = ref([])
const paramsInfo = ref([])
const commentInfo = ref([])
let reCommendInfo = reactive({
  list: []
})

const detailGetData = async () => {
  const data = await detailData(route.params.id)
  // console.log(data.result.rate)
  imgLists.value = data.result.itemInfo.topImages
  detailInfo.value = data.result.detailInfo
  commentInfo.value = data.result.rate
  paramsInfo.value = data.result.itemParams
  goodsInfo.value = new GoodsInfo(data.result.itemInfo, data.result.columns, data.result.shopInfo.services)
  shopInfo.value = new ShopInfo(data.result.shopInfo)
}

const reCommendData = async () => {
  const data = await getRecommend()
  // console.log(data.data)
  // 这里只需要数组就可以了
  reCommendInfo.list = data.data.list
}

const pullingup = () => {
  // console.log(1)
}

const backHome = () => {
  router.go(-1)
}

const contentScrollChanges = (options) => {
  backTopScr(options)
}

// 获取详情页数据
detailGetData()
// 获取推荐数据
reCommendData()

onMounted(() => {
  const refreshs = debounces(home_scroll2.value.refresh, 50)
  const refreshs2 = debounces(home_scroll2.value.refresh, 50)
  emitter.on('detailimgLoad', () => {
    refreshs()
  })
  // 因为外部不能使用ref的原因 这里产生了不可避免的耦合性
  emitter.on('goodlistimgLoad', () => {
    refreshs2()
  })
})

</script>

<style scoped>
.detail {
  height: 100vh;
  background-color: #fff;
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

