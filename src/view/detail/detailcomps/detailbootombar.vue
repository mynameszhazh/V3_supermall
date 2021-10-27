<template>
  <div class="detailbootombar">
    <div class="service">客服</div>
    <div class="shop">商铺</div>
    <div class="Collection">收藏</div>
    <div class="shopcar" @click="shopcarclick">购物车</div>
    <div class="submit">购买</div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const emit = defineEmits(['shopcarclicks'])

const shopcarclick = () => {
  emit('shopcarclicks')
}

</script>

<style lang='less' scoped>
.detailbootombar {
  display: flex;
  width: 100%;
  height: 57px;
  // background-color: #e1e1e1;
  box-shadow: 0 10px 0 rgba(red, green, blue, 0.1);
  text-align: center;
  line-height: 49px;
  position: fixed;
  bottom: 0;
  z-index: 999;
}
.shop,
.shopcar,
.submit,
.Collection,
.service {
  flex: 1;
}
.shopcar {
  background-color: yellow;
}
.submit {
  background-color: deeppink;
}
</style>