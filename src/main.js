import './tailwind.css'
import { createApp } from 'vue'
import { store } from './store'
import { router } from './router'
import App from './App.vue'

// instances
const app = createApp(App)

// configuation
app.use(store)
app.use(router)
app.mount('#app')

// easter egg
console.log(`plz don't hack senpai! (●'◡'●)`)