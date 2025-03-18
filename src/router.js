import Home from "./components/Home.vue";
import Projects from "./components/Projects.vue";
import Music from "./components/music.vue";
import Skills from "./components/Skills.vue";
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', component: Home, },
    { path: '/projects', component: Projects, },
    { path: '/music', component: Music, },
    {path: '/skills', component: Skills, },
  ],
})
export default router
