<template>
  <h1>detail</h1>
  <div>{{ route.params.id }}</div>
  <backtop ref="backtops" @click.native='backclick'  v-show='isshow'></backtop>
</template>

<script setup>
import backtop from '@/components/common/backtop/index.vue'
import { backTopMixin } from '@/common/backtopMixin.js'
const { isshow, backclick, backTopScr} = backTopMixin()

import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, defineProps } from 'vue'
const route = useRoute()

const backtops = ref(null)
</script>

<style scoped>
</style>

