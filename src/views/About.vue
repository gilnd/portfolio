<template>
 <div class="flex-col justify-center">
    <span class="font-bold text-primary-main md:text-5xl text-4xl ">About Me</span>
    <div class="overflow-hidden md:overflow-auto">
        <div class="my-8">
            <div class="float-none md:float-right m-8 p-1 bg-background rounded-lg shadow-lg" >
                <img class="w-full md:w-64 rounded-lg" src="../assets/img/profile.jpg"/>
            </div>
            <div class="w-full px-16 py-8 rounded-lg bg-background-light shadow-lg">
                <span class="text-secondary-main font-bold text-xl "> An little introduction: </span><br/>
                <p class="text-label-info  text-lg ">{{profile.description}}</p>
            </div>
        </div>
    </div>
    <div class="w-full my-4"> 
        <span class="text-secondary-main font-bold text-lg my-2">Some skills: </span>
        <technology
            v-for="(item, index) in technologies"
            :key="index"
            :index="index"
            :parentData="item">
        </technology>
    </div>
    
    <div class="w-full my-4">
        <span class="text-secondary-main font-bold text-lg my-2">Where I have worked: </span>
        <timeline></timeline>
    </div>
</div>
</template>

<script>
import technology from '@/components/technology.vue';
import timeline from '@/components/timeline.vue';
import { mapGetters } from "vuex";
export default {
  components: { technology, timeline },
  
  data: () => { return {}},
    computed: {
        ...mapGetters(["age", "profile", "technologies"])  
    },
};
</script>


<style scoped>
</style>
