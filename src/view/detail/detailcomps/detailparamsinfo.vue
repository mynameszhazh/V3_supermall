<template>
  <div class="detailparamsinfo">
    {{paramsInfo}}
  </div>
</template>

<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  paramsInfo: {
    type: Object,
    required: true
  }
})
</script>

<style lang='less' scoped>

</style>