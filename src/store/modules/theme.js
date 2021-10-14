import useEmitter from "@/composables/useEmitter";
const emitter = useEmitter();
export default {
  
  state: { theme: localStorage.getItem('theme') },
  getters: { theme: state => state.theme },
  mutations: {
    setTheme(state, theme) {
      // save theme preference
      state.theme = theme;
      localStorage.setItem('theme', theme);

      // set theme
      document.querySelector("html").classList.remove("dark")
      if(theme === "dark")
        document.querySelector("html").classList.add("dark");
    }
  },
  
  actions: {
    initTheme({ commit }) {
      // `true` if the user has set theme to `dark` on browser/OS
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const cachedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : false;
      const theme = cachedTheme ? cachedTheme : userPrefersDark ? "dark" : "light";
      
      commit('setTheme', theme)
      emitter.emit("theme:change", theme);
    }, 
    toggleTheme({ commit }) {
      const current = localStorage.getItem('theme') 
      const theme = current === "dark" ? "light" : "dark"; 
      commit('setTheme', theme);
      emitter.emit("theme:change", theme);
    },
  },   
}