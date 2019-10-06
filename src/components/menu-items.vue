<template>
    <transition name="slideUp">
        <div v-if="this.showNav" id="navBar" class="navbar p-1 rounded-sm bg-background-xlighter shadow-2xl ">
            <menu-item 
                v-for="(item, index) in menuitems"
                :key="index"
                :index="index"
                :parentData="item"
                @click.native="selectItem(item)"
            ></menu-item>
        </div>
    </transition>
</template>

<script>
import MenuItem from "./menu-item.vue";

export default {
	name: "menu-items",
	components: { MenuItem },
	data() {
		return {
            showNav: true,
			menuitems: [
				{ link: "/", name: "Home", isActive: true, icon: "home",  },
				{ link: "/about", name: "About Me", isActive: false, icon: "address-card" },
				{ link: "/projects", name: "Projects", isActive: false, icon: "box" }
            ],
            lastScrollPosition: 0,
            scrollValue: 0
		};
	}, methods: {
		selectItem(selectedItem) {
			this.menuitems.forEach(item => {
				item.isActive = item.name == selectedItem.name;
			});
        },onScroll (event) {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            
            this.showNav = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    },created () {
        window.addEventListener('scroll', this.onScroll);
    }, destroyed() {
        window.removeEventListener('scroll', this.onScroll);
    }
}
</script>

<style>


.navbar {
    z-index: 99;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
	margin: 16px auto;
}

@media only screen and (max-width: 720px) {
    .navbar {
        z-index: 99;
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        margin: 0;
        justify-content: center;
    }
}

.slideUp-enter-active{
    animation: slideUp 0.4s;
}
.slideUp-leave-active{
    animation: slideUp 0.4s reverse;
}
/* Safari 4.0 - 8.0 */
@-webkit-keyframes slideUp {
    0% { bottom: -68px;}
    65% { bottom : 16px;}
    100% { bottom : 0px;}
}

@keyframes slideUp {
    0% { bottom: -68px;}
    65% { bottom : 16px;}
    100% { bottom : 0px;}
}
</style>
