<template>
  <div class="cartbottombar">
    <div class="allSelect">
      <span>全选</span>
      <checkbutton class="checkbutton" :isChecked="isAllSelect" @click.native="selectAll"></checkbutton>
    </div>
    <div class="allPrice">合计：￥{{ allPrice }}</div>
    <div class="buy" @click="buyAll">购买({{ count }})</div>
  </div>
</template>

<script setup>
import checkbutton from './checkbutton.vue'

import { ref, computed } from 'vue'

import store from '@/store/index.js'

// 购买总数
const count = computed(() => {
  let counter = 0
  store.getters.cartList.forEach(item => {
    if (item.checked) {
      counter += item.count
    }
  })
  return counter
})

// 总价格
const allPrice = computed(() => {
  let totalPrice = 0
  store.getters.cartList.forEach(item => {
    if (item.checked) {
      totalPrice += (item.price * item.count)
    }
  })
  return totalPrice
})
const buyAll = () => {
  console.log('buy all')
}

const isAllSelect = computed(() => {
  const temp = store.getters.cartList.find(item => {
    return !item.checked
  })
  return temp === undefined
})
const selectAll = () => {
  // console.log('selectAll')
  const temp = isAllSelect.value
  store.getters.cartList.forEach(item => {
    if (!temp) {
      item.checked = true
    } else {
      item.checked = false
    }
  })
}
</script>

<style lang='less' scoped>
.cartbottombar {
  width: 100%;
  height: 35px;
  position: fixed;
  align-items: center;
  // justify-content: space-between;
  bottom: 57px;
  left: 0;
  background-color: skyblue;
  display: flex;
  .allSelect {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    span {
      font-size: 12px;
      margin-right: 5px;
    }
  }
  .allPrice {
    flex: 1;
    font-size: 16px;
  }
  .buy {
    width: 100px;
    height: 100%;
    font-size: 18px;
    color: aliceblue;
    line-height: 35px;
    text-align: center;
    background-color: #ff4503;
  }
}
</style>