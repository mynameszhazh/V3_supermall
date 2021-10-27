<template>
  <div>
    <p>category</p>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue'
const { appContext } = getCurrentInstance()
const { $test, $toast } = appContext.config.globalProperties
$test(1212)
console.log($toast.show('你好年后', 3000))
const showMsg = ref('')

showMsg.value = '我是一个'

</script>

<style scoped>
/* .v3popup {
  z-index: 500000;
} */
</style>