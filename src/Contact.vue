<template>
   <div class="text-center">
        <span class="font-bold text-primary-normal sm:text-5xl text-4xl  ">Contact</span>
        <br/>
        <div class="my-8">
            <span class="text-background-xlighter font-bold sm:text-5xl text-3xl "> Get in touch </span><br>
            <span class="text-label-info text-xl my-8">
                I'm not currently looking for a fulltime job my inbox is always open. Whether for a potential project or idea, I'll try my best to answer your email!.
            </span><br>
            <button class=" my-8 text-primary-lighter rounded-sm text-lg p-4 border-2 hover:text-accent-lighter hover:bg-transparent-accent" 
                onclick="location.href='mailto:gilbert.ndresaj@gmail.com'">
                Say Hello
            </button>
        </div>
        <div class="my-8">
            <span class="text-label-info text-xl my-8">
                where else you can find me:
            </span>
            <br>
            <div v-for="item in socials" v-bind:key="item.name" class="inline-block my-4">
                <div class="p-4 text-center rounded-sm text-xl text-label-info hover:text-accent-normal hover:bg-transparent-accent ">
                    <a :href="item.link">
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
