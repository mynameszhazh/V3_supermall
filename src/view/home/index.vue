<template>
  <div class="home">
    <!--    导航栏-->
    <nav-bar bgcolor="#abcdef">
      <template v-slot:center>
        <div class="title">首页</div>
      </template>
    </nav-bar>
    <scroll class="content" :probe-type='3' ref="home_scroll" :pull-up-load='true' @pullingup='pullingup'>
      <!--    轮播图-->
      <homeswiper :imgList="bannerList"></homeswiper>
      <!--    <div>{{bannerList}}</div>-->
      <homerecommend :recomend-list="recomendList"></homerecommend>
      <homefeature></homefeature>
      <tabcontrol :tabList="['流行', '新款', '精选']"></tabcontrol>
      <goodlist :currentGoods='currentGoods'></goodlist>
    </scroll>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import { getHomeMuiltidata, getHomeGoods } from '/network/home/home'


import $store from '@/store/index.js'

// 引入vuex
import NavBar from '/components/common/navbar/index.vue'
import tabcontrol from '/components/content/tabcontrol/index.vue'
import goodlist from '/components/content/goods/goodlist.vue'
import scroll from '/components/common/scroll/index.vue'
import homeswiper from "./homecomps/homeswiper.vue";
import homerecommend from "./homecomps/homerecommend.vue";
import homefeature from "./homecomps/homefeature.vue";

const bannerList = ref([])
const recomendList = ref([])
const home_scroll = ref(null)
const goodList = reactive({
  pop: { page: 0, list: [] },
  new: { page: 0, list: [] },
  sell: { page: 0, list: [] }
},)


// 当前点击的商品类型
const currentGoods = computed(() => {
  return goodList[$store.state.goodCurrentType]
})


// 获取营销商的数据
const getHomeMuiltidatas = async () => {
  const { data } = await getHomeMuiltidata()
  bannerList.value = data.banner.list
  recomendList.value = data.recommend.list
}
// 获取商品数据
const getHomeGoodsFn = async (type) => {
  const page = goodList[type].page + 1
  const { data } = await getHomeGoods(type, page)
  // console.log(data)
  goodList[type].list.push(...data.list)
  goodList[type].page += 1
} 

// 下拉触发多次
const pullingup = ()=> {
  // console.log($store.state.goodCurrentType)
  getHomeGoodsFn($store.state.goodCurrentType)
  // home_scroll.finishPullUp()
}

getHomeMuiltidatas()
getHomeGoodsFn('pop')
getHomeGoodsFn('new')
getHomeGoodsFn('sell')

// mounted生命周期的使用
onMounted(() => {
  // console.log(home_scroll)
})


</script>

<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home .content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 57px;
}
.title {
  width: 100%;
  height: 100%;
  color: #ffffff;
}
</style>