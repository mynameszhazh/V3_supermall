<template>
  <div class="cartbottombar">
    <div class="allSelect">
      <span>全选</span>
      <checkbutton class="checkbutton" :isChecked="false" @click.native="selectAll"></checkbutton>
    </div>
    <div class="allPrice">合计：￥{{ allPrice }}</div>
    <div class="buy" @click="buyAll">购买({{ count }})</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import checkbutton from './checkbutton.vue'

const count = ref(0)
const allPrice = ref(0)

const buyAll = () => {
  console.log('buy all')
}
const selectAll = () => {
  console.log('selectAll')
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