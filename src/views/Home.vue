<template>
    <div class="my-2 sm:my-8 flex flex-col justify-center">
        <div>
            <h3 class="text-secondary-main text-lg font-bold ">Hey There, I&rsquo;m</h3>
            <h1 class="text-primary-main font-bold sm:text-5xl text-4xl ">{{profile.name}} {{profile.surname}}.</h1>
            <div class="bg-primary-main text-primary-contrastText shadow-lg text-center rounded-sm ">
                <h1 class="font-bold sm:text-5xl text-3xl ">{ I translate great ideas into code }</h1>
            </div>
        </div>
        <div class="w-full my-8">
            <div class="text-label-info text-xl my-8">
                I&rsquo;m a {{age}} years old software engineer based in Turin, Italy,<br> specialized in Webapp development! <br> I also enjoy contributing to open source projects .
            </div>
            <button class="text-primary-main rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-8" 
                onclick="location.href='mailto:gilbert.ndresaj@gmail.com'">
                Get In Touch
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: { ...mapGetters(["profile", "projects", "age"]) }
};
</script>
<style>
</style>