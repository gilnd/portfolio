<template>
	<div id="app" class="w-full h-full min-w-screen min-h-screen bg-background-xdarker sm:p-6">
        <menu-items></menu-items>
	    <div id="pages" class=" sm:w-10/12 lg:w-3/5 sm:m-auto mx-6 ">
            <transition 
                name="fade" 
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter"
                @afterEnter="afterEnter">
                <router-view></router-view>
            </transition>
        </div>
	</div>
</template>

<script>
import MenuItems from "./components/menu-items.vue";
import MenuItem from "./components/menu-item.vue";
export default {
	name: "app",
	components: { MenuItems, MenuItem},
	data() {
        return {prevHeight: 0};
    },
    methods: {
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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
@import './assets/css/tailwind.scss'; /* todo: dosen't work*/

#app{
    overflow: hidden;
}
#pages {
    overflow: hidden;
	font-family: Montserrat, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/*margin: auto;*/
    /* width: 60%; */
    padding: 4em 0em;
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

