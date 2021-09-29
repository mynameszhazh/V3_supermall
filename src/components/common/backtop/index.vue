<template>
  <div class="backtop">
    <img src="@/assets/images/common/top.png" alt="">
  </div>
</template>

<script setup>
  // import { ref } from 'vue'
  // const scroll = ref(null)
  const fn = () => {
    console.log('fn')
  }
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 5px;
    bottom: 50px;
  }
  .backtop img {
    width: 50px;
    height: 50px;
  }
</style>