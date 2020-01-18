<template>
    <div class="project shadow-lg bg-background-light" >
        <div class="w-full rounded-sm p-6 flex flex-col justify-between leading-normal">
            <div>
                <div class="my-4 clearfix">
                    <font-awesome-icon class="float-left text-label-info text-4xl" :icon="parentData.icon"/>
                    <a class="float-right" :href="parentData.link">
                        <font-awesome-icon class="text-lg text-label-info hover:text-primary-light" icon="link"/>
                    </a>
                </div>
                <div class="text-primary-light font-bold text-xl mb-2">{{parentData.name}}</div>
                <p class="text-label-info text-base">{{parentData.description}}</p>
            </div>
            <div class="py-2 ">
                <div class="flex items-center py-4">
                    <div class="text-sm">
                        <p class="text-label-info leading-none"><b>Author:</b> {{parentData.developer}}</p>
                        <p class="text-label-info">{{parentData.startDate}} - {{parentData.endDate}}</p>
                    </div>
                </div>
                <span class="inline-block rounded-full text-sm text-label-subtitle mr-1"
                    v-for="(item, index) in parentData.tags"
                    :key="index"
                    :index="index"
                    :tagData="item">{{item.name }} 
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "project",
	props: {
		parentData: Object,
	}
};
</script>

<style scoped>
.project {
    display: grid;
    animation: mouseOut 0.3s ease-in;
}
.project:hover {
    animation: mouseOver 0.3s ease-in forwards;
}
@media only screen and (max-width: 600px) {
    .project { 
        display: block;
        width: 100%;
    }
}
/**
 * Animaitons
 */
 /*
@keyframes mouseOver { 
    0% { 
        top: 0;
        background-color: #1d2c4e;
        display: block;
        transform: translateY(0%);
    }
    100% {
        top: -16px; 
        background-color: #6d1485;
        transform: translateY(-2%);
    }
}
@keyframes mouseOut{ 
    0% {
        top: -16px;
        background-color: #6d1485;
        transform: translateY(-2%);
    } 100% {
        top: 0;
        background-color: #1d2c4e;
        transform: translateY(0%);
    }
}
*/
</style>
