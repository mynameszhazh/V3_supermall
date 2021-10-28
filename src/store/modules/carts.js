const state = {
  cartList: [],
};

const mutations = {
  // 注意点:  在我们的mutations里面最好不要有if这种由判断的东西在里面  他最好就是只用一个结果的函数在里面
  addCounter(state, payLoad) {
    payLoad.count++;
  },
  addToCart(state, payLoad) {
    payLoad.count = 1;
    payLoad.checked = false;
    state.cartList.push(payLoad);
  },
};

const actions = {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      // 这里会获取到一个新的我发现的一个原来里面有的一个payLoad数据  让他的count加一就可以了
      const product = context.state.cartList.find(
        (item) => item.iid === payLoad.iid
      );
      if (product) {
        context.commit("addCounter", product);
        resolve("商品数量加一~");
      } else {
        context.commit("addToCart", payLoad);
        resolve("添加商品成功~");
      }
    });
  },
};

const getters = {
  cartItemCount(state) {
    return state.cartList.length;
  },
  cartList(state) {
    // 这个玩意我暂时还不知道是干什么的
    return state.cartList;
  },
};

export default {
  state,
  mutations,
  actions,
  getters,
};
