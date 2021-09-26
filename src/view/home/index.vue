<template>
  <div>
    <!--    导航栏-->
    <nav-bar bgcolor="#abcdef">
      <template v-slot:center>
        <div class="title">首页</div>
      </template>
    </nav-bar>
    <!--    轮播图-->
    <homeswiper :imgList="bannerList"></homeswiper>
    <!--    <div>{{bannerList}}</div>-->
    <homerecommend :recomend-list="recomendList"></homerecommend>
    <homefeature></homefeature>
  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted, watch } from 'vue'
import { getHomeMuiltidata, getHomeGoods } from '/network/home/home'

// 引入vuex
import NavBar from '/components/common/navbar/index.vue'
import homeswiper from "./homecomps/homeswiper.vue";
import homerecommend from "./homecomps/homerecommend.vue";
import homefeature from "./homecomps/homefeature.vue";

const bannerList = ref([])
const recomendList = ref([])
// console.log(a)
const getHomeMuiltidatas = async () => {
  // console.log(1)
  const { data } = await getHomeMuiltidata()
  // console.log( data.banner.list instanceof String)
  bannerList.value = data.banner.list
  recomendList.value = data.recommend.list
}
onMounted(() => {
  getHomeMuiltidatas()
})
</script>

<style scoped>
.title {
  width: 100%;
  height: 100%;
  color: #ffffff;
}
</style>