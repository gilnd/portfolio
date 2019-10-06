<template>
<div class="my-2 sm:my-8">
    <div>
        <span class="text-accent-normal text-lg font-bold ">Hey There, i'm</span><br/>
        <span class="text-primary-normal font-bold sm:text-5xl text-4xl ">{{profile.name}} {{profile.surname}}.</span><br>
        <span class="text-accent-normal font-bold sm:text-5xl text-4xl">{ </span>
        <span class="text-background-xlighter font-bold sm:text-5xl text-3xl "> I translate great ideas into code </span>
        <span class="text-accent-normal font-bold sm:text-5xl text-3xl"> }</span>
    </div>

    <div class="text-label-subinfo text-xl my-8">
        I'm a software engineer based in Turin, Italy,<br> specialized in Webapp development! <br> I also enjoy contributing to open soruce projects .
    </div>
    <button class="text-primary-lighter rounded-sm text-lg p-4 border-2 hover:text-accent-lighter hover:bg-transparent-accent" 
        onclick="location.href='mailto:gilbert.ndresaj@gmail.com'">
        Get In Touch
    </button>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
	components: { },
    computed: {
    ...mapGetters(["profile", "projects", "age"])
    },
    created: function(){},
	methods: {}
};
</script>

<style>
</style>