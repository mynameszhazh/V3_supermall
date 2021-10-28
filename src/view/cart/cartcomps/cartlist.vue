<template>
  <div class="cartlist">
    <ul>
      <li v-for="item in cartList" :key="item.iid">
        <div class="item-selector">
          <!-- {{ item.checked }} -->
          <checkbutton :isChecked="item.checked" @click.native="changeClick(item)"></checkbutton>
        </div>
        <div class="item-cont">
          <div class="cont-img">
            <img :src="item.images" alt="商品图片" @load="cartListImgLoad" />
          </div>
          <div class="item-info">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-desc">{{ item.dec }}</div>
            <div class="info-bottom">
              <div class="btm-price left">￥{{ item.price }}</div>
              <div class="btm-count right">×{{ item.count }}</div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import checkbutton from './checkbutton.vue'

import { defineProps } from 'vue'
import emitter from '@/utils/eventbus';

const props = defineProps({
  cartList: {
    type: Array,
    required: true
  }
})

const changeClick = (item) => {
  item.checked = !item.checked
}

const cartListImgLoad = () => {
  emitter.emit('cartListImgLoad')
}

</script>

<style lang="less" scoped>
.cartlist {
  width: 100%;
  height: 100%;
  background-color: #fff;
  ul {
    list-style: none;
    li {
      display: flex;
      border-bottom: 1px solid #e1e1e1;
      padding: 10px 10px 10px 0;
      .item-selector {
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .item-cont {
        flex: 1;
        display: flex;
        align-items: center;
        .cont-img {
          width: 50px;
          img {
            height: 75px;
            width: 50px;
          }
        }
        .item-info {
          flex: 1;
          height: 100%;
          margin-left: 5px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .info-title {
            width: 250px;
            font-weight: 700;
            font-size: 15px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .info-desc {
            margin-top: 10px;
            font-size: 13px;
            max-height: 28px;
            padding-left: 5px;
            overflow: hidden;
          }
          .info-bottom {
            .btm-price {
              color: orangered;
            }
          }
        }
      }
    }
  }
}
</style>