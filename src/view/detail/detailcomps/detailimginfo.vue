<template>
  <div class="detailInfo">
    <!--    {{detailInfo}}-->
    <div class="title">
      <p>{{ detailInfo.desc }}</p>
    </div>
    <div class="cont">
      <div class="cont-item" v-for="(item, index) in detailInfo.detailImage" :key="index">
        <p>{{ item.key }}</p>
        <div class="list">
          <img :src="url" alt="" v-for="(url, index) in item.list" :key="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  detailInfo: {
    type: Object,
    required: true
  }
})
</script>

<style lang='less' scoped>
.detailInfo {
  margin-top: 20px;
}

.title {
  width: 100%;
  padding: 35px 15px;

  p {
    position: relative;
    padding: 0 10px;
    color: gray;

    &::after {
      content: '';
      position: absolute;
      width: 70px;
      height: 2px;
      background-color: black;
      top: -15px;
      left: 0;
    }

    &::before {
      content: '';
      position: absolute;
      width: 70px;
      height: 2px;
      background-color: black;
      bottom: -15px;
      right: 0;
    }
  }
}

.cont {
  width: 100%;

  .cont-item {
    p {
      font-size: 22px;
      color: hotpink;
      padding: 0 15px;
    }

    .list {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}
</style>