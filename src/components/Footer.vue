<script setup>
import NowPlaying from '@/components/spotify/NowPlaying.vue'

</script>
<template>
  <div class="w-full flex flex-wrap items-center justify-between ">
    <NowPlaying/>
    <span class="flex space-x-2 md:space-x-0 md:flex-col space-y-2 items-end "> 
      <a class="underline-fill" href="https://github.com/gilnd/" >Made with ❤️ by @gilnd</a>
      <a href="https://github.com/gilnd/portfolio/blob/master/LICENSE" class="underline-fill">MIT Lincense</a> 
    </span>
  </div>
</template>