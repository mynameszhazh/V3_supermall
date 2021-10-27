<template>
  <div>
    <p>category</p>
    <toast ref="toast"></toast>
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue'
import Toast from '@/components/common/toast/index.vue'
// const { appContext } = getCurrentInstance()
// const { $test, $toast } = appContext.config.globalProperties
// $test(1212)
const toast = ref(null)
onMounted(() => {
  toast.value.show('nihao', 2000)
})

</script>

<style scoped>
/* .v3popup {
  z-index: 500000;
} */
</style>