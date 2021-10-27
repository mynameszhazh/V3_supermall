// 引入
import { createStore } from "vuex";

import carts from "./modules/carts";

const store = createStore({
  // 声明变量
  state() {
    return {
      order: 0,
      target: null,
      goodCurrentType: "pop",
    };
  },
  mutations: {
    itemclickchange(state) {},
    goodCurrentTypeChange(state, payload) {
      state.goodCurrentType = payload;
    },
  },
  // mutations的值由actions传入
  actions: {},
  modules: {
    carts,
  },
});

export default store;
