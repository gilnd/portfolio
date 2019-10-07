
import Home from './Home.vue';
import About from './About.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
];

export default routes;