import App from "./App.vue";
import { createApp } from "vue";
// 引入弹窗组件v3popup
// import toast from "./plugin/toast/index";

import "/assets/css/base.css";
import "/assets/css/swiper.css";

import store from "./store/index.js";
import router from "./router/index.js";
import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

// 5. Create and mount the root instance.
// import { stateSymbol, createState } from '@/utils/replaceVuex';

const app = createApp(App);
// app.provide(stateSymbol, createState());

app.use(router);
app.use(store);
// 我现在怀疑这个东西的必要性，肯定有些地方是不对劲的
// app.use(toast);

// Now the app has started!
app.mount("#app");

app.config.globalProperties.$swiper = Swiper;
app.config.globalProperties.$test = function (aa) {
  console.log(aa);
};
