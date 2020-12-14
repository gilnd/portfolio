import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faHome, faBox, faBriefcase, faBook, faLink, faLeaf, faWifi, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faSpotify, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAddressCard, faBook, faBox, faBriefcase, faHome, faLink, faLeaf, faWifi, faEnvelope, faGithub, faLinkedin, faTwitter, faSpotify, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
