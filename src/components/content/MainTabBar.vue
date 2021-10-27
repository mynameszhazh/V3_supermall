<template>
  <tab-bar :order="order" v-if="isDetail">
    <tab-bar-item path="/home" :order="1" activeColor="skyblue">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/home.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <span slot="item-text">首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" :order="2">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/category.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <span slot="item-text">分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" :order="3">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/shopcart.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/shopcart_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <span slot="item-text">购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" :order="4">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/profile.svg" alt />
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg" alt />
      </template>
      <template v-slot:item-text>
        <span slot="item-text">我的</span>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script setup>
import { computed, defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import TabBar from "/components/common/tabbar/TabBar.vue";
import TabBarItem from "/components/common/tabbar/TabBarItem.vue";

let order = ref(0)
const route = useRoute()
const router = useRouter()

const isDetail = computed(() => {
  // 这个计算方式真的很垃圾，只是判断一个路由的地址存在这样
  return route.path.indexOf('detail') === -1
})
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin: 0 2px 2px 0;
}
</style>