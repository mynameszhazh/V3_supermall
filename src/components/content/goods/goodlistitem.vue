
<template>
  <div class="goodlistitem" @click="detailShow">
    <img :src="itemGood.show ? itemGood.show.img : itemGood.image" @load="goodlistLoad"/>
    <p>{{ itemGood.title }}</p>
    <span class="pice">{{ itemGood.price }}</span>
    <span class="collect">{{ itemGood.cfav }}</span>
  </div>
</template>

<script setup>
import { defineProps ,onMounted} from 'vue'
import { useRoute,useRouter } from 'vue-router'
import emitter from '@/utils/eventbus';
const props = defineProps({
  itemGood: {
    type: Object,
    required: true
  }
})

const router = useRouter()

onMounted(() => {
  // console.log(props.itemGood)
})
// debounce
const goodlistLoad = () => {
  // console.log(1)
  emitter.emit('goodlistimgLoad')
}

const detailShow = () => {
  router.push('/detail/'+ props.itemGood.iid)
}

</script>

<style scoped>
.goodlistitem {
  width: 48%;
  border-radius: 5px;
  font-size: 12px;
  border: 3px solid var(--color-tint);
  position: relative;
  padding-bottom: 20px;
  margin-top: 5px;
}
.goodlistitem img {
  width: 100%;
}
.goodlistitem .pice {
  /* width: 100%; */
  position: absolute;
  font-size: 12px;
  bottom: 3px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  color: var(--color-high-text);
  margin-right: 20px;
}
.goodlistitem p {
  max-width: 95%;
  padding-left: 5px;
  margin-bottom: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.goodlistitem .collect {
  position: absolute;
  font-size: 12px;
  bottom: 3px;
  right: 15px;
}

.goodlistitem .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("/assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>