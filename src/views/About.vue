<template>
 <div>
    <span class="font-bold text-primary-normal sm:text-5xl text-4xl ">About Me</span>
    <br/>
    <div class="my-8">
        <span class="text-label-info font-bold text-xl "> An little introduction: </span><br>
        <p class="text-label-subinfo  text-lg ">{{profile.description}}</p><br>
        
        <div class="flex flex-wrap">
            <div class="w-full"> <!-- md:w-1/2">-->
                <span class="text-label-info font-bold text-lg">Some skills: </span>
                    <technology
                        v-for="(item, index) in technologies"
                        :key="index"
                        :index="index"
                        :parentData="item"
                    ></technology>
            </div>
            <!--<div class="px-6 w-full md:w-1/2 ">
                <span class="text-label-info font-bold text-xl "> An little introduction: </span><br>
                <p class="text-label-subinfo  text-lg ">{{profile.description}}</p><br>
            </div>
            -->
        </div>
        <div>
            <span class="text-label-info font-bold text-lg">Where I have worked: </span>
            <timeline></timeline>
        </div>
    </div>
</div>
</template>

<script>
import technology from '@/components/technology.vue';
import timeline from '@/components/timeline.vue';
import { mapGetters } from "vuex";
export default {
  components: { technology, timeline },
  computed: {
    ...mapGetters(["age", "profile", "technologies"])
  },
  created: function() {},
  methods: {}
};
</script>


<style scoped>
#container {
  padding-top: 4em;
}
</style>
