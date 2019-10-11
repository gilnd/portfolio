<template>
    <div class="bg-background-lighter py-6 px-8 my-4 text-label-info rounded-sm shadow-lg">
        <span class="text-label-subinfo text-sm ">{{parentData.startDate}} - {{parentData.endDate}}</span><br>
        <span class="text-primary-normal text-xl "><b>{{parentData.name}}</b></span><br>
        <span class="text-label-subtitle text-base "><b>{{parentData.role}}</b></span>
        <p class="text-label-subinfo text-lg ">{{parentData.description}}</p>
        <span class="text-label-subinfo text-sm "><i>{{parentData.type}}</i></span>
    </div>
</template>

<script>
export default {
    name: "event",
	props: {
		parentData: Object,
		index: Number
	}
}
</script>

<style scoped>
</style>