import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate"

// modules
import theme from './modules/theme'

export const store = createStore({
  plugins: [ createPersistedState()],
  modules: { theme },
})
