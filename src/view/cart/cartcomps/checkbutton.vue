<template>
  <div class="checkbutton" :class="{ active: isChecked }"></div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  isChecked: {
    type: Boolean,
    required: true
  }
})
// console.log(isChecked)
</script>

<style lang='less' scoped>
.checkbutton {
  width: 15px;
  height: 15px;
  border: 1px solid gray;
  border-radius: 50%;
  text-align: center;
  line-height: 25px;
}
.active {
  background-color: red;
}
</style>