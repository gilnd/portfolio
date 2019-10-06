<template>
    <div class="project" >
        <div class="border-r border-b border-l border-background-lighter w-full lg:border-l-0 lg:border-t lg:border-background-lighter bg-background-lighter rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal">
            <div>
                <div class="my-4">
                    <font-awesome-icon class="text-label-info text-4xl" :icon="parentData.icon"/>
                </div>
                <div class="text-primary-normal font-bold text-xl mb-2">{{parentData.name}}</div>
                <p class="text-label-subinfo text-base">{{parentData.description}}</p>
            </div>
            
            <div class="py-2 ">
                <div class="flex items-center py-4">
                    <div class="text-sm">
                        <p class="text-label-info leading-none"><b>Author:</b> {{parentData.developer}}</p>
                        <p class="text-label-subinfo">{{parentData.startDate}} - {{parentData.endDate}}</p>
                    </div>
                </div>
                <span class="inline-block rounded-full text-sm font-semibold text-label-info mr-1"
                    v-for="(item, index) in parentData.tags"
                    :key="index"
                    :index="index"
                    :tagData="item">{{item.name }} 
                </span>
                <br>
                    <a class="text-label-subtitle hover:bg-background-xdarker rounded-full px-2 py-1 text-sm mr-1" :href="parentData.link">
                        <font-awesome-icon class="spacing-right text-lg" icon="link"/> see more
                    </a>
                
                <!--</div>-->
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "project",
	props: {
		parentData: Object,
	},
    methods: {
        getImgUrl(pic) {
            return require('../assets/img/'+pic)
        }
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
@keyframes mouseOver { 
    0% { top: 0; }
    100% {top: -16px; }
}
@keyframes mouseOut{ 
    0% {top: -16px;} 
    100% {top: 0;}
}
</style>
