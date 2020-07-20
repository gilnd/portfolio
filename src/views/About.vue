<template>
 <div class="flex-col justify-center">
    <h1 class="font-bold text-primary-main md:text-5xl text-4xl ">About Me</h1>
   
    <div class="my-8 md:flex bg-background-light rounded-lg p-8">
        <img class="h-24 w-24 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 sm:my-4 md:my-0 md:mr-6" src="../assets/img/profile.png">
        <div class="text-center md:text-left">
            <!-- <span class="text-label-subtitle font-bold text-xl "> ➔➔➔ an introduction </span><br/> -->
            <p class="text-label-info  text-lg "><span class="uppercase text-sm font-bold text-label-subtitle">{{profile.startDescription}}</span>{{profile.description}}</p>
        </div>
    </div>

    <div class="w-full my-4"> 
        <h1 class="text-secondary-main font-bold text-lg my-2"> ➔ Skills </h1>
        <div class="skills">
            <div class="shadow-lg rounded-sm bg-background-light p-6 ">
                <span class="text-label-subtitle font-bold text-lg my-2">Programming Languages</span>
                <technology
                    v-for="(item, index) in technologies.programming"
                    :key="index"
                    :index="index"
                    :parentData="item">
                </technology>
            </div>

            <div class="shadow-lg rounded-sm bg-background-light p-6 ">
                <span class="text-label-subtitle font-bold text-lg my-2">Libraries & Frameworks</span>
                <technology
                    v-for="(item, index) in technologies.frameworks"
                    :key="index"
                    :index="index"
                    :parentData="item">
                </technology>
            </div> 
        </div>
        <div class="shadow-lg rounded-sm bg-background-light p-6 my-4">
            <span class="text-label-subtitle font-bold text-lg my-2">Tools</span><br>
            <span v-for="item in technologies.tools" v-bind:key="item.name" class="m-1 text-label-subtitle"> ➔ <span class="text-label-info">{{item.name}}</span></span>
        </div>
    </div>
    
    <div class="w-full my-8">
        <span class="text-secondary-main font-bold text-lg my-2">➔ Experience </span>
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

.skills{
    display: grid;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: repeat(2, 1fr);
}

@media only screen and (max-width: 1200px) {
    .skills{
        display: grid;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {
    .skills{
        display: grid;
        grid-row-gap: 1em;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
