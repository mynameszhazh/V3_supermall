<template>
  <div class="detail">
    <detailnavbar ref="nav" @index-params="indexParams"></detailnavbar>
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
      <detailparamsinfo class="params" ref="params" :params-info="paramsInfo"></detailparamsinfo>
      <detailcomment class="comment" ref="comment" :comment-info="commentInfo"></detailcomment>
      <goodlist class="likes" ref="recommend" :currentGoods="reCommendInfo"></goodlist>
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
import detailnavbar from './detailcomps/detailnavbar.vue'
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
const params = ref(null)
const comment = ref(null)
const recommend = ref(null)
const nav = ref(null)


const currentIndex = ref(0)
const imgLists = ref([])
const goodsInfo = ref([])
// 保存我的导航栏 需要跳转的高度参数数组
const jumpTop = ref([])
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

const indexParams = (index) => {
  home_scroll2.value.scrollTo(0, -jumpTop.value[index], 300)
}

const contentScrollChanges = (options) => {
  const optionY = -options.y
  const len = jumpTop.value.length
  for (let i = 0; i < len; i++) {
    // 1.到达这里会一直打印我的jumpTop的长度索引
    // 2.这里如果不想要我的这个代码这么长的话  就是把我的数组加长 在我的jumpTop加一个 Math.max_value
    // 3.注意点：这里有很大的坑一定要看明白了  不然只会白白浪费我的服务器资源  这个算法就不是很好
    if (currentIndex.value !== i && ((i < len - 1 && optionY >= jumpTop.value[i]) ||
      (i === len - 1 && optionY >= jumpTop.value[i]))) {
      currentIndex.value = i
      nav.value.currentIndex = currentIndex.value
    }
  }
  backTopScr(options)
}

const navDebounce = debounces((commentDOM, likesDOM, paramsDOM) => {
  jumpTop.value = []
  jumpTop.value.push(0)
  jumpTop.value.push(paramsDOM.offsetTop)
  jumpTop.value.push(commentDOM.offsetTop)
  jumpTop.value.push(likesDOM.offsetTop)
}, 50)

// 获取详情页数据
detailGetData()
// 获取推荐数据
reCommendData()

onMounted(() => {
  // 因为暂时获取不到dom元素，就用来 这种方式了
  const commentDOM = document.querySelector('.comment')
  const likesDOM = document.querySelector('.likes')
  const paramsDOM = document.querySelector('.params')

  const refreshs = debounces(home_scroll2.value.refresh, 50)
  const refreshs2 = debounces(home_scroll2.value.refresh, 50)
  emitter.on('detailimgLoad', () => {
    refreshs()
  })
  // 因为外部不能使用ref的原因 这里产生了不可避免的耦合性
  emitter.on('goodlistimgLoad', () => {
    refreshs2()
    // 图片加载完成，调用初始化函数库
    navDebounce(commentDOM, likesDOM, paramsDOM)
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

