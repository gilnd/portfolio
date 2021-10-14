import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  {
    path: '/', 
    name: 'home',
    component: Home, 
    meta: { title: 'Home' } 
  }, { 
    path: '/:path(.*)', 
    name: 'not-found',
    component: NotFound 
  },
]

