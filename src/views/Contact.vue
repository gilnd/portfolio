<template>
   <div class=" flex-col justify-center text-center">
        <h1 class="font-bold text-primary-main sm:text-5xl text-4xl">Contact</h1>
        <br/>
        <div class="my-8">
            <h1 class="text-secondary-main font-bold sm:text-5xl text-3xl "> Get in touch </h1>
            <span class="text-label-info text-xl my-8">
                I&rsquo;m not currently looking for a fulltime job but my inbox is always open. Whether for a potential project or idea, I&rsquo;ll try my best to answer your email!
            </span><br>
            <button class=" my-8 rounded-sm text-lg p-4 border-2 text-primary-light hover:text-primary-main hover:bg-transparent-primary " 
                onclick="location.href='mailto:gilbert.ndresaj@gmail.com'">
                Say Hello
            </button>
        </div>
        <div class="my-8">
            <span class="text-label-info text-xl my-8">
                where else you can find me
            </span>
            <br>
            <div class="flex flex-wrap justify-center mt-4">
                <div v-for="item in socials" v-bind:key="item.name" class="flex-grow m-2 sm:mx-0 sm:my-4 sm:w-auto md:mx-2 bg-background-light rounded-sm">
                    <a :href="item.link" class="p-4 text-center rounded-sm text-xl text-label-info hover:text-secondary-main hover:bg-transparent-secondary block">
                        <font-awesome-icon :icon="['fab', item.icon]" size="lg" /><br>
                        <span>{{item.name}}</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(["socials"])
    },
}
</script>

<style scoped>
</style>
