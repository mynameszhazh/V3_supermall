<template>
  <tab-bar :order="order" :target="target">
    <tab-bar-item path="/home" :order="1" activeColor='skyblue'>
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span slot="item-text">首页</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" :order="2">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/category.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span slot="item-text">分类</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart" :order="3">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/shopcart.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/shopcart_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span slot="item-text">购物车</span>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" :order="4">
      <template v-slot:item-icon>
        <img src="@/assets/images/tabbar/profile.svg" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg" alt="">
      </template>
      <template v-slot:item-text>
        <span slot="item-text">我的</span>
      </template>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
import {computed, defineComponent, ref} from 'vue'
// import TabBar from "../common/tabbar/TabBar.vue";
import TabBar from "/components/common/tabbar/TabBar.vue";
import TabBarItem from "/components/common/tabbar/TabBarItem.vue";
// import { useState } from '@/utils/replaceVuex';

export default defineComponent({
  components: {
    TabBar,
    TabBarItem
  },
  setup(props, {emit}) {
    // const activeIndex = ref(1)
    let target
    let order = ref(0)
    // const onHandleClicks = (targets, orders) => {
    //   target = targets
    //   order.value = orders
    // }
    return {
      target,
      order,
    }
  }
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