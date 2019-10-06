<template>
   <div>
        <span class="text-5xl font-bold text-primary-normal ">{ Projects } </span>
        <br/>
        <span class="text-label-info text-xl">
            I like to learn new technologies while doing side projects afterwork.
        </span>
        <div class="projects my-8">
            <project
                v-for="(item, index) in projects"
                :key="index"
                :index="index"
                :parentData="item"
            ></project>
        </div>
    </div>
</template>

<script>
import project from './components/project.vue';
import { mapGetters } from 'vuex';
export default {
	components: { project },
    created: function(){},
    computed: {
    ...mapGetters(["profile", "projects", "age"])
    },
    methods: {
    }
  }
</script>

<style scoped>
#container {
    padding-top: 4em
}

.projects{
    display: grid;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
}

@media only screen and (max-width: 1200px) {
    .projects{
        display: grid;
        grid-column-gap: 1em;
        grid-row-gap: 1em;
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (max-width: 768px) {
    .projects{
        display: grid;
        grid-row-gap: 1em;
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>
