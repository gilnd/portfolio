<template>
    <router-link :to=parentData.link >
        <div :class="getClass()">
            <font-awesome-icon class="m1 text-xl" :icon="parentData.icon"/>
            <span >{{parentData.name}}</span>
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
			var composedclass = "item p-2 mx-1 ";
            if (this.parentData.isActive) composedclass += " font-bold text-primary-normal";
            else composedclass += "text-label-subinfo ";
			return composedclass;
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
