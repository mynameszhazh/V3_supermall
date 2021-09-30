<template>
  <div class="detailshopinfo">
    <div class="title">
      <img :src="shopInfo.shopLogo" alt />
      <p>{{ shopInfo.name }}</p>
    </div>
    <div class="info">
      <div class="left">
        <div class="totalSells">
          <span>{{ shopInfo.totalSells }}</span>
          <span>总销量</span>
        </div>
        <div class="totalGoods">
          <span>{{ shopInfo.totalGoods }}</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="splice"></div>
      <div class="right">
        <div class="score" v-for="(item, index) in shopInfo.score" :key="index">
          <p>{{ item.name }}</p>
          <span class="last"  :style="{ color: item.isBetter ? 'red' : 'green' }">{{ item.score }}</span>
          <span :style="{ color: item.isBetter ? 'red' : 'green' }">{{ item.isBetter ? '高' : '低' }}</span>
        </div>
      </div>
    </div>
    <div class="more">
      <a :href="shopInfo.shopUrl">进店逛逛</a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  shopInfo: {
    type: Object,
    required: true
  }
})
</script>

<style lang='less' scoped>
.detailshopinfo {
  width: 100%;
  margin-top: 10px;
  background-color: #fff;
  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 30px;
    img {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
    p {
      margin-left: 10px;
    }
  }
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .splice {
      height: 50px;
      width: 1px;
      background-color: #000;
    }
    .left {
      flex: 1;
      display: flex;
      align-items: center;
      font-size: 15px;
      div {
        flex: 1;
        span {
          display: flex;
          margin-top: 5px;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
        }
      }
    }
    .right {
      flex: 1;
      font-size: 15px;
      .score {
        display: flex;
        margin-bottom: 5px;
        padding:0 20px;
        justify-content: space-between;
        align-items: center;
        p {
          margin-right: 5px;
        }
        span {
          margin-right: 5px;
        }
      }
    }
  }
  .more {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding-bottom: 10px;
    a {
      display: block;
      padding: 5px 15px;
      background-color: skyblue;
      border-radius: 1em;
    }
  }
}
</style>