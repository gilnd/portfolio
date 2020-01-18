<template>
    <div class="my-8 flex flex-col md:justify-center">
        <div>
            <h3 class="text-secondary-main text-lg font-bold ">➔ Hey There, I&rsquo;m</h3>
            <h1 class="text-primary-main font-bold sm:text-5xl text-4xl ">{{profile.name}} {{profile.surname}}.</h1>
            <div class="bg-primary-main text-background shadow-lg text-center rounded-sm ">
                <h1 class="font-bold md:text-3xl sm:text-2xl  text-xl ">{ I translate great ideas into code }</h1>
            </div>
        </div>
        <scene></scene>
        <div class="w-full my-2">
            <div class="text-label-info text-xl">
                I&rsquo;m a {{age}} years old software engineer based in Turin, Italy,<br> specialized in Webapp development! <br> I also enjoy contributing to open source projects .
            </div>
            <button class="text-primary-main rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-4" 
                onclick="location.href='mailto:gilbert.ndresaj@gmail.com'">
                Get In Touch
            </button>
            <a href="resume.pdf" download>
                <button class="ml-5 text-primary-main rounded-sm text-lg p-4 border-2 hover:bg-transparent-primary my-4" >
                    Get Resume
                </button>
            </a>
        </div>
    </div>
</template>

<script>
import scene from "@/components/scene.vue";
import { mapGetters } from "vuex";
export default {
    components: { scene },
    computed: { ...mapGetters(["profile", "projects", "age"]) }  
};
</script>
<style></style>