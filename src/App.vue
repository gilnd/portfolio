<template class="overflow-hidden ">
    <div class="w-full h-full min-w-screen min-h-screen bg-background">
        <navbar></navbar>
        <div id="pages" class=" sm:w-10/12 lg:w-3/5 sm:m-auto mx-6">
            <home id="Home" class="md:min-h-screen" />
            <about id="About" class="md:min-h-screen" />
            <projects id="Projects" class="md:min-h-screen"/>
            <contact id="Contact" class="md:min-h-screen" />
        </div>   
        <footer id="bottom" class="w-full text-center p-8 bg-background-footer ">   
            <div>
                <p class="text-label-subtitle">Made by Gilbert Ndresaj with Vue.js & tailwind.css</p>
            </div>
        </footer>
    </div>
</template>

<script>

import navbar from "@/components/navbar.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Projects from "@/views/Projects.vue";
import Contact from "@/views/Contact.vue";

export default {
	name: "app",
	components: { navbar, Home, About, Projects, Contact },
	data() {
        return { prevHeight: 0 };
    },
    mounted: function(){
        // From testing, without a brief timeout, it won't work.
        setTimeout(() => this.scrollFix(this.$route.hash), 1);
    },
    methods: {
        scrollFix: function(hashbang){
            location.hash = hashbang;
        },
 
        beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
        },
        enter(element) {
            const { height } = getComputedStyle(element);
            element.style.height = this.prevHeight;
            setTimeout(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) { element.style.height = 'auto';},
    },
};
//<style src="./assets/css/tailwind.css"/>
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:500&display=swap');
@import './assets/css/tailwind.scss'; /* todo: dosen't work*/
html { scroll-behavior: smooth;} /* todo used to animate scroll on nav click */
#app{
    overflow: hidden;
}
#pages {
    overflow: hidden;
	font-family: Montserrat, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-property: height, opacity;
    transition-timing-function: ease;
    overflow: hidden;
 }

.fade-enter,
.fade-leave-active {
  opacity: 0;
  translate: scale(1);
}
</style>

