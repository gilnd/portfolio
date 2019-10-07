<template>
    <router-link :to=parentData.link >
        <div :class="getClass()" class="item p-2 mx-2 text-center">
            <font-awesome-icon class="text-xl" :icon="parentData.icon"/><br>
            <span>{{parentData.name}}</span>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "menu-item",
	props: {
		parentData: Object,
		index: Number
	},
	mounted() {},
	methods: {
		getClass() {
            if (this.parentData.isActive) return " font-bold text-primary-normal";
            return "text-label-subinfo ";
        }
	}
};
</script>

<style scoped>

.item {
	display: block;
	float: left;
}
.item:hover:not(.active) {
    animation: hoverIn 0.5s;
    animation-fill-mode: forwards;
    
}

@keyframes hoverIn {
	to {
        font-weight: bold;
        letter-spacing: 0.12em
	}
}

</style>
