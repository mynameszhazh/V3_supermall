<template>
  <div class="cart">
    <nav-bar bgcolor="orange">
      <template v-slot:center>
        <div class="title">购物车({{ store.getters.cartItemCount }})</div>
      </template>
    </nav-bar>
    <scroll class="content" :probe-type="3" ref="home_scroll3" :pull-up-load="true">
      <cartlist :cart-list="cartList"></cartlist>
    </scroll>
    <cartbottombar></cartbottombar>
  </div>
</template>

<script setup>

import NavBar from '/components/common/navbar/index.vue'
import scroll from '/components/common/scroll/index.vue'
import cartlist from './cartcomps/cartlist.vue'
import cartbottombar from './cartcomps/cartbottombar.vue'

import { ref, onMounted } from 'vue'
import { debounces } from '@/utils/debounce'
import emitter from '@/utils/eventbus';

import store from '@/store/index.js'

const home_scroll3 = ref(null)
const cartList = ref([])

onMounted(() => {
  // console.log(store.getters.cartList)
  cartList.value = store.getters.cartList
  const refreshs = debounces(home_scroll3.value.refresh, 50)
  // 因为外部不能使用ref的原因 这里产生了不可避免的耦合性
  emitter.on('cartListImgLoad', () => {
    // console.log(1)
    refreshs()
  })
})

</script>

<style scoped>
.cart {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  overflow: hidden;
}
.cart .content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 92px;
}
</style>