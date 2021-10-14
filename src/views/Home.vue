k<script setup>
import { onMounted, ref } from 'vue'

// animations
import { TransitionRoot, TransitionChild } from '@headlessui/vue'

// component
import { Icon } from '@iconify/vue';
import Badge from '@/components/Badge.vue'
import ThemeToggler from '@/components/ThemeToggler.vue'
import NowPlaying from '@/components/spotify/NowPlaying.vue'
import TopTracks from '@/components/spotify/TopTracks.vue'
import Link from '@/components/Link.vue'
import Divider from '@/components/Divider.vue'


const isShowing = ref(false)
onMounted(() => {
  // setup animations to start when on mount
  isShowing.value = true
})

const openMail = () => {
  // open mailto
  const mail = document.createElement("a");
  mail.href = "mailto:gilbert.ndresaj@gmail.com";
  mail.click();
}

</script>
<template>
  <TransitionRoot
    as="div"
    class="flex flex-col py-4 space-y-6 md:py-8 md:space-y-16 "
    :show="isShowing"
    enter="transition transform duration-500 ease-out"
    enter-from="translate-x-8 opacity-0"
    enter-to="translate-x-0 opacity-100">
    
    <h1 class="text-3xl md:text-6xl font-bold md:my-4 flex flex-wrap gap-2">
      <span><span class="hidden md:visible">,</span> Hello! </span>
      <div><span class=" animate-wiggle inline-block pr-4">👋</span></div>
    </h1>

    <div class="flex flex-col space-y-4 md:space-y-8 text-base md:text-2xl">
      <p class="">
        I'm <span class="font-bold text-md text-primary uppercase">Gilbert</span>, 
        <b>Frontend Developer</b> based in <b>Turin ( Italy )</b>, i'm a 
        <a href="http://www.google.com/search?q=opensource" target="_blank"><b>#opensource</b></a> 
        enthusiast who's passionate about the <b>web</b> and the technologies that are built around it.
      </p>
      <p class="space-y-2 flex flex-col">
        <span>
          I'm a big fan of the 
          <a href="https://vuejs.org/" target="_blank" class="underline-fill text-md font-bold">Vue</a> 
          framework and i love to work with it. 
        </span>
        <span> 
          <a href="https://threejs.org/" target="_blank" class="underline-fill text-md font-bold">Three.js</a>  
          and WebGL are also some other technologies that i'm really digging into lately, it's a lot of fun to work with them. 
        </span>
      </p>
      <p>
        You can find me on 
        <a href="https://github.com/gilnd" target="_blank" class="underline-fill text-md font-bold">github</a>, 
        <a href="https://twitter.com/gilbertndr" target="_blank" class="underline-fill text-md font-bold">twitter</a>, 
        <a href="https://www.instagram.com/gil.ndr/" target="_blank" class="underline-fill text-md font-bold">instagram</a> and
        <a href="https://open.spotify.com/user/fmlddu645fmfbxo6z10moaydu" target="_blank" class="underline-fill text-md font-bold">spotify</a> 
        .
      </p>
      <Divider />
      <p class="text-base md:text-xl flex flex-col space-y-6 text-gray-600 dark:text-gray-400 italic">
        <span>For everything else my inbox is always open, whether for a potential project or idea, I’ll try my best to answer your email. </span>
        <div class="inline-block">
          <button @click="openMail()" 
            class=" px-4 py-2 flex space-x-2 items-center rounded-full 
            shadow-md  text-purple-400 bg-gray-100 dark:bg-gray-800 hover:text-white
            transform transition duration-200  hover:shadow-lg hover:bg-primary dark:hover:bg-primary hover:scale-105">
            <Icon icon="heroicons-outline:mail" class="my-auto" />
            <span class="uppercase"> Say Hi </span>
          </button>
        </div>
      </p>
    </div>
  </TransitionRoot>
</template>