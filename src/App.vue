<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import TopTracks from '@/components/spotify/TopTracks.vue'

const store = useStore()

onMounted(() => {
  // get default theme, if user has not set a theme gets the system default
  store.dispatch("initTheme")
})
</script>
<template>
  <div class="min-w-full min-h-screen lg:min-h-screen transition duration-200 bg-white dark:bg-gray-900
  text-gray-800 dark:text-gray-100   ">
    <div class="py-4 px-8 flex flex-col gap-4 min-h-screen  mx-auto max-w-5xl justify-center text-base md:text-lg ">
      <NavBar />
      <router-view />
      <TopTracks/>
      <Footer/>
    </div>
  </div>
</template>
