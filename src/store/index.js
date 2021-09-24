// 引入
import { createStore } from "vuex";

const store = createStore({
  // 声明变量
  state() {
    return  {
      order: 0,
      target: null,
    }
  },
  mutations: {
    itemclickchange(state){
      console.log(state.target)
    },

  },
  // mutations的值由actions传入
  actions: {
    // setName(context, value){
    //   context.commit('getname',value)
    // },
  },
  modules: {},
});

export default store
