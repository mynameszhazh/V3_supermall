// 引入
import { createStore } from "vuex";

const store = createStore({
  // 声明变量
  state() {
    return  {
      order: 0,
      target: null,
      goodCurrentType: 'pop'
    }
  },
  mutations: {
    itemclickchange(state){
      // console.log(state.target)
    },
    goodCurrentTypeChange(state, payload) {
      state.goodCurrentType = payload
    }
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
