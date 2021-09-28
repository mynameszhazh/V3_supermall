<template>
  <div class='goodlist'>
    <goodlistitem v-for="(item, index) in currentGoods.list" :key="index" :itemGood='item'></goodlistitem>
  </div>
</template>

<script setup>
  import {defineProps,onMounted} from 'vue'
  import goodlistitem from './goodlistitem.vue'

  const props = defineProps({
    currentGoods: {
      type: Object,
      required: true
    }
  })
  onMounted(()=> {
    // console.log(props.currentGoods.list)
  })

</script>

<style scoped>
  .goodlist {
    width: 100%;
    padding: 3px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>