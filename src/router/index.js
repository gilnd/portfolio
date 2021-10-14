import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import useEmitter from '@/composables/useEmitter'

const emitter = useEmitter()

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  emitter.emit('route:change', to.name)
  next()
})

export { router }