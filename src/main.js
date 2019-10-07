import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "./store";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faAddressCard, faHome, faBox, faBriefcase, faBook, faLink, faLeaf, faWifi, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import './assets/css/tailwind.css'; // todo: dosen't work

library.add(faAddressCard, faBook, faBox, faBriefcase, faHome, faLink, faLeaf, faWifi, faEnvelope, faGithub, faLinkedin, faTwitter, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = new VueRouter({ routes });

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
