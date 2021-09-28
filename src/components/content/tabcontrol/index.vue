<template>
  <div class='tabcontrol'>
    <div class="tab-control-item" v-for="(item, index) in tabList" :key="index" :class="{isactive: currentIndex === index}" @click="changeTab(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmits ,ref } from 'vue'
  import $store from '@/store/index.js'

  const currentIndex = ref(0)

  defineProps({
    tabList: {type: Array, required: true,}
  })

  // const emit = defineEmits(['tabCtrl_change'])

  const changeTab = (index) => {
    // console.log(index)
    let tempType = ''
    currentIndex.value = index
    switch (index) {
      case 0 :
        tempType = 'pop'
        break
      case 1 :
        tempType = 'new'
        break
      case 2 :
        tempType = 'sell'
        break
    }
    // emit('tabCtrl_change', tempType)
    $store.commit('goodCurrentTypeChange', tempType)
  }

</script>

<style scoped>
  .tabcontrol {
    width: 100%;
    height: 44px;
    display: flex;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
  }
  span {
    padding: 5px 10px;
    box-sizing: border-box;
  }
  .isactive {
    color: orange;
  }
  .isactive span  {
    border-bottom: 1px solid orange;
  } 
</style>