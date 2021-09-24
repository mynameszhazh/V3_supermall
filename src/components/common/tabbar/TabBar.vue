<template>
  <div id="tab-bar" :style="{'--left': lef, '--width':wid}">
    <slot></slot>
  </div>
</template>

<script>
import {defineComponent, ref, computed, watch} from 'vue'
import $store from '@/store/index.js'

export default defineComponent({
  props: {
    order: Number,
    target: String,
  },
  setup({order, target}) {
    // console.log($store.state.target)
    const lef = ref('0')
    const wid = ref('90px')
    const activeIndex = ref(1)
    const ttarget = computed(()=> {
      return $store.state.target
    })
    let oorder = computed(()=> {
      return $store.state.order
    })
    watch(ttarget, (newValue) => { //直接监听
      // console.log("ttarget改变了");
      // console.log(newValue)
      const {width, left} = newValue.getBoundingClientRect()
      const {left: parentLeft} = newValue.parentNode.getBoundingClientRect()
      lef.value = left - 18 - parentLeft + 'px';
      wid.value = width + 28 + 'px'
      activeIndex.value = $store.state.order
    });
    watch(oorder,(newValue)=> {
      // console.log(newValue)
    })
    return {
      lef,
      wid,
      activeIndex
    }
  }
})
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  /*align-items: center;*/
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .2);
  z-index: 9;
  border-radius: 25px;
  border: 4px solid #f6f6f6;
}
.active {
  color: #fff;
}
#tab-bar::before {
  position: absolute;
  content: '';
  height: 100%;
  width: var(--width);
  background-color: #598bf0;
  border-radius: 25px;
  left: var(--left);
  transition: all 0.4s;
  transition-timing-function: ease-in-out;
}
</style>