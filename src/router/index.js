import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '@/view/home/index.vue'
import CateGory from '@/view/category/index.vue'
import Profile from '@/view/profile/index.vue'
import Cart from '@/view/cart/index.vue'
import Detail from '@/view/detail/index.vue'

// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  {path: '/home', component: Home},
  {
    path: '',
    redirect: '/home'
  },
  {path: '/category', component: CateGory},
  {path: '/cart', component: Cart},
  {path: '/profile', component: Profile},
  {path: '/detail/:id', component: Detail},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router

