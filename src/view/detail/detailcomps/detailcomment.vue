<template>
  <div class="detailcomment">
    <div class="title">
      <span>用户评价{{commentInfo.cRate}}</span>
      <span>更多</span>
    </div>
    <div class="main">
      <div class="commentList"  v-for="(item, index) in commentInfo.list" :key="index">
        <div class="user">
          <img :src="item.user.avatar" alt="">
          <p>{{item.user.uname}}</p>
        </div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="info">
          <div class="date">{{createDate(item.created)}}</div>
          <div class="params">{{item.style}}</div>
        </div>
        <div class="showImg">
          <img :src="item" alt="" v-for="(item, indey) in item.images" :key="indey">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps, computed} from 'vue'
import { simbleFormat  } from '@/utils/dateFormat'

const props = defineProps({
  commentInfo: {
    type: Object,
    required: true
  }
})

const createDate = computed(()=> {
  return (date) => {
    return simbleFormat(date)
  }
})

</script>

<style lang='less' scoped>
.detailcomment {
  border-bottom: 1px solid rgba(0,0,0,0.1);
  padding: 10px 0;
  .title {
    width: 100%;
    padding: 0 20px;
    height: 44px;
    font-size: 22px;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .main {
    .commentList {
      width: 100%;
      .user {
        display: flex;
        padding-left: 10px;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          vertical-align: middle;
          margin-right: 15px;
        }
      }
      .content {
        padding: 10px;
        font-size: 16px;
      }
    }
  }
  .info {
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
  }
  .showImg{
    display: flex;
    flex-wrap: wrap;
    padding-left: 10px;
    img {
      width: 50px;
      height: 50px;
      margin-right: 25px;
    }
  }
}
</style>