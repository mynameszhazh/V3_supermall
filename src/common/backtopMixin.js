import { ref } from 'vue'

export function backTopMixin() {
  const isshow = ref(false)
  const backclick = (home_scroll) => {
    home_scroll.scrollTo(0, 0, 500)
  }
  const backTopScr = (option) => {
    isshow.value = -option.y > 1000
  }

  return {
    isshow,
    backclick,
    backTopScr
  }
}  
