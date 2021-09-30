<template>
  <div class="detailinfo">
    <div class="title">{{ goods.title }}</div>
    <div class="price">
      <span class="nowPrice">{{ goods.newPrice }}</span>
      <span class="oldPrice">{{ goods.oldPrice }}</span>
      <span class="tag" v-show='goods.discount'>{{ goods.discount }}</span>
    </div>
    <div class="hotInfo">
      <span v-for="(item, index) in goods.columns" :key="index">{{ item }}</span>
    </div>
    <div class="services">
      <label :name='item.name'  v-for="(item, index) in goods.services" :key="index">
        <div>
          <input type="checkbox" :name="item.name" :value="item.name" />
          {{ item.name }}
        </div>
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'

const props = defineProps({
  goods: {
    type: Object,
    required: true
  }
})

onMounted(() => {
  // console.log(props.goods)
  // console.log(typeof props.goods)
})
</script>

<style lang='less' scoped>
.detailinfo {
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  background-color: #fff;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset;
  .title {
    width: 100%;
  }
  .price{
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    .nowPrice {
      font-size: 30px;
      color: red;
    }
    .oldPrice {
      margin-left: 15px;
      text-decoration: line-through;
    }
    .tag {
      background-color: red;
      font-size: 18px;
      color: white;
      border: 1em;
      text-align: center;
      padding: 1px 10px;
      border-radius: 0.5em;
      line-height: 1;
      margin-left: 15px;
      align-self: flex-start;
    }
  }
  .hotInfo {
    margin-top: 10px;
    width: 100%;
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 16px;
      color: rgb(133, 126, 126);
    }
  }
  .services {
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    label{
      width: 33%;
      font-size: 12px;
      margin-top: 5px;
      input {
        vertical-align: middle;
      }
    }
  }
}
</style>