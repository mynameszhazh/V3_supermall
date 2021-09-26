<template>
  <div class="homerecommend">
    <ul>
      <li v-for="(item,index) in recomendList" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt />
          <p>{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  recomendList: {
    type: Array,
    required: true,
    default() {
      return [];
    }
  }
})
</script>

<style scoped>
.homerecommend {
  width: 100%;
  padding: 5px;
  background-color: #fff;
}
ul {
  display: flex;
  justify-content: space-around;
}
ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
ul li img {
  width: 80px;
}
ul li p {
  width: 80px;
  overflow: hidden;
  overflow-wrap: normal;
  text-overflow: ellipsis;
}
</style>