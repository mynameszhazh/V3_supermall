import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import '/assets/css/base.css';
import '/assets/css/swiper.css'
// 5. Create and mount the root instance.
// import { stateSymbol, createState } from '@/utils/replaceVuex';

const app = createApp(App)

// app.provide(stateSymbol, createState());

app.use(router)
app.use(store)
// Now the app has started!
app.mount('#app')
