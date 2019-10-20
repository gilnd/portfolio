<template>
    <transition name="slideUp">
        <div v-if="this.showNav" class="navigationbar flex justify-between sm:flex-none p-1 rounded-none sm:rounded-sm bg-background-nav shadow-2xl ">
            <navbaritem 
                v-for="(item, index) in links"
                :key="index"
                :index="index"
                :parentData="item"
                @click.native="selectItem(item)"
            ></navbaritem>
        </div>
    </transition>
</template>

<script>
import navbaritem from "./navbar-item.vue";
export default {
	name: "navbar",
	components: { navbaritem },
	data() {
		return {
            showNav: true,
			links: [
				{ link: "/", name: "Home", isActive: true, icon: "home",  },
				{ link: "/about", name: "About", isActive: false, icon: "address-card" },
                { link: "/projects", name: "Projects", isActive: false, icon: "box" },
                { link: "/contact", name: "Contact", isActive: false, icon: "envelope" },
            ],
            lastScrollPosition: 0,
            scrollValue: 0
		};
	}, methods: {
		selectItem(selectedItem) {
            location.hash = "#" + selectedItem.name;
            this.links.forEach(item => {
                item.isActive = item.name == selectedItem.name;
            });
        }, onScroll() {
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
.navigationbar {
    z-index: 99;
    position: fixed;
    display: flex;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
	margin: 16px auto;
}

@media only screen and (max-width: 720px) {
    .navigationbar {
        z-index: 99;
        position: fixed;
        display: flex;
        bottom: 0;
        width: 100%;
        margin: 0;
        padding: 8px;
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
