<template>
  <div>
    <profileswiper :img-list="bannerList"></profileswiper>
  </div>
</template>

<script>
import {defineComponent, onMounted, ref} from 'vue'
import profileswiper from "./profilecomps/profileswiper.vue";
import {getHomeMuiltidata, getHomeGoods} from '/network/home/home'

export default defineComponent({
  name: "",
  components: {
    profileswiper
  },
  setup() {
    const bannerList = ref([1,2,3])
    // console.log(a)
    const getHomeMuiltidatas = async () => {
      // console.log(1)
      const {data} = await getHomeMuiltidata()
      // console.log( data.banner.list instanceof String)
      bannerList.value = data.banner.list
    }
    onMounted(() => {
      getHomeMuiltidatas()
    })

    return {
      bannerList
    }
  }
})
</script>

<style scoped>

</style>