<template>
  <div class="tab-bar-item" ref="tabbar" @click="onHandleClick($event)" :style="activeStyle">
    <div :class="{active: isactive}">
      <slot name="item-icon" v-if="!isactive"></slot>
      <slot name="item-icon-active" v-else></slot>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
import {defineComponent, computed, onMounted, ref} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import $store from '@/store/index.js'

export default defineComponent({
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'black'
    },
    order: Number,
  },
  setup(props, {emit}) {
    // const isactive = ref(false)
    // 切换路由这样
    // console.log(props)
    const router = useRouter()
    const route = useRoute()
    onMounted(()=>{
      // 当界面挂载出来后就会自动执行
      tabbar.value
    })
    // tabbar的path hash 发生改变
    const onHandleClick = (e) => {
      // 这个就是一个废物一样的东西
      // emit('onHandleClicks', target, props.order)
      // $store.state.target = e.target
      // 这里可能存在一个bug就是如果加载的速度很慢的话就是会发生一些事情
      $store.state.target = tabbar.value
      $store.state.order = props.order
      $store.commit('itemclickchange')
      itemchange()
    }
    const itemchange = () => {
      router.replace(props.path)
    }
    let tabbar = ref(null);
    // 需要在生命周期获取

    const isactive = computed(() => {
      if(route.path.indexOf(props.path) !== -1) {
        $store.state.order = props.order
      }
      return route.path.indexOf(props.path) !== -1
    })
    const activeStyle = computed(() => {
      return isactive ? {color: props.activeColor} : {}
    })
    return {
      isactive,
      tabbar,
      activeStyle,
      onHandleClick
    }
  }
})
</script>

<style scoped>
.tab-bar-item {
  display: flex;
  align-items: center;
  height: 49px;
  font-size: 14px;
  color: black;
  z-index: 10;
}


.active {
  color: #ff5978;
}
</style>