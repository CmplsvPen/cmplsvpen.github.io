import Home from "./components/Home.vue";
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: Home, },
  ],
})
export default router
