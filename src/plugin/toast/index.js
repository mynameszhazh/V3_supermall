import { createApp } from "vue";
import toast from "./toast.vue";

let $toast;
// 创建挂载实例
let createMount = (opts) => {
  const mountNode = document.createElement("div");
  document.body.appendChild(mountNode);

  const app = createApp(toast, {
    ...opts,
    modelValue: true,
    remove() {
      app.unmount(mountNode);
      document.body.removeChild(mountNode);
    },
  });
  return app.mount(mountNode);
};

export default function V3Popup(options = {}) {
  options.id = options.id || "v3popup_" + generateId();
  $toast = createMount(options);

  return $toast;
}

V3Popup.install = (app) => {
  // app.component("v3-popup", toast);
  app.config.globalProperties.$toast = V3Popup();
  // app.provide("v3popup", V3Popup);
};
