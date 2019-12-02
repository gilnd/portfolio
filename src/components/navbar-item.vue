<template>
        <div :class="getClass()" class="item p-2 mx-2 text-center cursor-pointer">
            <font-awesome-icon class="text-xl" :icon="parentData.icon"/><br>
            <span>{{parentData.name}}</span>
        </div>
</template>

<script>
export default {
    name: "navbar-item",
	props: {
		parentData: Object,
		index: Number
	},
	mounted() {},
	methods: {
		getClass() {
            if (this.parentData.isActive) return " font-bold text-label-subtitle ";
            return "text-label-info ";
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
