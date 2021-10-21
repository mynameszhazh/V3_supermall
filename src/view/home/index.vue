<template>
  <div class="home">
    <!--    导航栏-->
    <nav-bar bgcolor="#ff8198">
      <template v-slot:center>
        <div class="title">首页</div>
      </template>
    </nav-bar>
    <scroll
      class="content"
      :probe-type="3"
      ref="home_scroll"
      :pull-up-load="true"
      @pullingup="pullingup"
      @content-scroll-change="contentScrollChanges"
    >
      <!--    轮播图-->
      <homeswiper :imgList="bannerList"></homeswiper>
      <!--    <div>{{bannerList}}</div>-->
      <homerecommend :recomend-list="recomendList"></homerecommend>
      <homefeature></homefeature>
      <tabcontrol :tabList="['流行', '新款', '精选']"></tabcontrol>
      <goodlist :currentGoods="currentGoods"></goodlist>
    </scroll>
    <backtop v-show="isshow" @click.native="backclick(home_scroll)"></backtop>
  </div>
</template>

<script setup>
// 引入vuex
import backtop from '@/components/common/backtop/index.vue'
import NavBar from '/components/common/navbar/index.vue'
import tabcontrol from '/components/content/tabcontrol/index.vue'
import goodlist from '/components/content/goods/goodlist.vue'
import scroll from '/components/common/scroll/index.vue'
import homeswiper from "./homecomps/homeswiper.vue";
import homerecommend from "./homecomps/homerecommend.vue";
import homefeature from "./homecomps/homefeature.vue";

import { ref, reactive, computed, onMounted, onActivated, onDeactivated, watch } from 'vue'
import { getHomeMuiltidata, getHomeGoods } from '/network/home/home'
import { debounces } from '@/utils/debounce'
// import { stoThrottle  } from '@/utils/throttle'
import { backTopMixin } from '@/common/backtopMixin.js'

import emitter from '@/utils/eventbus';
import $store from '@/store/index.js'

const { isshow, backclick, backTopScr } = backTopMixin()

const bannerList = ref([])
const saveY = ref(0)
const recomendList = ref([])
const home_scroll = ref(null)
const goodList = reactive({
  pop: { page: 0, list: [] },
  new: { page: 0, list: [] },
  sell: { page: 0, list: [] }
})


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
const pullingup = () => {
  // console.log($store.state.goodCurrentType)
  getHomeGoodsFn($store.state.goodCurrentType)
  // home_scroll.finishPullUp()
}

const contentScrollChanges = (option) => {
  backTopScr(option)
}

// 加载数据
getHomeMuiltidatas()
getHomeGoodsFn('pop')
getHomeGoodsFn('new')
getHomeGoodsFn('sell')

// mounted生命周期的使用
onMounted(() => {
  const refreshs = debounces(home_scroll.value.refresh, 50)
  // 因为外部不能使用ref的原因 这里产生了不可避免的耦合性
  emitter.on('goodlistimgLoad', () => {
    refreshs()
  })
})

// keep-alive 出现了两个生命钩子函数
onActivated(() => {
  // console.log('-activated-')
  home_scroll.value.scrollTo(0, saveY.value, 0)
  home_scroll.value.refresh()
})
onDeactivated(() => {
  // console.log('-deactivated-')
  saveY.value = home_scroll.value.getScrollY()
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