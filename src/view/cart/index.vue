<template>
  <nav-bar bgColor="orange">
      <template v-slot:center>
        <div class="title">购物车</div>
      </template>
    </nav-bar>
</template>

<script>
import {defineComponent} from 'vue'
import NavBar from '/components/common/navbar/index.vue'

export default defineComponent({
  name: "",
  components: {
    NavBar
  },
})
</script>

<style scoped>

</style>